const PropertyPanel = props => {
  const { appointments } = props;
  return (
    <div className="reservations__property-panel">
      <h1>{appointments[0]["property_id"].address}</h1>
      <h2>
        {appointments[0]["property_id"].city}
        {", "}
        {appointments[0]["property_id"].country}
      </h2>
      <ul>
        {appointments.map((appointment, i) => (
          <li key={i}>{appointment["booking_date"]}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyPanel;
