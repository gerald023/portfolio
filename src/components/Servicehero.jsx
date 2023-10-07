import React from 'react'
import { Box,Flex, Heading, IconButton, Text, Img, Button } from '@chakra-ui/react'
import { useState } from 'react';
import { slides } from '../data/imageSlider';
import '../styles/about.css'
import image1 from '../assets/responsive_web.svg'
// import ServiceSlider from './ServiceSlider'

let twitter = [
    <i class="fa-solid fa-arrow-right"></i>,
    <i class="fa-solid fa-arrow-left"></i>,
    <i class="fa-brands fa-github"></i>,
  ];
export default function Servicehero({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }
  const goToNext = ()=>{ 
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex)
  }
  return (
    <>
        <Box w={'100%'} marginTop={'130px'} padding={'0'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Flex gap={'20px'} w={'80%'} justifyContent={'space-between'}>
            <Box w={'30%'} padding={'40px'} border={'2px solid tra'} borderRadius={'20px 0 0 20px'} background={'white'} display={'flex'} gap={4} alignItems={'center'} justifyContent={'center'} flexDir={'column'} boxShadow={' -7px 7px 20px -5px rgba(118, 85, 225, 0.45) '} >
                <Heading fontSize={'50px'} textAlign={'center'}>
                    SERVICES WE <br /> OFFER
                </Heading>
                <Heading>
                  {slides[currentIndex].title}
                </Heading>
                <Flex as={'div'} gap={10}>
            
                    <IconButton onClick={goToPrevious} >{twitter[1]}</IconButton>
                    <IconButton onClick={goToNext}>{twitter[0]}</IconButton>
                </Flex>
            </Box>
            
  
          
            <Box w={'60%'} h={'100%'}>
           <Box position={'relative'} h={'100%'} w={'100%'}>
    <Box backgroundPosition={'center'} display={'flex'} backgroundSize={'cover'}>
    <Box w={'40%'} h={'400px'} className='service_img' display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'40px'} background={'rgba(118, 85, 225, 0.15) '} borderRadius={'10px 0 0 10px'} padding={'20px 30px'}>
    <Img className='service_img2' src={slides[currentIndex].url} alt="" />
    <Heading textAlign={'center'}>{slides[currentIndex].title}</Heading>
    </Box>
    <Box w={'60%'} display={'flex'} color={'white'} textShadow={'1px 1px 3px black'} flexDir={'column'} gap={'20px'} padding={'20px'} alignItems={'center'} justifyContent={'center'} background={'rgba(118, 85, 225, 0.05) '}>
      <Heading>
        {slides[currentIndex].title}
      </Heading>
      <Text color={'black'} textShadow={'none'} fontWeight={500} fontSize={'17px'}>
      {slides[currentIndex].text}
      </Text>
      <Button className='bannerBtn' border={'2.5px solid rgba(118, 85, 225, 0.75) '} background={'transparent'}>
        contact us
      </Button>
    </Box>
</Box>
    </Box>
           </Box>
            </Flex>
          
        </Box>
    </>
  )
}

