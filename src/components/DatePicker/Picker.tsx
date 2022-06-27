import Preset from "./Preset";
import "react-datepicker/dist/react-datepicker.css";
import Small from "./Small";
import { useState } from "react";
import Sender from "./Sender";

const START_TEXT = "시작일",
  END_TEXT = "종료일",
  BUTTON_TEXT = "보내기";

function Picker() {
  const [startTime, setStartTimer] = useState(new Date());
  const [endTime, setEndTimer] = useState(new Date());

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
      <Small text={START_TEXT} time={startTime} setTime={wrapSetStartTimer}/>
      <Small text={END_TEXT} time={endTime} setTime={wrapSetEndTimer}/>
      <Preset setStart={setStartTimer} setEnd={setEndTimer} />
      <Sender
        buttonText={BUTTON_TEXT}
        to={"where"}
        startTime={startTime}
        endTime={endTime}></Sender>
    </div>
  );
}

export default Picker;
