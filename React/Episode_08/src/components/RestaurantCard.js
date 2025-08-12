import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    id,
  } = resData?.info;

  return (
    // The Link component makes the entire card clickable
    <Link to={'/restaurants/' + id} className="restaurant-link">
      <div
        className="res-card"
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        {/* ✅ FIX: Only render the image if cloudinaryImageId exists.
            This prevents the "empty src" warning.
        */}
        {cloudinaryImageId && (
          <img
            className="res-logo"
            src={CDN_URL + cloudinaryImageId}
            alt={name} // ✅ FIX: Added alt text for accessibility
          />
        )}

        <div className="res-card-content">
          <h3>{name}</h3>
          <hr />
          <em>{cuisines.join(', ')}</em>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;