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
        })
    ],
};

export default _.map(webBundles, (webBundle) => {

    const outputPath = `${__dirname}/bundle`;
    const baseName = path.basename(webBundle, ".ts");
    const outputFilename = `${_.kebabCase(baseName).toLowerCase()}.js`;

    return {
        ...template,
        entry: webBundle,
        output: {
            filename: outputFilename,
            path: outputPath,
        }
    };
});
