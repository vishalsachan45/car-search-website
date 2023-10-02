import React, { useState } from 'react';
import CarCard from './CarCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
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
      <div className="car-list">
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
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
