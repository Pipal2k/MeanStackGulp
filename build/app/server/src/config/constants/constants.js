"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://Pipal:Paper3003!@cluster0-shard-00-00-r6ymi.mongodb.net:27017,cluster0-shard-00-01-r6ymi.mongodb.net:27017,cluster0-shard-00-02-r6ymi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
Object.seal(Constants);
module.exports = Constants;
//# sourceMappingURL=constants.js.map