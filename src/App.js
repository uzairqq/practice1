import React from "react";
import "./App.css";
import StudentList from "./StudentList";

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>

      <StudentList name="uzair" fname="iqbal" age="30" gender="Male" />
      <br />
      <br />
      <StudentList name="laraib" fname="iqbal" age="34" gender="Male" />
      <br />
      <br />
      <StudentList name="iman" fname="khalid" age="40" gender="Female" />
      <br />
      <br />
    </div>
  );
}

export default App;
