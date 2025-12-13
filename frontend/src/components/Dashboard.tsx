import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface Sweet {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { token, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const fetchSweets = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/sweets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSweets(response.data);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchSweets();
  }, [fetchSweets]);

  const handleSearch = async () => {
    if (!search.trim()) {
      navigate('/sweets');
      return;
    }

    navigate(`/sweets?q=${encodeURIComponent(search)}`);
  };

  const handlePurchase = async (id: number) => {
    try {
      await axios.post(
        `http://localhost:3000/api/sweets/${id}/purchase`,
        { quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchSweets();
    } catch {
      alert("Purchase failed");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #ff6f91, #ff9671, #ffc75f)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "900px",
          background: "rgba(255,255,255,0.85)",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>🍬 Sweet Store Dashboard</h2>

          <button
            onClick={logout}
            style={{
              background: "#d90429",
              color: "white",
              padding: "8px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#b3001f")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#d90429")
            }
          >
            Logout
          </button>
        </div>

        {/* Search Bar */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search sweets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              background: "#6a4c93",
              color: "white",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#5a3d7a")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#6a4c93")
            }
          >
            Search
          </button>
        </div>

        {loading && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>Loading...</p>
        )}

       {/* Sweet List */}
<ul
  style={{
    listStyle: "none",
    padding: 0,
    marginTop: "25px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  }}
>
  {sweets.map((sweet) => (
    <li
      key={sweet.id}
      style={{
        background: "#ffffff",
        padding: "18px",
        borderRadius: "18px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
          {sweet.name}
        </h3>
        <p style={{ margin: "4px 0" }}>
          <strong>Category:</strong> {sweet.category}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Price:</strong> ₹{sweet.price}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Stock:</strong> {sweet.quantity}
        </p>
      </div>

      <button
        onClick={() => handlePurchase(sweet.id)}
        disabled={sweet.quantity === 0}
        style={{
          marginTop: "14px",
          background: sweet.quantity === 0 ? "#ccc" : "#06d6a0",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          cursor: sweet.quantity === 0 ? "not-allowed" : "pointer",
          fontWeight: "bold",
        }}
      >
        Purchase
      </button>

      {isAdmin && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "12px",
          }}
        >
          <button
            style={{
              flex: 1,
              background: "#118ab2",
              padding: "8px",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Edit
          </button>

          <button
            style={{
              flex: 1,
              background: "#ef476f",
              padding: "8px",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  ))}
</ul>


        {isAdmin && (
          <button
            style={{
              marginTop: "20px",
              background: "#ffd166",
              padding: "10px 18px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Sweet
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
