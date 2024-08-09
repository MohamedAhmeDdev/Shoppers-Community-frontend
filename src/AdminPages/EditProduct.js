import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constant';
import ClipLoader from 'react-spinners/ClipLoader';
import { useParams } from 'react-router-dom';

export default function EditProduct() {
  const [shops, setShops] = useState([]);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ratings, setRatings] = useState('');
  const [category, setCategory] = useState('');
  const [payment, setPayment] = useState('');
  const [shop, setShop] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { product_id } = useParams();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/shop`);
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, []);


  useEffect(() => {
  const getProductsById = async (e) => {
    try {
      const response = await axios.get(`${SERVER_URL}/product/${product_id}`)
      .then((response) => {
        console.log(response.data.category.name);
        setName(response.data.name);
        setPrice(response.data.price);
        setRatings(response.data.ratings);
        setCategory(response.data.category.name);
        setPayment(response.data.mode_of_payment);
        setShop(response.data.shop.name);
        setImage(response.data.product_image);
      })
     
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  }

 
  getProductsById()
}, [product_id]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const newErrors = {};
    if (!name) newErrors.name = 'Product name is required.';
    if (!price) newErrors.price = 'Price is required.';
    if (!ratings) newErrors.ratings = 'Ratings are required.';
    if (!category) newErrors.category = 'Category is required.';
    if (!payment) newErrors.payment = 'Payment mode is required.';
    if (!shop) newErrors.shop = 'Shop is required.';
    if (!image) newErrors.image = 'Image is required.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('ratings', ratings);
    formData.append('category_name', category);
    formData.append('mode_of_payment', payment);
    formData.append('shop_name', shop);
    formData.append('file', image);

    try {
      const response = await axios.put(`${SERVER_URL}/update_products/${product_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('Product created successfully.');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setErrors({ general: 'Failed to create product. Please try again.' });
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setErrors({ general: 'Failed to create product. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create a New Product</h2>
      {errors.general && <div className="text-red-500">{errors.general}</div>}
      {message && <div className="text-green-500 text-center">{message}</div>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.name ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.price ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">
            Ratings
          </label>
          <input
            id="ratings"
            name="ratings"
            type="number"
            placeholder="Rate product"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.ratings ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.ratings && <p className="text-red-500 text-sm">{errors.ratings}</p>}
        </div>

        <div>
          <label htmlFor="payment-mode" className="block text-sm font-medium text-gray-700">
            Mode of Payment
          </label>
          <select
            id="payment-mode"
            name="paymentMode"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.payment ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select payment mode</option>
            <option value="credit-card">Upfront</option>
            <option value="paypal">After Delivery</option>
          </select>
          {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.category ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Sports & Outdoors</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="shop" className="block text-sm font-medium text-gray-700">
            Shop
          </label>
          <select
            id="shop"
            name="shop"
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errors.shop ? 'border-red-500' : ''} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select a shop</option>
            {shops.map((shop) => (
              <option key={shop.name} value={shop.name}>
                {shop.name}
              </option>
            ))}
          </select>
          {errors.shop && <p className="text-red-500 text-sm">{errors.shop}</p>}
        </div>

        <div>
          <label htmlFor="product-image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          {image && (
            <div className="mb-4">
              <img
                src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                alt="Product Preview"
                className="h-40 w-40 object-cover rounded-md"
              />
            </div>
          )}
          <input
            id="product-image"
            name="productImage"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? <ClipLoader size={24} color="#fff" /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

