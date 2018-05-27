import {transformFile} from '@babel/core'
import {join} from 'path'

function t(fileName) {
  const filePath = join(__dirname, 'fixtures', fileName)
  const options = {
    plugins: [require('../../lib/')],
    presets: ['@babel/env', '@babel/react'],
  }

  return new Promise((resolve, reject) => {
    transformFile(filePath, options, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

describe('babel-plugin-auto-css-modules', () => {
  it('should insert CSS import when CSS module exists with same name', () => {
    return t('foo.js').then(result => {
      expect(result.code).toMatchSnapshot()
    })
  })

  it('should not insert CSS import when CSS module does not exist with same name', () => {
    return t('bar.js').then(result => {
      expect(result.code).toMatchSnapshot()
    })
  })
})
