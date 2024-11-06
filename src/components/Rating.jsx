import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {
    return (
        <div>
            <ReactStars>
                count={5}
                onChange={ratingChanged}
                size={24}
                value={rating}
                activeColor="#ffd700"
            </ReactStars>
        </div>
    );
};

export default Rating;