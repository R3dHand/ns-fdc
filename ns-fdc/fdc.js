"use strict";

var _fdcSearchService = require("./dist/fdc-search-service");
var _foodSearchCriteria = require("./dist/models/food-search-criteria.model");


exports.foodsSearch = _fdcSearchService.foodsSearch;
exports.FoodSearchCriteria = _foodSearchCriteria.FoodSearchCriteria;
exports.DataTypes = _foodSearchCriteria.DataTypes;
exports.SortOrder = _foodSearchCriteria.SortOrder;
exports.SortBy = _foodSearchCriteria.SortBy;
exports.TradeChannels = _foodSearchCriteria.TradeChannels;

