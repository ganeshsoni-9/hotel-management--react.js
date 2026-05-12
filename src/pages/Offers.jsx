import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

const offersData = [
  {
    id: 1,
    title: "Luxury Escape",
    desc: "Experience world-class luxury stays with private suites, infinity pools, gourmet dining, spa treatments, and personalized hospitality. This package is designed for travelers who want ultimate comfort, elegance, and unforgettable premium vacation experience with top-class services and scenic views in a peaceful environment.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Beach Paradise",
    desc: "Relax in crystal-clear beaches with premium resorts, sunset views, water sports, private villas, and beachfront luxury services. Perfect for travelers seeking tropical vibes, adventure activities, peaceful surroundings, and unforgettable ocean experiences with world-class comfort.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Mountain Retreat",
    desc: "Enjoy peaceful mountain stays surrounded by nature, wooden cottages, fresh air, bonfire nights, and breathtaking sunrise views. This retreat is perfect for relaxation, meditation, and escaping city life while enjoying natural beauty and calm surroundings.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 4.6,
  },
  {
    id: 4,
    title: "Royal Palace",
    desc: "Stay in heritage royal palaces featuring grand architecture, luxury suites, cultural richness, traditional hospitality, and modern comfort. Experience royal lifestyle with premium services and historical elegance combined with luxury and comfort.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.9,
  },
  {
    id: 5,
    title: "City Lights",
    desc: "Luxury city hotels with skyline views, fine dining, nightlife access, modern interiors, and premium comfort. Ideal for business travelers and tourists who want to experience vibrant urban lifestyle with elegance and convenience.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Honeymoon Special",
    desc: "Romantic luxury stays with private villas, candlelight dinners, flower decorations, scenic views, and couple spa experiences. Designed for unforgettable honeymoon memories and peaceful romantic getaways in beautiful destinations.",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Desert Safari",
    desc: "Luxury desert camps with camel rides, cultural shows, bonfire nights, traditional food, and star-lit skies. Experience adventure and culture together in a unique desert environment with premium comfort and hospitality.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    rating: 4.6,
  },
  {
    id: 8,
    title: "Island Resort",
    desc: "Private island resorts with ocean views, beach access, luxury villas, and exclusive services. Enjoy peaceful surroundings, crystal-clear waters, and premium hospitality in a tropical paradise environment.",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 4.7,
  },
  {
    id: 9,
    title: "Spa Wellness",
    desc: "Relaxing spa treatments, yoga sessions, wellness therapies, and peaceful healing retreats. Designed to refresh mind, body, and soul with professional care and calm natural surroundings for complete relaxation.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    rating: 4.8,
  },
  {
    id: 10,
    title: "Business Suite",
    desc: "Premium corporate stays with meeting rooms, high-speed WiFi, luxury interiors, and business facilities. Perfect for professionals who need comfort, productivity, and modern amenities during business trips.",
    img: "https://imgs.search.brave.com/eYVrhAo4uqkiqi1ACUtYeb0qfsf34yp3Z9IawtpCYeQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/MTU5NDk1MS9lcy9m/b3RvL2J1c2luZXNz/d29tYW4tdXNpbmct/c21hcnRwaG9uZS1h/bmQtbGFwdG9wLWlu/LXN1aXRlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1QN09O/ZXdsNXB6cVVOZHNU/M0ZXRkRVNUFKSEw0/a25SUGh2SWZqdEN5/YkQ4PQ",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Family Holiday",
    desc: "Perfect family vacation stays with entertainment zones, swimming pools, kids activities, and comfortable rooms. Designed for families to enjoy fun, relaxation, and quality time together in luxury environment.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Luxury Cruise",
    desc: "Ocean cruise experience with fine dining, entertainment shows, luxury cabins, and sea views. Enjoy a floating luxury hotel experience with world-class hospitality and unforgettable ocean journey.",
    img: "https://imgs.search.brave.com/qQXLVRFXVC5H4ct9VMr3ULGqkMcOX9F3JabKPvF-Y3Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2l4c3RhcmNydWlz/ZXMuY28udWsvc3Rv/cmFnZS9tZWRpYS8x/OTE0NTgxL2NvbnZl/cnNpb25zLzIwMjVf/bHV4dXJ5X2NydWlz/ZXMtdGh1bWItdGh1/bWIuanBn",
    rating: 4.9,
  },
  {
    id: 13,
    title: "Forest Retreat",
    desc: "Stay inside deep forests surrounded by wildlife, nature trails, wooden cottages, and peaceful environment. Perfect for nature lovers seeking calm, adventure, and natural beauty experience.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    rating: 4.5,
  },
  {
    id: 14,
    title: "Winter Special",
    desc: "Snow-covered luxury stays with warm cottages, mountain views, cozy interiors, and winter activities. Enjoy magical snowfall experience with comfort, warmth, and scenic beauty all around.",
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    rating: 4.7,
  },
  {
    id: 15,
    title: "Heritage Stay",
    desc: "Historical royal hotels with cultural architecture, traditional hospitality, luxury rooms, and heritage experience. Step into history while enjoying modern comfort and royal treatment.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    rating: 4.8,
  },
  {
    id: 16,
    title: "Private Villa",
    desc: "Luxury private villas with pools, gardens, premium interiors, and exclusive services. Perfect for privacy, luxury living, and peaceful vacations with family or friends.",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    rating: 4.9,
  },
  {
    id: 17,
    title: "Adventure Trip",
    desc: "Thrilling adventure packages including trekking, rafting, camping, and outdoor sports. Designed for adventure lovers who want excitement and unforgettable experiences.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    rating: 4.6,
  },
  {
    id: 18,
    title: "Weekend Deal",
    desc: "Short luxury weekend stays for quick relaxation, comfort, and refreshing getaway. Perfect for stress-free breaks with premium services and peaceful environment.",
    img: "https://images.unsplash.com/photo-1468071174046-657d9d351a40",
    rating: 4.4,
  },
  {
    id: 19,
    title: "Resort Special",
    desc: "5-star premium resort stays with pools, dining, spa services, and luxury amenities. Enjoy complete relaxation and high-class hospitality experience.",
    img: "https://imgs.search.brave.com/_1bPFnCgWIncHJoXzxUJByLkBPrtvfVreJTdtCjTKvI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlLzRvZnZy/MmJtbGk1djVlNDhz/NXljMjVraHdiMTVf/d2lsZGVybmVzdGhp/bGx0b3ByZXNvcnQt/MjAyMzAzMTgtMDAw/Mi5qcGc_dz0zMDUm/aD0yMzAmZHBy",
    rating: 4.7,
  },
  {
    id: 20,
    title: "Elite Package",
    desc: "Ultra luxury premium experience with VIP services, personalized hospitality, private spaces, and top-class comfort. Designed for elite travelers seeking perfection.",
    img: "https://imgs.search.brave.com/eM224FAM9mUc6lZuNMQ-vfRP0ffTmn516f-_dzz1D94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm90/ZWN0aW9uYXV0b2Rl/dGFpbGluZy5jb20v/bWVkaWEvRWxpdGUt/cGFja2FnZS5qcGc",
    rating: 5.0,
  },
  {
  id: 20,
  title: "Royal Elite Experience",
  desc: "Step into an unmatched world of ultra-luxury living featuring royal suites, private butler service, personalized gourmet dining, and exclusive VIP privileges. This experience is crafted for high-end travelers who demand privacy, elegance, and perfection in every moment of their stay with world-class hospitality.",
  img: "https://imgs.search.brave.com/y_IoSSbA3o6rR-SrTSZovTQnvj34Cbp12HjDwilgVoI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS9l/MjI5YzBfNjk5MDU2/ODg1OTBiNDg2OGEy/NDI4OGRhNDNjYWQy/YTJ-bXYyLmpwZy92/MS9jcm9wL3hfNjAw/LHlfMCx3XzI0MDAs/aF8yNDAwL2ZpbGwv/d18zNDMsaF8zNDMs/YWxfYyxxXzgwLHVz/bV8wLjY2XzEuMDBf/MC4wMSxlbmNfYXZp/ZixxdWFsaXR5X2F1/dG8vSkZNXzM5NjAl/MjAoMSkuanBn",
  rating: 5.0,
}
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section className="offers">

      <h2>🔥 Latest Luxury Offers</h2>

      <div className="offer-container">

        {offersData.map((item) => (
          <div
            className="offer-card"
            key={item.id}
            onClick={() => setSelectedOffer(item)}
          >

            <div className="img-box">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="offer-content">
              <h3>{item.title}</h3>
              <p>{item.desc.slice(0, 70)}...</p>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedOffer && (
        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="close-btn"
              onClick={() => setSelectedOffer(null)}
            >
              <FaTimes />
            </button>

            <img src={selectedOffer.img} alt="" />

            <h2>{selectedOffer.title}</h2>

            <div className="rating">
              {"⭐".repeat(Math.floor(selectedOffer.rating))} {selectedOffer.rating}/5
            </div>

            <p>{selectedOffer.desc}</p>

          </div>

        </div>
      )}

      <style>{`
        .offers {
          padding: 80px 50px;
          background: #f5f5f5;
          text-align: center;
        }

        .offers h2 {
          font-size: 42px;
          margin-bottom: 40px;
          font-weight: 900;
        }

        .offer-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .offer-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        .offer-card:hover {
          transform: translateY(-8px);
        }

        .img-box {
          height: 260px;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .offer-content {
          padding: 18px;
        }

        .offer-content p {
          font-size: 14px;
          color: #666;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-box {
          background: #fff;
          width: 90%;
          max-width: 520px;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
        }

        .modal-box img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 10px;
        }

        .rating {
          color: #f5a623;
          margin: 10px 0;
          font-weight: bold;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
        }
      `}</style>

    </section>
  );
};

export default Offers;