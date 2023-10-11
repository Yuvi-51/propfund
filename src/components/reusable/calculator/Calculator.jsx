"use client";
import "./Calculator.scss";
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(1000000);
  const [growthRate, setGrowthRate] = useState(10);
  const [rentalYield, setRentalYield] = useState(5);
  const [futureValue, setFutureValue] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [annualRental, setAnnualRental] = useState(0);

  const updateValue = (value, setValue) => {
    setValue(value);
    calculate();
  };

  const calculate = () => {
    const futureValue = initialAmount * Math.pow(1 + growthRate / 100, 3);
    const annualRental = futureValue * (rentalYield / 100);
    const totalReturn = annualRental * 3 + (futureValue - initialAmount);
    setFutureValue(futureValue.toFixed(2));
    setAnnualRental(annualRental.toFixed(2));
    setTotalReturn(totalReturn.toFixed(2));
    // document.getElementById("futureValue").textContent = new Intl.NumberFormat(
    //   "en-IN"
    // ).format(futureValue.toFixed(2));
    // document.getElementById("annualRental").textContent = new Intl.NumberFormat(
    //   "en-IN"
    // ).format(annualRental.toFixed(2));
    // document.getElementById("totalReturn").textContent = new Intl.NumberFormat(
    //   "en-IN"
    // ).format(totalReturn.toFixed(2));
  };

  useEffect(() => {
    // Initial calculation
    calculate();
  }, [initialAmount, growthRate, rentalYield]);
  const data = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
      {
        label: "Colors",
        data: [12, 19, 3],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Ensures the chart can resize in a responsive manner
  };
  return (
    <div className="calculator container">
      <div className="calculator_div">
        <div className="inputs">
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
              onChange={(e) =>
                updateValue(parseInt(e.target.value), setGrowthRate)
              }
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
        </div>
        <div id="results">
          <p>
            Future Property Value in 3 Years:
            <span>
              ₹<span id="futureValue">{futureValue}</span>
            </span>
          </p>
          <p>
            Annual Rental Income:
            <span>
              ₹<span id="annualRental">{annualRental}</span>
            </span>
          </p>
          <p>
            Total Return in 3 Years:
            <span>
              ₹<span id="totalReturn">{totalReturn}</span>
            </span>
          </p>
        </div>
      </div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: futureValue, label: "futureValue" , color:"#2b2929" },
              { id: 1, value: totalReturn, label: "totalReturn" , color:"grey"  },
              { id: 2, value: annualRental, label: "annualRental",color:"#f3bd70"  },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Calculator;
