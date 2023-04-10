import {Box,Image,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"

function Card() {
  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'    > 
    <Link to='#/'>
        <Image src="https://fastly.picsum.photos/id/916/200/300.jpg?hmac=AlGE1xEsSBVvJKbHoDnjf9v5TRINh8LNMN6xwzQieO0" alt="product" />
        <Box p='6'>
            <Box d="flex" alignItems='baseline' >
                10/04/2023
            </Box>
            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' >
                MacBook
            </Box>
            <Box  >
                100 Tl
            </Box>
        </Box>
    </Link>

    <Button colorScheme='pink'>
        Add to basket
    </Button>
    </Box>
  )
}

export default Card