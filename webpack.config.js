const path = require("path")
const webpack = require("webpack")

module.exports = {
    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "./node_modules")
        ]
    }
}
