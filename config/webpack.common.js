/**
 * Created by Administrator on 2016/11/24.
 */
var webpack = require('webpack');
var helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const AssetsPlugin = require('assets-webpack-plugin');
/**
 *用来修正angular2.2.1版本的错误，不知道2.2.3改了没有
 */
//const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
//const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
    /**
     * angular 应用的3个入口文件
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        /**
         * 配置用来解析模块的的扩展名，因为有些默认的会省略扩展名
         */
        extensions: ['', '.ts', '.js','.json'],
        modules:[helpers.root('src'),helpers.root('node_modules')]
    },

    module: {
        loaders: [
            /**
             * awesome-typescript-loader 用来配合tsconfig编译typescript
             * angular2-template-loader 用来把模块的样式和html打到component中， inlines all html and style's in angular2 components
             * angular2-router-loader lazy-load 跟之前的懒加载类似，从而写法上简单很多
             */
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file?name=assets/img/[name].[hash].[ext]'
            },      {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/fonts/[name].[hash].[ext]'
            },
            /**
             * app外的全部抽到应用级样式文件中
             */
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            /**
             * app下的用文本打到component中
             */
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    },

    plugins: [
        /**
         * 生成一个文件，用来对照编译前后的文件位置，以免加md5后看不出来
         */
        new AssetsPlugin({
            path: helpers.root('dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
        }),
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency',
            inject: 'head'
        }),

        /*
         * Plugin: ScriptExtHtmlWebpackPlugin
         * Description: Enhances html-webpack-plugin functionality
         * with different deployment options for your scripts including:
         *
         * See: https://github.com/numical/script-ext-html-webpack-plugin
         */
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })

    ],

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
