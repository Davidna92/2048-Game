import { useEffect } from "react";

//CUSTOM HOOK
export const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
      // initiate the event handler
      window.addEventListener(event, handler, passive);
  
      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        window.removeEventListener(event, handler);
      };
    });
  };


//COLORS HANDLER
export const getColors = (num) => {
    switch (num) {
        case 2:
            return "#EBDCD0";
        case 4:
            return "#E9DBBA";
        case 8:
            return "#E9A077";
        case 16:
            return "#F08152";
        case 32:
            return "#F2655f";
        case 64:
            return "#F1462D";
        case 128:
            return "#E7C65E";
        case 256:
            return "#E8C350";
        case 512:
            return "#E8BE40";
        case 1024:
            return "#E8BB31";
        case 2048:
            return "#E7B723";
        default:
            return "#C2B3A3";
    }
}



//KEYS DOC
export const UP_ARROW = 38;
export const DOWN_ARROW = 40;
export const LEFT_ARROW = 37;
export const RIGHT_ARROW = 39;