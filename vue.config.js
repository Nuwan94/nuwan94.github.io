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
        name: "Nuwan Sameera Alawatta | Software Engineer",
        themeColor: "#6e5cd2",
        msTileColor: "#6e5cd2",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "#6e5cd2",
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== "production",
    },
};