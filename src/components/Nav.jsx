import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Aboutme from './Aboutme'
import { Box, Heading } from '@chakra-ui/react'
export default function Nav() {
  return (
    <>
        <Box as='nav'position={'fixed'} w={'100%'} top={'0'} background={'white'} zIndex={100} display={'flex'} alignItems={'center'} justifyContent={'center'} boxShadow={'0px 0px 7px black'} gap={'400px'} padding={'30px 150px'}>
            <Box>
                <Heading as={'h1'}> 
                    logo
                </Heading>
            </Box>
            <Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'30px'} fontSize={'14.4px'} fontWeight={'600'}>
                    <NavLink  className={'nav_link'} to={'/'}>HOME</NavLink>
                    <NavLink className={'nav_link'} to={'/'}>ABOUT</NavLink>
                    <NavLink className={'nav_link'} to={'/'}>SERVICES</NavLink>
                    <NavLink className={'nav_link'} to={'/'}>PORTFOLIO</NavLink>
                    <NavLink className={'nav_link'} to={'/'}>BLOG</NavLink>
                    <NavLink className={'nav_link'} to={'/'}>CONTACT</NavLink>
                </Box>
            </Box>
            
        </Box>
    </>
  )
}
