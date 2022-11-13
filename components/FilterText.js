//component will take in country and category and create a link from that
import { Text, Box } from "@chakra-ui/react";

const FilterText = ({country, category}) =>{
    return (
        <Box m={5} display='flex' alignItems='center' justifyContent='center'>
            <Text fontSize='xl'> Looking for {category} causes in {country} </Text>
        </Box>
    )
}

export default FilterText;