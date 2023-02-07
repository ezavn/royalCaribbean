import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showVideo, setShowVideo] = useState(false);
  const [showDayOne, setShowDayOne] = useState(false);
  const [showDayTwo, setShowDayTwo] = useState(false);
  const [showDayThree, setShowDayThree] = useState(false);
  const [showDayFour, setShowDayFour] = useState(false);
  const [showDayFive, setShowDayFive] = useState(false);
  const [showDayOne2, setShowDayOne2] = useState(false);
  const [showDayTwo2, setShowDayTwo2] = useState(false);
  const [showDayThree2, setShowDayThree2] = useState(false);
  const [showDayFour2, setShowDayFour2] = useState(false);
  const [showLuxuryOne, setShowLuxuryOne] = useState(false);
  const [showLuxuryTwo, setShowLuxuryTwo] = useState(false);
  const [showLuxuryThree, setShowLuxuryThree] = useState(false);
  const [showLuxuryFour, setShowLuxuryFour] = useState(false);
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
    showDayOne2,
    setShowDayOne2,
    showDayTwo2,
    setShowDayTwo2,
    showDayThree2,
    setShowDayThree2,
    showDayFour2,
    setShowDayFour2,
    showLuxuryOne,
    setShowLuxuryOne,
    showLuxuryTwo,
    setShowLuxuryTwo,
    showLuxuryThree,
    setShowLuxuryThree,
    showLuxuryFour,
    setShowLuxuryFour,
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
