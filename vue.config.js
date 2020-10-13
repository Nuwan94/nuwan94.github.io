const webpack = require("webpack");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    configureWebpack: {
        // Set up all the aliases we use in our app.
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6,
            }),
        ],
    },
    pwa: {
        name: "Nuwan Alawatta",
        themeColor: "#212529",
        msTileColor: "#212529",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "#212529",
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js',
        }
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== "production",
    },
};