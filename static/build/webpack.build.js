const webpack = require('webpack')
const fs = require('fs')
let webpackConfig = require('./webpack.base')
const merge = require('webpack-merge')
const chalk = require('chalk')
const ora = require('ora')
const tar = require('tar')
const rm = require('rimraf')
const { join } = require('path')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
webpackConfig = merge(webpackConfig, {
    plugins: [
        new OptimizeCssPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module, count) => {
              return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(join(__dirname,'../../node_modules')) === 0
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'mainfest',
            chunks: ['vendor']
        })
    ]
})
let spinner = ora('building for production...')
spinner.start()
rm(join(__dirname,'../','dist'), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err
        tar.c({gzip: true}, ['dist']).pipe(fs.createWriteStream('dist.tgz'))
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan(' Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})

