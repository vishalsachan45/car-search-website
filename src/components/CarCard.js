import React from 'react';
import { Box, Grid, Stack, Typography, Button, Card, CardMedia } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FitbitIcon from '@mui/icons-material/Fitbit';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ShutterSpeedOutlinedIcon from '@mui/icons-material/ShutterSpeedOutlined';

function CarCard({ car }) {
  const { name, year, image, space, fuelType, average, type, price } = car;
  return (
    <Box sx={{ backgroundColor: 'lightblue', padding: '20px' }}>
    <Card sx={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      marginRight: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        sx={{
            width: '100%', 
            height: '100%', 
            margin: '10px', 
          }}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} mt={2}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{year}</Typography>
      </Stack>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Stack direction="row" alignItems="center">
              <PeopleAltIcon fontSize="small" color="#1C9DEA" />
              <Typography variant="subtitle1">{space}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" alignItems="center">
              <FitbitIcon fontSize="small" color="#1C9DEA" />
              <Typography variant="subtitle1">{fuelType}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" alignItems="center">
              <DirectionsCarFilledOutlinedIcon fontSize="small" color="#1C9DEA" />
              <Typography variant="subtitle1">{type}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ alignItems: 'center' }}>
            <Stack direction="row" alignItems="center">
              <ShutterSpeedOutlinedIcon fontSize="small" color="#1C9DEA" />
              <Typography variant="subtitle1">{average}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" p={2} borderTop="1px solid #ccc">
        <Typography variant="h6"> ${price} /month</Typography>
        <Button variant="contained">Rent Now</Button>
      </Stack>
    </Card>
    </Box>
  );
}

export default CarCard;
