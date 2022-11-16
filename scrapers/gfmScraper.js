import {getImgURL, getGoalValue} from '../utils/gfmUtils'
const cheerio = require('cheerio')

const scrapeCause = async (mainUrl) =>{
    const data = await fetch(mainUrl)
    const pageBody = await data.text()
    const $ = cheerio.load(pageBody)
    const title = $('h1.a-campaign-title').text()
    const description = $('div.o-campaign-description').text()
    let summary = description.split('. ', 1)[0]
    summary = summary.replace(/(\r\n|\n|\r)/gm, "")
    const causeUrl = mainUrl
    const goalValue = $('span.text-stat.text-stat-title').text()
    const goalAmount = getGoalValue(goalValue)
    const imgDetails = $('div.a-image.a-image--background').attr('style')
    const imgUrl = getImgURL(imgDetails)
    const causeObj = {
        "title": title,
        "description": summary,
        "url": causeUrl,
        "goalAmount": goalAmount,
        "image": imgUrl,
        "dateCreated": dateCreated
    }
    return causeObj;
}


//getting 7 default causes for now from gofundme
const getDefaultCauses = async (gfmUrl) => {
    const data = await fetch(gfmUrl)
    const pageBody = await data.text()
    const $ = cheerio.load(pageBody)
    //gets all of the url on the page then selects 7
    //need to find a way to make this faster (stop looking after 7)
    const gfmUrls = []
    $('div.grid-x.grid-margin-x.funds-contain.funds-contain--tiles-grid').find('div > div > a').each((index, elem) => {
        const causeUrl = $(elem).attr('href')
        gfmUrls.push(causeUrl)
    })

    const defaultCauses = []
    for (const url of gfmUrls.slice(0, 7)){
        const scrapedCause = await scrapeCause(url)
        defaultCauses.push(scrapedCause)
    }

    console.log(defaultCauses)
    return defaultCauses
}

module.exports = {
    getDefaultCauses
}