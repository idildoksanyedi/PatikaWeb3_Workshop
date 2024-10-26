import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ name, price: parseInt(price), description });
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Ürün Ekle</h2>
      <input type="text" value={name} placeholder="Ürün Adi" onChange={(e) => setName(e.target.value)} required />
      <input type="number" value={price} placeholder="Fiyat" onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" value={description} placeholder="Aciklama" onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Ürün Ekle</button>
    </form>
  );
}

export default ProductForm;
