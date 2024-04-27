import React from "react";
import InputForm from "../InputForm/InputForm";
import "./CalcBox.css";

const CalcBox = () => {
  return (
    <div className="backg">
      <div className="calculatorBox mx-auto col-sm-5 col-lg-3">
        <InputForm />
      </div>
    </div>
  );
};

export default CalcBox;
