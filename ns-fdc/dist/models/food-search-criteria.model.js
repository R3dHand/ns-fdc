"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TradeChannels = exports.SortOrder = exports.SortBy = exports.FoodSearchCriteria = exports.DataTypes = void 0;
/**
 * 
 * @enum
 * @property {string} FOUNDATION - Data and metadata on individual samples of commodity/commodity-derived minimally processed foods with insights into variability
 * @property {string} SR_LEGACY - Historic data on food components including nutrients derived from analyses, calculations, and published literature
 * @property {string} SURVEY_FNDDS - Data on nutrients and portion weights for foods and beverages reported in What We Eat in America, NHANES
 * @property {string} EXPERIMENTAL - Data on food published in peer-reviewed journals supported by or in collaboration with USDA
 * @property {string} BRANDED - Data from labels of national and international branded foods collected by a public-private partnership
 */
const DataTypes = exports.DataTypes = {
  FOUNDATION: "Foundation",
  SR_LEGACY: "SR Legacy",
  SURVEY_FNDDS: "FNDDS",
  EXPERIMENTAL: "Experimental",
  BRANDED: "Branded"
};

/**
 * @enum
 * @property {string} NONE - NONE
 * @property {string} DATA_TYPE - dataType.keyword
 * @property {string} LOWER_CASE_DESC - lowercaseDescription.keyword
 * @property {string} FDCID - This is the number provided for each food data record in FoodData Central. A food record is the totality of information (e.g., values for components, including nutrients, descriptive information) published on a food item. Each time the data in a food record changes, that food item receives a new FDC_ID number.
 * @property {string} PUBILSHED_DATE - publishedDate
 */
const SortBy = exports.SortBy = {
  NONE: "",
  DATA_TYPE: "dataType.keyword",
  LOWER_CASE_DESC: "lowercaseDescription.keyword",
  FDCID: "fdcid",
  PUBILSHED_DATE: "publishedDate"
};

/**
 * @enum
 * @property {string} ASC - ascending
 * @property {string} DESC - decending
 */
const SortOrder = exports.SortOrder = {
  ASC: "asc",
  DESC: "desc"
};

/**
* @enum
* @property {string} CHILD_NUTRITION_FOOD_PROGRAMS - CHILD_NUTRITION_FOOD_PROGRAMS
* @property {string} DRUG - DRUG
* @property {string} FOOD_SERVICE - FOOD_SERVICE
* @property {string} GROCERY - GROCERY
* @property {string} MASS_MERCHANDISING - MASS_MERCHANDISING
* @property {string} MILITARY - MILITARY
* @property {string} ONLINE - ONLINE
* @property {string} VENDING - VENDING
*/
const TradeChannels = exports.TradeChannels = {
  CHILD_NUTRITION_FOOD_PROGRAMS: "CHILD_NUTRITION_FOOD_PROGRAMS",
  DRUG: "DRUG",
  FOOD_SERVICE: "FOOD_SERVICE",
  GROCERY: "GROCERY",
  MASS_MERCHANDISING: "MASS_MERCHANDISING",
  MILITARY: "MILITARY",
  ONLINE: "ONLINE",
  VENDING: "VENDING"
};
class FoodSearchCriteria {
  /**
   * @typedef {Object} FoodSearchCriteria
   * @property {string} query -Search terms to use in the search. The string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
   * @property {string[]} [selectedDataTypes] - Optional. Filter on a specific data type; specify one or more values in an array.
   * @property {number} [pageSize] - Optional. Maximum number of results to return for the current page. Default is 50.
   * @property {number} [pageNumber] - Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
   * @property {string} [selectedSortBy] -Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and description.keyword will be description in future releases.
   * @property {string} [selectedSortOrder] -Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * @property {string} [brandOwner] - Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods.
   * @property {string[]} [selectedTradeChannels] - Optional. Filter foods containing any of the specified trade channels.
   * @property {string} [startDate] - Optional. Filter foods published on or after this date. 
   * @property {string} [endDate] - Optional. Filter foods published on or before this date.
   */

  /**
   * @param {number?} pageSize Set the page size of the result set (defaults to 50)
   */
  constructor(pageSize) {
    this.query = '';
    this.selectedDataTypes = Array();
    this.pageSize = pageSize == null ? 50 : pageSize;
    this.pageNumber = 1;
    this.selectedSortBy = '';
    this.selectedSortOrder = '';
    this.brandOwner = '';
    this.selectedTradeChannels = Array();
    this.startDate = '';
    this.endDate = '';
  }
}
exports.FoodSearchCriteria = FoodSearchCriteria;