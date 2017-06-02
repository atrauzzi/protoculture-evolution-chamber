import * as _ from "lodash";
import * as path from "path";
import * as glob from "glob";
import * as webpack from "webpack";


const webBundles = glob.sync(`${__dirname}/src/Bundle/Web*.ts`);

const template = {

    devtool: "source-map",

    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json",
        ]
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
            sourceMap: true,
        })
    ],
};

export default _.map(webBundles, (webBundle) => {

    const basePath = `lib/Bundle`;
    const baseName = path.basename(webBundle, ".ts");

    const outputPath = path.resolve(__dirname, basePath);
    const outputFilename = `${_.kebabCase(baseName).toLowerCase()}.js`;

    return {
        ...template,
        entry: webBundle,
        output: {
            filename: outputFilename,
            path: outputPath,
            publicPath: "/",
        }
    };
});
