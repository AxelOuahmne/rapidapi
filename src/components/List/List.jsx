import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails';

function List() {
  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState('restaurants');
  const places= [
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
    {name:'Cool Place'},
  ]
  return (
    <Container maxWidth="sm">
      <Typography variant='h4'>Restaurants,Hotels & Attractions around you</Typography>
      <FormControl sx={{minWidth: 150, margin:'30px 20px 30px 0px'}} >
      <InputLabel id="type">Type</InputLabel>
        <Select fullWidth  label="Type" value={type} id='type' onChange={(e)=>setType(e.target.value)}>
          <MenuItem value={'restaurants'}>Restaurants</MenuItem>
          <MenuItem value={'hotels'}>Hotels</MenuItem>
          <MenuItem value={'attractions'}>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{minWidth: 150, margin:'30px 0px'}} >
      <InputLabel id="rating">Rating</InputLabel>
        <Select fullWidth  label="rating" value={rating} id='type' onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing = {3}  sx={{height: '75vh', overflow: 'auto',}}>
        {places?.map((place,index)=>(
          <Grid item xs={12} key={index}>
            <PlaceDetails place={place} />
          </Grid>
        ))} 
      </Grid>
    </Container>

  )
}

export default List
