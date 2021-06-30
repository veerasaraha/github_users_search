import React from 'react'
import { Container, IconButton, Link, Typography } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Typography variant='h2'>
          <IconButton>
            <Link color='initial' href='https://github.com/'>
              <GitHubIcon style={{ fontSize: 50 }} color='disabled' />
            </Link>
          </IconButton>
          Github User Search
        </Typography>

        <Typography variant='h6'>
          Browse users and their profiles via{' '}
          <Link
            target='_blank'
            color='primary'
            href='https://docs.github.com/en/rest'>
            Github API
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Header
