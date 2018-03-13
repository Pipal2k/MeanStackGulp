"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var DataAccess = require("../DataAccess");
var mongoose_1 = require("mongoose");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var HeroSchema = /** @class */ (function () {
    function HeroSchema() {
    }
    Object.defineProperty(HeroSchema, "heroSchema", {
        get: function () {
            var heroSchema = new mongoose_1.Schema({
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
            return heroSchema;
        },
        enumerable: true,
        configurable: true
    });
    return HeroSchema;
}());
var schema = mongooseConnection.model("Heroes", HeroSchema.heroSchema);
module.exports = schema;
//# sourceMappingURL=HeroSchema.js.map