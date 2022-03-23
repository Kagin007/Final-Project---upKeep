import CleanerCard from "./CleanerCard";

const CleanersList = ({cleaners, onOpen}) => {
  // const sampleData = [
  //   {
  //     cleanerid: 1,
  //     firstname: "Winona",
  //     lastname: "Williams",
  //     imgurl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  //     payrate: 60,
  //     transportMode: "Vehicle",
  //     avgrating: 4.5,
  //     numratings: 20,
  //     topReview: {
  //       id: 1,
  //       date: "Jan 23, 2022",
  //       reviewerName: "James Dean",
  //       rating: 5,
  //       reviewMessage: `Winona is spectacular and very efficient at her job. We always use her
  //       service to clean our apartment when we don't have time to do it
  //       ourselves. She responds quickly and is always on time!`,
  //     },
  //   },
  //   {
  //     cleanerid: 2,
  //     firstname: "David",
  //     lastname: "Salmone",
  //     imgurl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU",
  //     payrate: 50,
  //     transportMode: "Electric Bicycle",
  //     avgrating: 4.9,
  //     numratings: 120,
  //     topReview: {
  //       id: 2,
  //       date: "Feb 2, 2022",
  //       reviewerName: "Margot Lin",
  //       rating: 5,
  //       reviewMessage: `David is on time! Highly communicative and willing to come to our aid on last minute notice. We highly recommend him for cleaning your property.`,
  //     },
  //   },
  // ];
const listOfCleaners = cleaners.map(cleaner=><CleanerCard key={cleaner.cleanerid} {...cleaner} onOpen={onOpen}/>)

  return (
    <section>
      {listOfCleaners}
    </section>
  );
};
export default CleanersList;
