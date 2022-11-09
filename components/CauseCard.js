import {Box, Image, Text} from '@chakra-ui/react'

const CauseCard = ({ img, organisation, platform, title, summary, date, goalAmount }) =>{
    return(
        <Box>
            <Box flexShrink={0} display={{md: 'flex'}}>
                <Image 
                    borderRadius='lg'
                    width={{md: 40}}
                    src={img}
                    alt='Cause image from cause site'
                />
            </Box>

            <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
                <Box>
                    <Text>{organisation}</Text> 
                    <Text>{platform}</Text>
                </Box>
                
                <Text>{title}</Text>
                <Text>{summary}</Text>

                <Box>
                    <Text>{date}</Text>
                    <Text>{goalAmount}</Text>
                </Box>
            </Box>
        </Box>
    )
} 

export default CauseCard;