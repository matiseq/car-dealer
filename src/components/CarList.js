import React from 'react';
import Car from './Car';

const CarList = ({ cars, deleteCar, showCarDetails }) => {
  return (
    <ul className="list-group">
      {cars.map((car) => (
        <Car
          key={car.id}
          car={car}
          deleteCar={deleteCar}
          showCarDetails={showCarDetails}
        />
      ))}
    </ul>
  );
};

export default CarList;
