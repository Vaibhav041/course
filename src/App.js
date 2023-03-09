import "./App.css";
import React, { useState } from "react";
import Card from "./Components/Card";
import { useEffect, useRef } from "react";

function App() {
  
  const ds = {
    0: [  
      {
        display_name: "Public Speaking",
        rating: "4.9;5;117",
        games_count: "5",
        category_name: "Communication",
        original_price: 10000,
        discounted_price: 8000,
        name: "Public Speaking - Learn",
        certificate_count: 1,
        num_classes: 24,
        min_age: 6,
        max_age: 10,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Public Speaking",
        rating: "4.5;5;100",
        games_count: "3",
        category_name: "Communication",
        original_price: 10000,
        discounted_price: 8000,
        name: "Public Speaking - Learn",
        certificate_count: 2,
        num_classes: 20,
        min_age: 11,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
    ],
    1: [
      {
        display_name: "Stop Motion Animation",
        rating: "4.9;5;117",
        games_count: "5",
        category_name: "Visual Arts",
        original_price: 12000,
        discounted_price: 7000,
        name: "Stop Motion Animation-Learn",
        certificate_count: 1,
        num_classes: 24,
        min_age: 5,
        max_age: 9,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Stop Motion Animation",
        rating: "4.5;5;100",
        games_count: "3",
        category_name: "Visual Arts",
        original_price: 11000,
        discounted_price: 5000,
        name: "Stop Motion Animation-Discover",
        certificate_count: 2,
        num_classes: 20,
        min_age: 5,
        max_age: 9,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Stop Motion Animation",
        rating: "4.5;5;100",
        games_count: "3",
        category_name: "Visual Arts",
        original_price: 11000,
        discounted_price: 5000,
        name: "Stop Motion Animation-Discover",
        certificate_count: 2,
        num_classes: 20,
        min_age: 10,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
    ],
    2: [
      {
        display_name: "Western Vocals",
        rating: "4.9;5;117",
        games_count: "5",
        category_name: "Music",
        original_price: 12000,
        discounted_price: 7000,
        name: "Western Vocals-Learn",
        certificate_count: 1,
        num_classes: 14,
        min_age: 6,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Western Vocals",
        rating: "4.5;5;100",
        games_count: "3",
        category_name: "Music",
        original_price: 11000,
        discounted_price: 5000,
        name: "Western Vocals-Discover",
        certificate_count: 2,
        num_classes: 20,
        min_age: 6,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
      {
        display_name: "Western Vocals",
        rating: "4.0;5;100",
        games_count: "8",
        category_name: "Music",
        original_price: 11000,
        discounted_price: 5000,
        name: "Western Vocals-Excel",
        certificate_count: 2,
        num_classes: 30,
        min_age: 6,
        max_age: 15,
        pitch:
          "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
        curriculum_outcomes: [
          "Understand the debate format of communications and it’s structure",
          "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
          "Learn to research and prepare for a debate",
          "Perform and compete with other students!",
        ],
      },
    ],
  };
  const [state, setState] = useState("junior");

 let id = Math.floor(Math.random() * 3 );
 let junior = []
 let senior = []
 
  Object.keys(ds).map((value) => {
    if (value == id) {
      ds[id].map((ele) => {
        if (ele.min_age < 10) {
          junior.push(ele);
        }
        else {
          senior.push(ele);
        }
      })
    }
   }) 
   
  return (
    <div className="box">
      <div className="inner">
        <div className="buttonSection" style={{ textAlign: "center" }}>
          
          <div className="button" style={{margin:"5px 10px 20px 10px"}}>
          <input type="radio" id="a25" name="check-substitution-2" onClick={() => setState("junior")}/>
          <label class="btn btn-default" for="a25">Junior</label>
          </div>
          <div className="button" style={{margin:"5px 10px 20px 10px"}}>
          <input type="radio" id="a25" name="check-substitution-2" onClick={() => setState("senior")}/>
          <label class="btn btn-default" for="a25">Senior</label>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {state === "junior"
            ? junior?.map((ele, index) => {
                return (
                  <div key={index}>
                    <Card dName={ele.display_name} pitch={ele.pitch} outcomes={ele.curriculum_outcomes} price={ele.discounted_price} oPrice={ele.original_price} classes={ele.num_classes} games={ele.games_count} cer={ele.certificate_count} rating={ele.rating}/>
                  </div>
                );
              })
            : senior?.map((ele, index) => {
                return (
                  <div key={index}>
                    <Card dName={ele.display_name} pitch={ele.pitch} outcomes={ele.curriculum_outcomes} price={ele.discounted_price} oPrice={ele.original_price} classes={ele.num_classes} games={ele.games_count} cer={ele.certificate_count} rating={ele.rating}/>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
