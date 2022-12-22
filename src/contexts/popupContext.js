import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showVideo, setShowVideo] = useState(false);
  const [showDayOne, setShowDayOne] = useState(false);
  const [showDayTwo, setShowDayTwo] = useState(false);
  const [showDayThree, setShowDayThree] = useState(false);
  const [showDayFour, setShowDayFour] = useState(false);
  const [showDayFive, setShowDayFive] = useState(false);
  const value = {
    showVideo,
    setShowVideo,
    showDayOne,
    setShowDayOne,
    showDayTwo,
    setShowDayTwo,
    showDayThree,
    setShowDayThree,
    showDayFour,
    setShowDayFour,
    showDayFive,
    setShowDayFive,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
