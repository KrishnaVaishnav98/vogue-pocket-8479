import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'
function ButtonComponent({text, rightIcon, clickEvent}) {
  return (
    <Box>
    <Button color={"white"} rightIcon={rightIcon} onClick={clickEvent} colorScheme="purple" size={{base: "sm", sm:"sm", md:"md", lg:"lg"}}>
      {text}
    </Button>
  </Box>
  )
}

export default ButtonComponent