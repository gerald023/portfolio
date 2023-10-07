import React from 'react'
import { useState } from 'react'
import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react'
import heroBanner from '../assets/banner_2.png'
export default function Banner() {
  const discs =[
    'UI/UX Dsigner',
    'Profession Coder',
    'Web Developer'
  ]
 
  return (
    <>
        <Flex w={'100%'} justifyContent={'space-between'} height={'87vh'} marginTop={'120px'} p={'40px 80px 0 120px'}>
        <Box display={'flex'} flexDir={'column'} gap={'20px'}>
          <Heading className='Hello' fontSize={'30px'}> HELLO</Heading>
          <Text fontSize={'60px'} display={'flex'} gap={'4px'} flexDir={'column'} lineHeight={1} fontWeight={'700'}>
            i am 
            <Text as={'span'} textShadow={'-120px 20px 0px #d5d5d55e'} paddingLeft={'30px'} color={'#4459dd'}>
               Gerald Lekara
            </Text>
          </Text>
          <Text className='changeDis'></Text>
          <Box display={'flex'} alignItems={'center'} gap={'30px'}>
          <Button className='bannerBtn'  border={'1px solid transparent'} color={'white'}>Download CV</Button>
          <Button className='bannerBtn' background={'white'} border={'2px solid #4459dd'} outline={'none'}>Contact</Button>
          </Box>
        </Box>
        <Box>
            <Image w={'600px'} marginTop={'-47px'} src={heroBanner} alt="" />
        </Box>
        </Flex>
    </>
  )
}
