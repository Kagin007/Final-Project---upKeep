const ReservationCard = props => {
  return (
    <article className="reservation__card">
      <div className="reservation__card--left">
        <header>
          <figure className="user-sm">
            <a href="#">
              <img
                className="user-photo"
                src={
                  props.cleanerimgurl ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                }
                alt="user_photo"
              />
            </a>
          </figure>
          <h1>
            {props.firstname || "Winona"} {props.lastname || "Williams"}
          </h1>
        </header>
        <main>
          {" "}
          <h5 className="reservation__address">
            {props.address || "662 King St W #101, Toronto, ON M5V 1M7"}
          </h5>
          <aside className="reservation__date">
            {" "}
            {props.date || "June 23, 2021"}
          </aside>{" "}
        </main>
      </div>
      <div className="reservation__card--right">
        <figure className="reservation__card--figure">
          <img
            className="reservation__card--propertyimg"
            src={
              props.propertyimgurl ||
              "https://imageio.forbes.com/specials-images/imageserve/1026205392/Beautiful-luxury-home-exterior-at-twilight/960x0.jpg?fit=bounds&format=jpg&width=960"
            }
          />
        </figure>
      </div>
    </article>
  );
};

export default ReservationCard;
