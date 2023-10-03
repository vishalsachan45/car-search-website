import React, { useState } from 'react';
import CarCard from './CarCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import {Grid} from '@mui/material';
import {carData} from '../data/Car'

const CarList = () => {
  const [cars, setCars] = useState(carData);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter cars based on search term
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid container spacing={{ xs: 6, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }}>
        {currentCars.map((car) => (
          <Grid item xs={6} sm={4} md={4} key={car.id}>
            <CarCard key={car.id} car={car} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CarList;
