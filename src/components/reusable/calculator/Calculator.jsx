"use client";
import "./Calculator.scss";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(1000000);
  const [growthRate, setGrowthRate] = useState(10);
  const [rentalYield, setRentalYield] = useState(5);

  const updateValue = (value, setValue) => {
    setValue(value);
    calculate();
  };

  const calculate = () => {
    const futureValue = initialAmount * Math.pow(1 + growthRate / 100, 3);
    const annualRental = futureValue * (rentalYield / 100);
    const totalReturn = annualRental * 3 + (futureValue - initialAmount);

    document.getElementById("futureValue").textContent = new Intl.NumberFormat(
      "en-IN"
    ).format(futureValue.toFixed(2));
    document.getElementById("annualRental").textContent = new Intl.NumberFormat(
      "en-IN"
    ).format(annualRental.toFixed(2));
    document.getElementById("totalReturn").textContent = new Intl.NumberFormat(
      "en-IN"
    ).format(totalReturn.toFixed(2));
  };

  useEffect(() => {
    // Initial calculation
    calculate();
  }, [initialAmount, growthRate, rentalYield]);

  return (
    <div className="calculator">
      <h2>Investment Calculator</h2>
      <div className="input-group">
        <label>Initial Investment Amount (₹):</label>
        <input
          type="range"
          value={initialAmount}
          min={100000}
          max={10000000}
          step={100000}
          onChange={(e) =>
            updateValue(parseInt(e.target.value), setInitialAmount)
          }
          className="custom-input"
        />
        <span id="initialAmountValue">
          {new Intl.NumberFormat("en-IN").format(initialAmount)}
        </span>
      </div>
      <div className="input-group">
        <label>Property Value Growth Per Annum (%):</label>
        <input
          type="range"
          value={growthRate}
          min={1}
          max={100}
          step={1}
          onChange={(e) => updateValue(parseInt(e.target.value), setGrowthRate)}
          className="custom-input"
        />
        <span id="growthRateValue">{growthRate}%</span>
      </div>
      <div className="input-group">
        <label>Rental Yield Per Annum (%):</label>
        <input
          type="range"
          value={rentalYield}
          min={1}
          max={20}
          step={1}
          onChange={(e) =>
            updateValue(parseInt(e.target.value), setRentalYield)
          }
          className="custom-input"
        />
        <span id="rentalYieldValue">{rentalYield}%</span>
      </div>
      <div id="results">
        <p>
          Future Property Value in 3 Years: ₹<span id="futureValue">0</span>
        </p>
        <p>
          Annual Rental Income: ₹<span id="annualRental">0</span>
        </p>
        <p>
          Total Return in 3 Years: ₹<span id="totalReturn">0</span>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
