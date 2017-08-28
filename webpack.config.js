const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: __dirname + '/src/main.js',
        output: {
            path: __dirname + "/public/javascripts",
            filename: 'build.js'
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: 'vue-loader'},
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.png$/,
                    loader: "url-loader?limit=100000"
                },
                {
                    test: /\.jpg$/,
                    loader: "file-loader"
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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
            ]
        }
    },
    {
        entry: __dirname + '/src/stylesheets/app.scss',
        output: {
            path: __dirname + "/public/stylesheets",
            filename: 'bundle.css'
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
            new ExtractTextPlugin('bundle.css')
        ]
    },
]