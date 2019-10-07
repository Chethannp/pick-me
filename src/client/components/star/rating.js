import React from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
import StarIcon from "../../styledComponents/staricon";

const StarRating = ({ id, ratingCount }) => {
    return (
        <StarRatingComponent
            name={id}
            starCount={5}
            emptyStarColor="#dfdfdf"
            starColor={
                (ratingCount == 1 && "#d30019") ||
                (ratingCount < 3 && "#f5a623") ||
                (ratingCount > 2 && "#689f38")
            }
            renderStarIcon={() => <StarIcon />}
            value={ratingCount}
        />
    );
};

export default StarRating;

StarRating.propTypes = {
    id: PropTypes.string,
    ratingCount: PropTypes.number
};
