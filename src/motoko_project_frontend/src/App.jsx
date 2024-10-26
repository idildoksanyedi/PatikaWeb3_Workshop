/*import { useState } from 'react';
import { motoko_project_backend } from 'declarations/motoko_project_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    motoko_project_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App; */
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { fetchProducts, addProduct, updateProductStock } from './api';
import { motoko_project_backend } from 'declarations/motoko_project_backend';

function App() {
  const [products, setProducts] = useState([]);

  // Ürünleri yükle
  useEffect(() => {
    const loadProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };
    loadProducts();
  }, []);

  // Yeni ürün ekle
  const handleAddProduct = async (productData) => {
    const newProductId = await addProduct(productData);
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
    alert(`Ürün başarıyla eklendi! ID: ${newProductId}`);
  };

  // Stok durumunu güncelle
  const handleUpdateStock = async (productId, inStock) => {
    const isUpdated = await updateProductStock(productId, inStock);
    if (isUpdated) {
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
    } else {
      alert('Stok durumu güncellenemedi!');
    }
  };

  return (
    <div>
      <h1>Ürün Yönetim Sistemi</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onUpdateStock={handleUpdateStock} />
    </div>
  );
}

export default App;
