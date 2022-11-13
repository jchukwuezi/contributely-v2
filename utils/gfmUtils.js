const {gfmCategories, gfmCountries} = require('../data/gfmData')

//create goFundMe URL to scrape
const createGFMUrl = (country, category) =>{
    const baseUrl = 'https://www.gofundme.com'
    const mainUrl = `${baseUrl}/${country}/${category}`
    return mainUrl;
} 


module.exports = {
    createGFMUrl
}