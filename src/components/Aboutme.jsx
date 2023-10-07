import React from "react";
import { Box, Heading, Flex, Text, IconButton, Button, Tooltip } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import "../styles/about.css";
let twitter = [
  <i class="fa-brands fa-x-twitter"></i>,
  <i class="fa-brands fa-linkedin"></i>,
  <i class="fa-brands fa-github"></i>,
];
export default function Aboutme() {
  return (
    <>
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        justifyContent={"center"}
        id='aboutme'
      >
        <Box
          display={"flex"}
          gap={"50px"}
          className="about_me"
          w={"50%"}
          alignItems={"center"}
          flexDir={"column"}
          justifyContent={"center"}
        >
          <Heading
            fontSize={"130px"}
            opacity={"0.3"}
            fontWeight={"700"}
            color={"blue"}
          >
            ABOUT ME
          </Heading>
          <Text textAlign={"center"} fontSize={"22px"} fontWeight={"500"} marginTop=''>
            Hello, I’m Gerald, a web-developer based on Paris. I have rich
            experience in web development & design, web application, building
            and customization. Also I am good at html, css, wordpress,React,
            Javascript, Java, C, Figma, php, jquery, bootstrap.
          </Text>
          <Box>
            <Flex gap={"7"} alignItems={"center"}>
              <Button leftIcon={<DownloadIcon />} className='bannerBtn' borderColor='transparent' padding='20px' color='white'> Download CV </Button>
              <Tooltip hasArrow label='Twitter (X)' bg='black' placement='top' closeOnClick={true} color='white'>
              <IconButton
                fontSize={"30px"}
                colorScheme={"twitter"}
                p={"10px"}
                w={"50px"}
                h={"50px"}
                borderRadius={"50%"}
              >
                {twitter[0]}
              </IconButton>
              </Tooltip>
              <Tooltip hasArrow label='LinkedIn' bg='black' placement='top' closeOnClick={true} color='white'>
              <IconButton
                fontSize={"30px"}
                colorScheme={"linkedin"}
                p={"10px"}
                w={"50px"}
                h={"50px"}
                borderRadius={"50%"}
              >
                {twitter[1]}
              </IconButton>
          
              </Tooltip>
              <Tooltip hasArrow label='GitHub' bg='black' placement='top' closeOnClick={true} color='white'>
             <a href="https://github.com/gerald023">
             <IconButton
                fontSize={"30px"}
                colorScheme={"red"}
                p={"10px"}
                w={"50px"}
                h={"50px"}
                borderRadius={"50%"}
              >
                {twitter[2]}
              </IconButton>
             </a>
    </Tooltip>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
