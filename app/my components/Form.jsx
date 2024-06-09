"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adjustcurr } from "../reduc/currData";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const curr = useSelector((state)=>state.curr.curr);
  const [formData, setFormData] = useState({
    rank: "1",
    percentile: "30",
    score: "10",
  });
  const [errors, setErrors] = useState({});

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate each field on change
    setErrors({
      ...errors,
      [name]: validateInput(name, value),
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all fields before submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission if errors exist
    }// Replace with your formData structure
    const {rank, percentile, score} = formData;
    const a = [curr[1]];
    dispatch(adjustcurr({rank, percentile, score}));
    // dispatch(adjustNoOfStByPerc([...a, percentile]));
    // Handle form submission logic (e.g., update state variables)
    console.log("Form submitted successfully:", formData);

    setIsOpen(false); // Close the form after successful submission
  };

  const validateInput = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "rank":
        if (!value) {
          errorMessage = "Required";
        } else if (isNaN(value)) {
          errorMessage = "Should be a number";
        }
        break;
      case "percentile":
        if (!value) {
          errorMessage = "Required";
        } else if (isNaN(value)) {
          errorMessage = "Should be a number";
        } else if (value < 0 || value > 100) {
          errorMessage = "Percentile: 0-100";
        }
        break;
      case "score":
        if (!value) {
          errorMessage = "Required";
        } else if (isNaN(value)) {
          errorMessage = "Should be a number";
        } else if (value < 0 || value > 15) {
          errorMessage = "Score: 0-15";
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const validateForm = () => {
    const allErrors = {};
    for (const field in formData) {
      const error = validateInput(field, formData[field]);
      if (error) {
        allErrors[field] = error;
      }
    }
    return allErrors;
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormData({ rank: "", percentile: "", score: "" });
    setErrors({});
  };

  return (
    <div>
      <button
        onClick={handleOpenForm}
        className="bg-blue-800 font-bold text-white py-1 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
      >
        Update
      </button>
      {isOpen && (
        <div className="form-container min-h-96 px-6 w-full md:w-2/5 lg:h-3/5 h-fit text-black bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-around"
          >
            <div className="heading flex justify-between p-3">
              <h2 className="font-bold lg:text-4xl	text-lg">Update Scores</h2>
              <img src="images/html.png" alt="Logo" className="logo w-8" />
            </div>
            <div className="input-container flex justify-between flex-col lg:flex-row gap-5 lg:gap-0 mb-5 lg:mb-0">
              <label htmlFor="rank" className="flex items-center">
                <div className="Sno bg-blue-900 px-2 rounded-full mr-5 font-bold text-white">
                  1
                </div>
                <p>
                  Update your <strong>Rank</strong>
                </p>
              </label>
              <div className="input relative">
                <input
                  type="text"
                  id="rank"
                  name="rank"
                  placeholder="Rank"
                  value={formData.rank}
                  onChange={handleChange}
                  className={`lg:w-36 w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                    errors.rank
                      ? "border-red-500 focus:ring-red-700"
                      : "border-blue-500 focus:ring-blue-700"
                  }`} // Add error class if needed
                />
                {errors.rank && (
                  <span className="error-message absolute left-0 top-10 text-red-500">
                    {errors.rank}
                  </span>
                )}{" "}
              </div>
            </div>
            <div className="input-container  flex justify-between  flex-col lg:flex-row gap-5 lg:gap-0 mb-5 lg:mb-0">
              <label htmlFor="percentile" className="flex items-center">
                <div className="Sno bg-blue-900 px-2 rounded-full mr-5 font-bold text-white">
                  2
                </div>
                <p>
                  Update your <strong>Percentile</strong>
                </p>
              </label>
              <div className="input relative">
                <input
                  type="text"
                  id="percentile"
                  name="percentile"
                  placeholder="Percentile"
                  value={formData.percentile}
                  onChange={handleChange}
                  className={`lg:w-36 w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700 ${
                    errors.percentile
                      ? "border-red-500 focus:ring-red-700"
                      : "border-blue-500 focus:ring-blue-700"
                  }`}
                />
                {errors.percentile && (
                  <span className="error-message absolute left-0 top-10 text-red-500">
                    {errors.percentile}
                  </span>
                )}
              </div>
            </div>
            <div className="input-container  flex justify-between  flex-col lg:flex-row gap-5 lg:gap-0 mb-5 lg:mb-0">
              <label htmlFor="Score" className="flex items-center">
                <div className="Sno bg-blue-900 px-2 rounded-full mr-5 font-bold text-white">
                  3
                </div>
                <p>
                  Update your <strong>Current Score (out of 15)</strong>
                </p>
              </label>
              <div className="input relative">
                <input
                  type="text"
                  id="score"
                  name="score"
                  placeholder="Score"
                  value={formData.score}
                  onChange={handleChange}
                  className={`lg:w-36 w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-1 ${
                    errors.score
                      ? "border-red-500 focus:ring-red-700"
                      : "border-blue-500 focus:ring-blue-700"
                  }`}
                />
                {errors.score && (
                  <span className="error-message absolute left-0 top-10 text-red-500">
                    {errors.score}
                  </span>
                )}
              </div>
            </div>
            <div className="button-container flex gap-3 justify-end">
              <button
                type="button"
                onClick={closeForm}
                className="text-blue-800 border-2 border-blue-800 px-5 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex items-center gap-1 bg-blue-800 font-bold text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                Submit <img src="images/rightArrow.svg" alt="submit" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
