import React, { useContext } from "react";
import ReactVisibilitySensor from "react-visibility-sensor-v2";
import { sectionContext } from "../App";

const AppWrap = (Component, idName, idx) =>
  function HOC() {
    const { setCurrentSection } = useContext(sectionContext);

    return (
      <div id={idName} className={`app__container $(classNames)`}>
        <div className="app_flex">
          <ReactVisibilitySensor
            key={idx}
            onChange={(visibliy) => {
              if (visibliy) {
                setCurrentSection(idx);
              }
            }}
          >
            <Component />
          </ReactVisibilitySensor>
        </div>
      </div>
    );
  };

export default AppWrap;
