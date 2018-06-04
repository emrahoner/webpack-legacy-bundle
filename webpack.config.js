const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        component: './src/index.js'
    },
    mode: 'none',
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            { 
                test: /\.(jpg|jpeg|png)$/, 
                use: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: require.resolve("./src/jquery.fileupload.js"),
                use: [
                    "imports-loader?define=>undefined"
                ]
            },
            {
                test: require.resolve("./src/respond.js"),
                use: [
                    "exports-loader?window.respond",
                    "imports-loader?this=>window"
                ]
            },
            {
                
                test: require.resolve("./src/raphael.js"),
                use: [
                    "exports-loader?Raphael",
                    "imports-loader?Raphael=>{},define=>undefined,this=>window"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "jquery": path.join(__dirname, "./src/jquery-1.10.0.js"),
            "jquery-ui": path.join(__dirname, "./src/jquery-ui.1.10.4.js"),
            "jquery-easing": path.join(__dirname, "./src/jquery.easing.1.3.js"),
            "jquery-fileupload": path.join(__dirname, "./src/jquery.fileupload.js"),
            "bootstrap": path.join(__dirname, "./src/bootstrap-3.1.0.js"),
            "respond": path.join(__dirname, "./src/respond.js"),
            "raphael": path.join(__dirname, "./src/raphael.js")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "respond": "respond",
            "Raphael": "raphael"
        })
    ]
}