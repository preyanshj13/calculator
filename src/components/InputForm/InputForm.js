import React, { useState } from "react";
import "./InputForm.css";
import * as math from "mathjs";

function InputForm() {
  let arrNum = [
    { value: "Clear", id: "Clear", width: '50%', bgColor: 'rgba(141, 110, 234, 0.742)'},
    { value: "->", id: "->", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "+", id: "+", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "9", id: "9", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "8", id: "8", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "7", id: "7", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "-", id: "-", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "6", id: "6", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "5", id: "5", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "4", id: "4", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "x", id: "*", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "3", id: "3", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "2", id: "2", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "1", id: "1", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "/", id: "/", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: ".", id: ".", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "0", id: "0", width: '25%', bgColor: 'rgba(141, 110, 234, 0.564)' },
    { value: "=", id: "=", width: '50%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "+/-", id: "+/-", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    // { value: "2nd", id: "2nd" },
    { value: "sin", id: "sin", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "cos", id: "cos", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
    { value: "tan", id: "tan", width: '25%', bgColor: 'rgba(141, 110, 234, 0.742)' },
  ];

  const [inputVal, setInputVal] = useState("");
  // let bin = "0";

  const handleClick = (value) => {
    // if (value === "+") {
    //   console.log("plus clicked");
    //   setInputVal(inputVal.concat("+"))
    //   setSecInputVal(parseFloat(inputVal));
    //   console.log(secInputVal);
    // //   setInputVal(secInputVal);
    // } else if (id === "=") {
    //     setInputVal(secInputVal)
    // } else
    // bin = bin + inputVal

    //   setInputVal(add(bin,inputVal))
    // } else
    if (value === "Clear") {
      //   console.log("Clear Clicked");
      setInputVal("");
    } else if (value === "->") {
      setInputVal(inputVal.slice(0, inputVal.length - 1));
    } else if (value === "+/-") {
      setInputVal(inputVal * -1);
    } else if (value === "sin") {
      let x = inputVal;
      // x = (x * 180) / Math.PI;
      x = (x * Math.PI) / 180;
      setInputVal(Math.sin(x));
    } else if (value === "cos") {
      let x = inputVal;
      x = (x * Math.PI) / 180;
      setInputVal(Math.cos(x));
    } else if (value === "tan") {
      let x = inputVal;
      x = (x * Math.PI) / 180;
      if (inputVal === "90") {
        setInputVal("Not Defined");
      } else {
        setInputVal(Math.tan(x));
      }
    } else if (value === "=") {
      // eslint-disable-next-line
      let a = math.evaluate(inputVal);
      setInputVal(a);
    } else {
      try {
        setInputVal(inputVal.concat(value));
      } catch (err) {
        setInputVal("Error");
      }
    }
  };

  return (
    <form>
      <input
        className="inputNum mb-2"
        // type="number"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      />
      {/* <div style={{border: '1px solid black', width: '20%'}} onClick={}>9</div> */}
      {arrNum.map(({ value, id, width, bgColor }) => (
        <button
          className="nums"
          type="button"
          key={id}
          onClick={() => handleClick(id)}
          style={{width: width, backgroundColor:bgColor}}
        >
          {value}
        </button>
      ))}
    </form>
  );
}

export default InputForm;
