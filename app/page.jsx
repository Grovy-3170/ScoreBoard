"use client";
import React from "react";
import "@/src/output.css";
import Header from "@/app/my components/Header";
import Details from "@/app/my components/Details";
import Syllabus from "./my components/Syllabus";
import Navbar from "./my components/Navbar";
import Question from "./my components/Question";
import { store } from "./reduc/store";
import { Provider } from "react-redux";
import Form from "./my components/Form";
const page = () => {
  return (
    <div className="bg-white">
      <Provider store={store}>
        <link rel="stylesheet" href="@/src/output.css" />
        <Header></Header>
        <div className=" border border-gray-400 flex flex-col lg:flex-row items-start gap-8 pb-8 pt-12">
          <Navbar />
          <div className="flex flex-col xl:flex-row">
            <Details></Details>
            <div className="xl:w-4/12 lg:w-3/4 p-5 flex flex-col gap-8 mr-8">
              <Syllabus />
              <Question />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default page;
