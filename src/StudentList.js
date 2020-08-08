import React from "react";

function StudentList(props) {
  return (
    <div>
      Name is : <b>{props.name}</b>
      <br />
      Father Name is : <b> {props.fname}</b>
      <br />
      Age is : <b>{props.age}</b>
      <br />
      Gender is :<b> {props.gender}</b>
      <br />
    </div>
  );
}

export default StudentList;
