import React from "react";
import "../style/General.css";
import "../style/Main.css";
import AgeCalc from "../main-function/Age";
import BmiCalc from "../main-function/Bmi";
import NwsCalc from "../main-function/Nws";
import tabsData from "../data/tabsData";
function Main() {
  const [active, setActive] = React.useState();

  function HandleClick(index) {
    setActive(index);
  }

  return (
    <main className="nav-containers">
      <div className="nav-wrapper">
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            name={tab.name}
            onClick={() => HandleClick(index)}
            className={active === index ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="function-container">
        {active === 0 ? (
          <AgeCalc />
        ) : active === 1 ? (
          <BmiCalc />
        ) : active === 2 ? (
          <NwsCalc />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Main;
