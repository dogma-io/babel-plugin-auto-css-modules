import {existsSync} from 'fs'
import {basename, dirname, join} from 'path'

export default ({types: t, template}: *): * => {
  return {
    visitor: {
      Program(path: *, state: *) {
        const {filename} = state.file.opts
        const fileNameWithoutExtension = basename(filename, '.js')
        const directory = dirname(filename)
        const cssModulePath = join(directory, `${fileNameWithoutExtension}.css`)
        const cssModuleExists = existsSync(cssModulePath)

        if (cssModuleExists) {
          path.node.body.unshift(
            t.importDeclaration(
              [],
              t.stringLiteral(`./${fileNameWithoutExtension}.css`),
            ),
          )
        }
      },
    },
  }
}
