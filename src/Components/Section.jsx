import React from "react";

const Section = ({ img, h2, text, btn, flag, id }) => {
  return (
    <div>
      {flag && (
        <div className="row" id={id} style={{ backgroundColor: "#d4c9dc" }}>
          <div className="column">
            <h2>{h2}</h2>
            <p>{text}</p>
            <div className="rowbtn">
              <button>{btn}</button>
            </div>
          </div>
          <div className="column">
            <img className="sectionimg" src={img} alt="img" />
          </div>
        </div>
      )}
      {!flag && (
        <div className="row" id={id} style={{ backgroundColor: "white" }}>
          <div className="column">
            <img className="sectionimg" src={img} alt="img" />
          </div>
          <div className="column">
            <h2>{h2}</h2>
            <p>{text}</p>
            <div className="rowbtn">
              <button>{btn}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
