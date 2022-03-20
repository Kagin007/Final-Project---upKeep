import { Fragment } from "react";
import Star from "./Star";

const Review = props => {
  return (
    <Fragment>
      {" "}
      <h6 className="cleaner__card--review-user">
        {props.reviewerName}{" "}
        {[...Array(props.rating)].map((e, i) => (
          <Star size="12px" />
        ))}
      </h6>
      <p className="cleaner__card--review">{props.reviewMessage}</p>
    </Fragment>
  );
};

export default Review;
