import React, {useState} from "react";
import { MenuList } from "../../data/menuList";
import { MdRestaurantMenu } from "react-icons/md";
import "./Menu.css";

function MenuSection() {

  const [sortType, setSortType] = useState("default");

  const sortedMenu = [...MenuList].sort((a, b) => {
    if(sortType === "low") {
      return a.price - b.price;
    }
    if (sortType === "high") {
      return b.price - a.price;
    }
    return 0; //default order
  });

  return (
    <div id="menu" className="menu container">

      <h1 className="text-center mb-3">
        <MdRestaurantMenu className="mb-2 me-1" />
        Explore our menu
      </h1>

      <div className="sort-box mb-3" style={{width: 180}}>
        <select onChange={(e) => setSortType(e.target.value)} className="form-select">
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
        {sortedMenu.map((item, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="card rounded-4">

              <div className="image-container rounded-top-4">
                <img src={item.image} alt={item.name} className="card-img-top" loading="lazy" />
              </div>

              <div className="card-body mx-3 my-2">
                <h5 className="card-title mb-2">{item.name}</h5>
                <p className="card-text">{"\u20B9"} {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div >
  );
}

export default MenuSection;