import PropertyCard from "../reusable/PropertyCard.jsx";
import "./Investment.scss";

const Investment = () => {
  return (
    <div className="opportunity container">
      <div className="browse_opportunities">Browse Opportunities</div>
      <div className="filter_options">
        <p>Showing 1 opportunity</p>
        <select>
          <option>Sort By</option>
          <option>Date</option>
          <option>Price</option>
        </select>
      </div>
      <div className="property_card_investor">
        {" "}
        <PropertyCard />
      </div>
    </div>
  );
};

export default Investment;
