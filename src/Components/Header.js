import React from 'react'
import { Container, IconButton, Link, Typography } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'

const Header = () => {
  return (
    <div className='header'>
      <Container className='header'>
        <Typography variant='h2'>
          <IconButton edge='start'>
            <GitHubIcon style={{ fontSize: 50 }} />
          </IconButton>
          Github User Search
        </Typography>

        <Typography variant='h6'>
          Browse users and their profiles via{' '}
          <Link target='_blank' href='https://docs.github.com/en/rest'>
            Github API
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Header
