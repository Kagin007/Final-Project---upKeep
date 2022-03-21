import CleanerCard from "./CleanerCard";

const CleanersList = props => {
  const sampleData = [
    {
      firstName: "Winona",
      lastName: "Williams",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
      payRate: 60,
      transportMode: "Vehicle",
      avgRating: 4.5,
      numRatings: 20,
      topReview: {
        date: "Jan 23, 2022",
        reviewerName: "James Dean",
        rating: 5,
        reviewMessage: `Winona is spectacular and very efficient at her job. We always use her
        service to clean our apartment when we don't have time to do it
        ourselves. She responds quickly and is always on time!`,
      },
    },
    {
      firstName: "David",
      lastName: "Salmone",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU",
      payRate: 50,
      transportMode: "Electric Bicycle",
      avgRating: 4.9,
      numRatings: 120,
      topReview: {
        date: "Feb 2, 2022",
        reviewerName: "Margot Lin",
        rating: 5,
        reviewMessage: `David is on time! Highly communicative and willing to come to our aid on last minute notice. We highly recommend him for cleaning your property.`,
      },
    },
  ];

  return (
    <section>
      {sampleData.map(cleaner => (
        <CleanerCard {...cleaner} onOpen={props.onOpen} />
      ))}
    </section>
  );
};
export default CleanersList;
