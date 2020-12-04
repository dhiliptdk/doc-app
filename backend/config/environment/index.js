var path = require('path');

module.exports = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),


    // Server port
    port: process.env.PORT || 9000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // cors whitelist urls 
    whitelistURLs: ["http:localhost:4200"],

    mongo: {
        uri: 'mongodb+srv://dbuser:VGvjwZgdolhLH9F2@code-ai-cluster-jhecs.mongodb.net/test?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            db: {
                safe: true
            }
        }
    },
}