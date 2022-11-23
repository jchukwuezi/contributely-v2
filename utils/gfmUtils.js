const {gfmCategories, gfmCountries} = require('../data/gfmData')

//create goFundMe URL to scrape
const createGFMUrl = (nation, cat) =>{
    const baseUrl = 'https://www.gofundme.com'
    const gfCountry = gfmCountries.find(({ country }) => country === nation)
    const gfmCategory = gfmCategories.find(({ category }) => category === cat)
    const mainUrl = `${baseUrl}/${gfCountry.code}/${gfmCategory.url}`
    return mainUrl;
} 

const getImgURL = (url) =>{
    const foundUrl = url.match("background-image:url((.*))")[1]
    return foundUrl.replace(/[()]/g, '')
}

const getGoalValue = (goal) =>{
    return goal.match("of(.*)goal")[1]
}


module.exports = {
    createGFMUrl, 
    getImgURL,
    getGoalValue
}