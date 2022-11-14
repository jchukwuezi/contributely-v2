const {gfmCategories, gfmCountries} = require('../data/gfmData')

//create goFundMe URL to scrape
const createGFMUrl = (nation, cat) =>{
    const baseUrl = 'https://www.gofundme.com'
    const gfCountry = gfmCountries.find(({ country }) => country === nation)
    const gfmCategory = gfmCategories.find(({ category }) => category === cat)
    const mainUrl = `${baseUrl}/${gfCountry.code}/${gfmCategory.url}`
    return mainUrl;
} 


module.exports = {
    createGFMUrl
}