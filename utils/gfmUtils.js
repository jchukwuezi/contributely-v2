const {gfmCategories, gfmCountries} = require('../data/gfmData')

//create goFundMe URL to scrape
const createGFMUrl = (country, category) =>{
    const baseUrl = 'https://www.gofundme.com'
    const gfCountry = gfmCountries.find(obj => obj.country === country).code;
    const gfmCategory = gfmCategories.find(obj=>obj.category === category).url;
    const mainUrl = `${baseUrl}/${gfCountry}/${gfmCategory}`
    return mainUrl;
} 


module.exports = {
    createGFMUrl
}