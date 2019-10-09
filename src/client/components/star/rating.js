/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Third party library for showing company ratings
 */
import StarRatingComponent from "react-star-rating-component";

/**
 * Styled Component Imports
 */
import StarIcon from "../../styledComponents/staricon";

/**
 * @function StarRating - Functional Component
 * @param {id} number - Holds a unique value
 * @param {ratingCount} number - Holds the count value which is provided to the star rating component for starts selection
 * @returns {component}
 */

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
