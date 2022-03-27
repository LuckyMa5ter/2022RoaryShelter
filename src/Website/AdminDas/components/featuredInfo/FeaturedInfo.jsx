import "./featuredInfo.css";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Current Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
        
        </div>
        <span className="featuredSub">Current Pending Orders</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Current Items</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          
        </div>
        <span className="featuredSub">Items listed currently</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Times Listed</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
          
        </div>
        <span className="featuredSub">Current Times</span>
      </div>
    </div>
  );
}
