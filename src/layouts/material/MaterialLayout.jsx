import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

const MaterialLayout = ({children}) => {
  return (
    <Box>
        <Navbar />
        <Header />
        <Box>{children}</Box>
    </Box>
  )
}

export default MaterialLayout