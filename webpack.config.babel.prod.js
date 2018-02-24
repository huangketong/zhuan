const productConfig = require('./webpack.config.prod.js');

const buildConfig = (env) => {
    console.log('***************************');
    console.log(`now path is ${env}`);
    console.log('***************************');
    const config = productConfig({env});
    return config;
}
module.exports = buildConfig;