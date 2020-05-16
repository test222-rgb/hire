/* eslint-disable */

const withSass = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')
const dotenv = require('dotenv')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const webpack = require('webpack')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

const { parsed: env } = dotenv.config({
  ...process.env.NODE_ENV === 'production' && { path: '.env.production' },
  ...process.env.NODE_ENV === 'staging' && { path: '.env.staging' },
})

const plugins = [
  [withSourceMaps],
  [withOptimizedImages, {
    imagesFolder: 'assets/images',
  }],
  [withSass],
]

module.exports = withPlugins([...plugins], {
  webpack: config => {
    config.node = {
      fs: 'empty',
    }

    config.plugins.push(
      new webpack.EnvironmentPlugin(env),
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    )

    return config
  },
})
