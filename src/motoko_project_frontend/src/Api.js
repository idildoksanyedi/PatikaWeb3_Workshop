
const BACKEND_URL = `https://${zydb5-siaaa-aaaab-qacba-cai}.ic0.app`;


export const fetchProducts = async () => {
  const response = await fetch(`${BACKEND_URL}/getAllProducts`);
  return response.json();
};

export const addProduct = async ({ name, price, description }) => {
  const response = await fetch(`${BACKEND_URL}/addProduct`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price, description }),
  });
  return response.json();
};

export const updateProductStock = async (productId, inStock) => {
  const response = await fetch(`${BACKEND_URL}/updateStockStatus`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: productId, inStock }),
  });
  return response.json();
};
