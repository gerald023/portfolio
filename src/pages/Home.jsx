import React from 'react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import bodyBg from '../assets/body-bg.png'
import { Box } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Aboutme from '../components/Aboutme'
import Servicehero from '../components/servicehero'
import { slides } from '../data/imageSlider';

export default function Home() {
  return (
    <>
    <Banner/>
    <Aboutme/>
    <Servicehero  slides={slides}/>
    
        <Box>
           
        </Box>
       <Link to={"tel:01941043264"}>call me</Link> 
    </>
    
  )
}
