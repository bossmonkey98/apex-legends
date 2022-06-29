import { TextField } from '@material-ui/core'
import React from 'react'

const Search = () => {
  return (
    <>
      <TextField id="outlined-basic"
        label="Search"
        variant="outlined"
        size='small'
        fullWidth
        style={{background:"var(--bgc-2)"}}
      />
    </>
  )
}

export default Search