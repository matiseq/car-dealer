import React from 'react';

const CarDetails = ({ car }) => {
  if (!car)
    return (
      <div className="card p-3 mb-3">
        <span>Select a car to see details.</span>
      </div>
    );

  return (
    <div className="card p-3 mb-3">
      <h2>{car.name}</h2>
      <p>Cena: {car.price} zł</p>
      <p>Moc: {car.power} KM</p>
      <p>Rok produkcji: {car.year}</p>
    </div>
  );
};

export default CarDetails;
