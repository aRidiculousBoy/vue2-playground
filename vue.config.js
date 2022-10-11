const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  }
})
