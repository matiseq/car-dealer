import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || price.trim() === '') {
      setError('Proszę podać model i cenę samochodu.');
      return;
    }

    const newCar = {
      id: Date.now(),
      name: name,
      price: price,
    };

    addCar(newCar);
    setName('');
    setPrice('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Marka i model"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        className="form-control mt-2"
        placeholder="Cena"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      {error && <p className="text-danger mt-2">{error}</p>}
      <button type="submit" className="btn btn-primary mt-2">
        Dodaj samochód
      </button>
    </form>
  );
};

export default CarForm;
