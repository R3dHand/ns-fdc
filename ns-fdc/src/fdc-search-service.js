var https = require('https');
import { FoodSearchCriteria } from './models/food-search-criteria.model';

/**
 * @description Returns a list of foods that matched search (query) keywords.
 * 
 * @param {FoodSearchCriteria} searchCriteria - Request Body
 * @param {string} apiKey - FoodData Central api key for Authorization
 * @returns {Promise}
 */
export function foodsSearch(searchCriteria, apiKey) {    
    return new Promise(async (resolve, reject) => {
        const options = {
            hostname: 'api.nal.usda.gov',
            path: `/fdc/v1/foods/search?api_key=${apiKey}`,
            method: 'POST',
            port: 443,
            headers: {
                'Content-Type': 'application/json'
            }
        }   
        let body = [];    
        const req = https.request(options, res => {
            res.on('data', (chunk) => {
                body.push(chunk
            )});
            res.on('error', e => {
                console.log(e);
                reject(e);
            });
            res.on('end', () => {
                const data = Buffer.concat(body).toString();
                const response = JSON.parse(data);
                if(response.error != undefined) {
                  reject(response.error);
                }
                resolve(response);
            });
        });

        req.write(JSON.stringify(searchCriteria));
        req.on('error', e => {
            console.log(e);
            reject(e);
        });
        req.end();    
    });
}
