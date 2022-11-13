import {Stack, Select} from "@chakra-ui/react";
import {gfmCategories, gfmCountries} from '../data/gfmData'
import {createGFMUrl} from '../utils/gfmUtils'
import { useState, useEffect } from "react";
import FilterText from "./FilterText";

const FilterComponent = () =>{

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(()=>{
        /*
        console.log("the selected country " + selectedCountry);
        console.log("the selected category " + selectedCategory);
        */
        if ((selectedCountry !== "") && (selectedCategory !== "")){
            const urlToScrape = createGFMUrl(selectedCountry, selectedCategory);
            console.log(urlToScrape)
        }
    })

    return(
        <Stack direction={['column', 'row']} spacing={10} m={5}>
            <Select placeholder="Select Country"
                value={selectedCountry}
                onChange={(e)=>{
                    setSelectedCountry(e.target.value)
                }}   
            >
                <option disabled>Countries</option>
                {gfmCountries && gfmCountries.map((option)=>(
                    <option key={option.code} value={option.code}>
                        {option.country}
                    </option>
                ))}
            </Select>

            <Select placeholder="Select Category" 
                defaultValue={selectedCategory}
                onChange={(e)=>{
                setSelectedCategory(e.target.value)
            }}>
                <option disabled>Categories</option>
                {gfmCategories && gfmCategories.map((option)=>(
                    <option key={option.url} value={option.url}>
                        {option.category}
                    </option>
                ))}
            </Select>
        </Stack>
    )
}

export default FilterComponent;