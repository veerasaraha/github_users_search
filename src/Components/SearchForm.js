import React, { useState } from 'react'
import axios from 'axios'
import { Box, Container, TextField } from '@material-ui/core'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [usersData, setUsersData] = useState([])

  const fetchData = async (query) => {
    const req = await axios.get(
      `https://api.github.com/search/users?q=${query}&per_page=30`
    )
    console.log(req.data)
    setUsersData(req.data)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(searchQuery)

    setSearchQuery('')
  }

  console.log(usersData)

  return (
    <Container fixed>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          label='search by user'
          value={searchQuery}
          variant='outlined'
          size='medium'
          onChange={handleChange}
        />
      </form>
    </Container>
  )
}

export default SearchForm
