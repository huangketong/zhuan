const devConfig = require('./webpack.config.dev.js');

const buildConfig = (env) => {
    console.log('***************************');
    console.log(`now path is ${env}`);
    console.log('***************************');
    const config = devConfig({env});
    return config;
}
module.exports = buildConfig;