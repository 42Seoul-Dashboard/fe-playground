import Preset from "./Preset";
import "react-datepicker/dist/react-datepicker.css";
import Small from "./Samll";
import { useState } from "react";
import Sender from "./Send";

function Picker() {
  const [startTime, setStartTimer] = useState(new Date());
  const [endTime, setEndTimer] = useState(new Date());

  const startText = "시작일",
      endText = "종료일",
      buttonText = "보내기";

  const wrapSetStartTimer = (date: Date) => {
    if (date.getTime() <= endTime.getTime()) {
      setStartTimer(date);
    }
    // alert prompt
  }
  const wrapSetEndTimer = (date: Date) => {
    if (date.getTime() >= startTime.getTime()) {
      setEndTimer(date);
    }
    // alert prompt
  }
  return (
    <div style={{ display: 'flex'}}>
      <Small text={startText} time={startTime} setTime={wrapSetStartTimer}/>
      <Small text={endText} time={endTime} setTime={wrapSetEndTimer}/>
      <Preset setStart={setStartTimer} setEnd={setEndTimer} />
      <Sender
      buttonText={buttonText}
      to={"where"}
      startTime={startTime}
      endTime={endTime}></Sender>
    </div>
  );
}

export default Picker;
