"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HeroSchema = require("./../dataAccess/schemas/HeroSchema");
var RepositoryBase = require("./BaseRepository");
var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        return _super.call(this, HeroSchema) || this;
    }
    return HeroRepository;
}(RepositoryBase));
Object.seal(HeroRepository);
module.exports = HeroRepository;
//# sourceMappingURL=HeroRepository.js.map