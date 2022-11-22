import {getDefaultCauses} from '../../scrapers/gfmScraper'

const gfmCauses = async () =>{
    const listOfCauses = await getDefaultCauses('https://www.gofundme.com/en-gb/discover/medical-fundraiser');
    return listOfCauses;
}

export default gfmCauses;