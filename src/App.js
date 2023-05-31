import React, { useState } from 'react';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import Header from './components/Header';
import CarDetails from './components/CarDetails';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    const result = await axios.get(
      'https://private-anon-70a57acdef-carsapi1.apiary-mock.com/manufacturers'
    );
    setCars(
      result.data.slice(0, 10).map((manufacturer) => ({
        id: manufacturer.id,
        name: manufacturer.name,
        price: Math.floor(Math.random() * 100000),
        avg_horsepower: Math.round(Math.random() * 300),
        avg_price: Math.round(Math.random() * 100000),
      }))
    );
    setDataFetched(true);
  };

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const showCarDetails = (id) => {
    setSelectedCar(cars.find((car) => car.id === id));
  };

  return (
    <div className="container">
      <Header />
      <div className="align-items-start">
        <div className="w-100 p-2">
          {dataFetched && <CarForm addCar={addCar} />}
          {!dataFetched && (
            <button onClick={fetchData} className="btn btn-primary mb-2 w-100">
              Wyświetl auta
            </button>
          )}
          {dataFetched && (
            <CarList
              cars={cars}
              deleteCar={deleteCar}
              showCarDetails={showCarDetails}
            />
          )}
        </div>
        {dataFetched && (
          <div className="w-100 p-2">
            <CarDetails car={selectedCar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
