import {Stack, Select, Box, Text} from "@chakra-ui/react";
import {gfmCategories, gfmCountries} from '../data/gfmData'
import {createGFMUrl} from '../utils/gfmUtils'
import { useState, useEffect,useContext } from "react";
import { URLContext } from "../contexts/URLContext";


const FilterComponent = () =>{
    const {setUrlToScrape} = useContext(URLContext)
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(()=>{
        if ((selectedCountry !== "") && (selectedCategory !== "")){
            const url = createGFMUrl(selectedCountry, selectedCategory);
            setUrlToScrape(url)
        }

        return ()=>{
            console.log('cleanup')
        }
    })

    const FilterText = ({country, category}) =>{
        return (
            <Box m={5} display='flex' alignItems='center' justifyContent='center'>
                <Text fontSize='xl'> Looking for {category} causes in {country} </Text>
            </Box>
        )
    }

    return(
        <div>
            <Stack direction={['column', 'row']} spacing={10} m={5}>
                <Select placeholder="Select Country"
                    value={selectedCountry}
                    onChange={(e)=>{
                        setSelectedCountry(e.target.value)
                    }}   
                >
                    <option disabled>Countries</option>
                    {gfmCountries && gfmCountries.map((option)=>(
                        <option key={option.code} value={option.country}>
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
                        <option key={option.url} value={option.category}>
                            {option.category}
                        </option>
                    ))}
                </Select>
            </Stack>

            {(selectedCategory !== "" && selectedCountry!== "") && 
                <FilterText category={selectedCategory} country={selectedCountry}/>
            }
        </div>
    )
}

export default FilterComponent;