import React from 'react';

const Car = ({ car, deleteCar, showCarDetails }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        onClick={() => showCarDetails(car.id)}
        style={{ cursor: 'pointer' }}
      >
        {car.name} - {car.price} zł
      </span>
      <button onClick={() => deleteCar(car.id)} className="btn btn-danger">
        Usuń
      </button>
    </li>
  );
};

export default Car;
