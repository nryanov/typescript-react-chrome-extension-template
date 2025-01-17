const path = require("path");

module.exports = {
    entry: {
        background: path.join(__dirname, "../src/background.ts"),
        popup: path.join(__dirname, "../src/popup.tsx"),
        options: path.join(__dirname, "../src/options.tsx")
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};