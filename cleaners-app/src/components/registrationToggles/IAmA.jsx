

const iAmA = props => {
  
  return (
    <section className="modal">
      <header class="modal-header">
        <div onClick={props.onClose}>
          <i class="fa-solid fa-xmark modal-exit"></i>
        </div>
        <h3>
          <strong>Reviews</strong>
        </h3>
      </header>
      <main class="modal-content">
        {sampleDataReviews.map(review => (
          <Review key={review.id} {...review} />
        ))}
      </main>
    </section>
  );
};