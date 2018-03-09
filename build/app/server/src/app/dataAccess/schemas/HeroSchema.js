"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var HeroSchema = (function () {
    function HeroSchema() {
    }
    Object.defineProperty(HeroSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                power: {
                    type: String,
                    required: true
                },
                amountPeopleSaved: {
                    type: Number,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return HeroSchema;
}());
var schema = mongooseConnection.model("Heroes", HeroSchema.schema);
"";
module.exports = schema;
//# sourceMappingURL=HeroSchema.js.map