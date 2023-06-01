import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [power, setPower] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() === '' ||
      price.trim() === '' ||
      power.trim() === '' ||
      year.trim() === ''
    ) {
      setError('Proszę wypełnić wszystkie pola.');
      return;
    }

    const newCar = {
      id: Date.now(),
      name: name,
      price: price,
      power: power,
      year: year,
    };

    addCar(newCar);
    setName('');
    setPrice('');
    setPower('');
    setYear('');
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
      <input
        type="number"
        className="form-control mt-2"
        placeholder="Moc"
        value={power}
        onChange={(event) => setPower(event.target.value)}
      />
      <input
        type="number"
        className="form-control mt-2"
        placeholder="Rok produkcji"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />
      {error && <p className="text-danger mt-2">{error}</p>}
      <button type="submit" className="btn btn-primary mt-2">
        Dodaj samochód
      </button>
    </form>
  );
};

export default CarForm;
