import {Stack, Select} from "@chakra-ui/react";
import {gfmCategories, gfmCountries} from '../data/gfmData'
import {createGFMUrl} from '../utils/gfmUtils'
import { useState } from "react";

const FilterComponent = () =>{

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleChange = () =>{
        if ((selectedCountry !== "") && (selectedCategory !== "")){
            console.log("Data from select event........")
            console.log(selectedCategory)
            console.log(selectedCountry)
            const urlToScrape = createGFMUrl(selectedCategory, selectedCountry);
            console.log(urlToScrape)
        }
    }

    return(
        <Stack direction={['column', 'row']} spacing={10} m={5}>
            <Select placeholder="Select Country" 
                defaultValue={selectedCountry}
                onChange={(e)=>{
                setSelectedCountry(e.target.value)
                console.log(selectedCountry)
                /*handleChange()*/
            }}>
                <option disabled>Countries</option>
                {/*
                {gfmCountries && gfmCountries.map(
                    option => (
                        <option key={option.code} value={option.country}>
                            {option.country}
                        </option>
                    )
                )}
                */}
                {gfmCountries && gfmCountries.map((option, index)=>(
                    <option key={index} value={option.code}>
                        {option.country}
                    </option>
                ))}
            </Select>

            <Select placeholder="Select Category" 
                defaultValue={selectedCategory}
                onChange={(e)=>{
                setSelectedCategory(e.target.value)
                console.log(selectedCategory)
                /*handleChange()*/
            }}>
                <option disabled>Categories</option>
                {/*
                {gfmCategories && gfmCategories.map(
                    option => (
                        <option key={option.url} value={option.category}>
                            {option.category}
                        </option>
                    )
                )}
                */}

                {gfmCategories && gfmCategories.map((option, index)=>(
                    <option key={index} value={option.url}>
                        {option.category}
                    </option>
                ))}
            </Select>
        </Stack>
    )
}

export default FilterComponent;