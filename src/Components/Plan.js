import React from "react";

function Plan(props) {
  return (
    <>
      <li className="shadow p-2 my-2 col-sm-md-6  col-10 ">{props.value}</li>
      <button
        className="btn btn-warning my-2 col-sm-2  col-2 offset"
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        X
      </button>
    </>
  );
}

export default Plan;
