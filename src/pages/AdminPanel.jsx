const AdminPanel = () => {

  const hotels = [

    {
      id: 1,
      name: "Taj Lake Palace",
      bookings: 120
    },

    {
      id: 2,
      name: "Taj Mahal Hotel",
      bookings: 98
    }

  ];

  return (

    <section className="admin">

      <div className="admin-sidebar">

        <h2>Admin Panel</h2>

        <button>Dashboard</button>
        <button>Hotels</button>
        <button>Bookings</button>
        <button>Users</button>

      </div>

      <div className="admin-main">

        <h1>Hotel Management</h1>

        <div className="admin-grid">

          {hotels.map((h) => (

            <div
              className="admin-card"
              key={h.id}
            >

              <h3>{h.name}</h3>

              <p>
                Total Bookings: {h.bookings}
              </p>

              <button>Edit</button>
              <button>Delete</button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default AdminPanel;