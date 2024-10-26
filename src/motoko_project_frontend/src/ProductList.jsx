import React from 'react';

function ProductList({ products, onUpdateStock }) {
  return (
    <div>
      <h2>Ürün Listesi</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price}</p>
            <p>Aciklama: {product.description}</p>
            <p>Stok Durumu: {product.inStock ? 'Var' : 'Yok'}</p>
            <button onClick={() => onUpdateStock(product.id, !product.inStock)}>
              {product.inStock ? 'Stokta Yok' : 'Stokta Var'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
