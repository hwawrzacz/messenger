const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    watch: true
}