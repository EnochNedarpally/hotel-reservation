import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="siContainer">
      <div className="siLeft">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt="Hotel"
        />
      </div>
      <div className="siCenter">
        <h3>Tower Street Apartment</h3>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siRight">
          <div className="reviewTop">
                <p>Excellent</p>
                <button>8.9</button>
          </div>
          <div className="reviewBottom">
                <h3>&#8377;3000</h3>
                <span>Includes Tax and Fees</span>
                <button>See Availability</button>
          </div>
      </div>
    </div>
  );
};

export default SearchItem;
