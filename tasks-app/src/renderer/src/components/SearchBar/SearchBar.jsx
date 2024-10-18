import React from 'react'
import { TextField, Box } from '@mui/material'

const SearchBar = ({ searchTasks }) => {
  const handleSearch = (e) => {
    searchTasks(e.target.value)
  }

  return (
    <Box mb={2}>
      <TextField label="Search tasks" fullWidth onChange={handleSearch} />
    </Box>
  )
}

export default SearchBar
