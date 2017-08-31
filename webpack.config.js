const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: __dirname + '/src/main.js',
        output: {
            path: __dirname + "/public/",
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
        resolve: {
            extensions: ['.js', '.vue'],
            modules: [
                "node_modules"
            ],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
        }
    },
    {
        entry: __dirname + '/src/stylesheets/app.scss',
        output: {
            path: __dirname + "/public",
            filename: 'style.css'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: "style-loader",
                            use: ["css-loader?minimize!sass-loader"]
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