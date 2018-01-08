import {transformFileSync} from '@babel/core'
import {join} from 'path'

function t(code, fileName) {
  return transformFileSync(join(__dirname, 'fixtures', fileName), {
    plugins: [require('../../lib/')],
    presets: ['@babel/env', '@babel/react'],
  })
}

describe('babel-plugin-auto-css-modules', () => {
  it('should insert CSS import when CSS module exists with same name', () => {
    expect(t('var a = true', 'foo.js')).toMatchSnapshot()
  })

  it('should not insert CSS import when CSS module does not exist with same name', () => {
    expect(t('var a = true', 'bar.js')).toMatchSnapshot()
  })
})
