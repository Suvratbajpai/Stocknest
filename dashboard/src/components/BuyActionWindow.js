import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext"; // Ensure GeneralContext is a valid React context
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { closeBuyWindow } = useContext(GeneralContext); // Ensure context provides this method

  const handleBuyClick = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await axios.post("http://localhost:8000/newOrder", {
        name: uid,
        qty: Number(stockQuantity), // Convert to number
        price: Number(stockPrice), // Convert to number
        mode: "BUY",
      });
      closeBuyWindow(); // Close the window on success
    } catch (error) {
      console.error("Error placing order:", error.message);
      setErrorMessage("Failed to place the order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
