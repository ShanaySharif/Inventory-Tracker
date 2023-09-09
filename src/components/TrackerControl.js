
import React, { useState } from "react";
import NewTrackerForm from "./NewTrackerForm";
import TrackerList from "./TrackerList";
import TrackerDetail from "./TrackerDetail";


function CoffeeShop() {
    const [coffeeBeans, setCoffeeBeans] = useState([
      {
        id: 1,
        name: "Arabica",
        origin: "Brazil",
        price: "$10.99",
        roast: "Medium",
        poundsLeft: 130,
      },
      // Add more coffee bean types as needed
    ]);
  
    const [newCoffeeBean, setNewCoffeeBean] = useState({
      name: "",
      origin: "",
      price: "",
      roast: "",
      poundsLeft: 0,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewCoffeeBean({
        ...newCoffeeBean,
        [name]: value,
      });
    };
  
    const handleAddCoffeeBean = () => {
      setCoffeeBeans([...coffeeBeans, { ...newCoffeeBean, id: Date.now() }]);
      setNewCoffeeBean({
        name: "",
        origin: "",
        price: "",
        roast: "",
        poundsLeft: 0,
      });
    };
  
    const handleSellPound = (id) => {
      const updatedCoffeeBeans = coffeeBeans.map((bean) => {
        if (bean.id === id && bean.poundsLeft > 0) {
          return {
            ...bean,
            poundsLeft: bean.poundsLeft - 1,
          };
        }
        return bean;
      });
  
      setCoffeeBeans(updatedCoffeeBeans);
    };
  
    return (
      <div>
        <h1>Coffee Shop</h1>
        {/* Display the list of coffee beans */}
        <ul>
          {coffeeBeans.map((bean) => (
            <li key={bean.id}>
              <button onClick={() => handleSellPound(bean.id)}>Sell 1 Pound</button>
              {bean.name} - {bean.origin} - {bean.price} - {bean.roast} - {bean.poundsLeft} pounds left
            </li>
          ))}
        </ul>
  
        {/* Form to add a new coffee bean */}
        <h2>Add New Coffee Bean</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newCoffeeBean.name}
            onChange={handleInputChange}
          />
          {/* Add input fields for origin, price, roast, and poundsLeft */}
          <button type="button" onClick={handleAddCoffeeBean}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CoffeeShop;