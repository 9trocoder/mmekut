import React from "react";
import { arrowrightbutton, arrowdownbutton } from "../Utils/tools";

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
          <div className="accordionlayout__cnt-topicon">
            {activeIndex === index ? arrowrightbutton : arrowdownbutton}
          </div>
        </div>
        {activeIndex === index && (
          <div className="accordionlayout__cnt-bottom">{children}</div>
        )}
      </div>
    </>
  );
}

export default AccordionLayout;
