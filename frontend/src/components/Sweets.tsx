import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

interface Sweet {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

const Sweets: React.FC = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const fetchSweets = useCallback(async () => {
    try {
      setLoading(true);
      const url = query
        ? `http://localhost:3000/api/sweets/search?q=${encodeURIComponent(query)}`
        : 'http://localhost:3000/api/sweets';
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSweets(response.data);
    } finally {
      setLoading(false);
    }
  }, [query, token]);

  useEffect(() => {
    fetchSweets();
  }, [fetchSweets]);

  const handlePurchase = async (id: number) => {
    try {
      await axios.post(
        `http://localhost:3000/api/sweets/${id}/purchase`,
        { quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchSweets();
    } catch {
      alert('Purchase failed');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #ff6f91, #ff9671, #ffc75f)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '85%',
          maxWidth: '900px',
          background: 'rgba(255,255,255,0.85)',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>🍬 Sweets</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {sweets.map((sweet) => (
              <div
                key={sweet.id}
                style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                {sweet.imageUrl && (
                  <img
                    src={sweet.imageUrl}
                    alt={sweet.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '10px',
                    }}
                  />
                )}
                <h3>{sweet.name}</h3>
                <p>Category: {sweet.category}</p>
                <p>Price: ${sweet.price}</p>
                <p>Quantity: {sweet.quantity}</p>
                <button
                  onClick={() => handlePurchase(sweet.id)}
                  style={{
                    background: '#4ecdc4',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sweets;