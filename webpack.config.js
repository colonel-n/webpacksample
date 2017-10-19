const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const PRODUCTION = process.env.NODE_ENV === 'production';
module.exports = [
    {
        entry: path.resolve(path.join('src', 'main.js')),
        output: {
            path: path.resolve("public"),
            filename: 'build.js'
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: 'vue-loader'},
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                    loader: 'url-loader?limit=10000'
                }, {
                    test: /\.(eot|ttf|wav|mp3)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.vue'],
            modules: [
                "node_modules"
            ],
            alias: {
                'vue$': 'vue/dis' +
                't/vue.esm.js'
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }),
            ...(
                PRODUCTION ? [
                    new webpack.optimize.UglifyJsPlugin(),
                ] : []
            )
        ]
    },
    {
        entry: path.resolve(path.join('src', 'stylesheets', 'app.scss')),
        output: {
            path: path.resolve("public"),
            filename: 'style.css'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: "style-loader",
                            use: PRODUCTION ? ["css-loader?minimize!sass-loader"] : ["css-loader?minimize!sass-loader"]
                        }
                    )
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
        ]
    },
]