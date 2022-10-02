import React from "react";
import "./components.css";
import { arrowrightbutton, arrowdownbutton, dividerr } from "../Utils/tools";

function AccordionLayout({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);
  return (
    <>
      <div className="accordionlayout__cnt">
        <div
          onClick={() => handleSetIndex(index)}
          className="accordionlayout__cnt-top"
        >
          <p>{title}</p>
          {activeIndex === index ? arrowdownbutton : arrowrightbutton}
        </div>
        {dividerr}
        {activeIndex === index && (
          <div className="accordionlayout__cnt-bottom">{children}</div>
        )}
      </div>
    </>
  );
}

export default AccordionLayout;
