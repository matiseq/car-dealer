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
      <p>Średnia moc: {car.avg_horsepower} HP</p>
      <p>Średnia cena: {car.avg_price} zł</p>
    </div>
  );
};

export default CarDetails;
