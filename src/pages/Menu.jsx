import React, {useState} from "react";
import { MenuList } from "../helpers/MenuList";
import { MdRestaurantMenu } from "react-icons/md";
import "../styles/Menu.css";

function Menu() {

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
    <div id="menuPage" className="container my-3">

      <h1 className="text-center fw-bold mb-3">
        <MdRestaurantMenu className="mb-2 me-1" />
        Our Menu
      </h1>

      <div className="sort-box mb-3" style={{width: 180}}>
        <select onChange={(e) => setSortType(e.target.value)} className="form-select">
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {sortedMenu.map((item, index) => (
          <div className="col" key={index}>
            <div className="card p-3 border border-secondary border-opacity-75">

              <div className="image-container bg-light bg-opacity-75 border border-secondary border-opacity-50 rounded">
                <img src={item.image} alt={item.name} className="card-img-top" />
              </div>

              <div className="card-body p-0 pt-2">
                <h6 className="card-title">Name: {item.name}</h6>
                <p className="card-text">Price: {item.price} Rs.</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div >
  );
}

export default Menu;