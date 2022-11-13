import {Box, Image, Text, Flex, Spacer} from '@chakra-ui/react'

const CauseCard = ({ img, organisation, platform, title, summary, date, goalAmount }) =>{
    return(
        <Box p={4} display={{ md: 'flex' }}>
            <Box flexShrink={0}>
                <Image 
                    borderRadius='lg'
                    width={{md: 40}}
                    src={img}
                    alt='Cause image from cause site'
                />
            </Box>

            <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
                <Flex flexDirection={{ base: 'row', md: 'row', sm: 'column'}}> 
                    <Text>{organisation}</Text> 
                    <Spacer />
                    <Text>{platform}</Text>
                </Flex>
                
                <Text as={'b'}>{title}</Text>
                <Text>{summary}</Text>

                <Flex flexDirection={{ base: 'row', md: 'row', sm: 'column'}}>
                    <Text>{date}</Text>
                    <Spacer />
                    <Text as={'b'}>{goalAmount}</Text>
                </Flex>
            </Box>
        </Box>
    )
} 

export default CauseCard;