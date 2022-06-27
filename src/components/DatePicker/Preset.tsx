import { Dispatch, SetStateAction } from "react";

interface PresetInput {
  setStart: Dispatch<SetStateAction<Date>>;
  setEnd: Dispatch<SetStateAction<Date>>;
}

const DAY_TO_MS = 86400400;

function Preset ({setStart, setEnd}: PresetInput) {
  const onClick = (days: number) => {
    return () => {
      // set 함수가 실행될 때 바로 값으로 적용이 되는건 아닌듯.
      setEnd(new Date());
      setStart(new Date(Date.now() - days * DAY_TO_MS));
    }
  }
  return (
    <div>
      <button onClick={onClick(1)}>일</button>
      <button onClick={onClick(7)}>주</button>
      <button onClick={onClick(365)}>년</button>
    </div>
  );
}

export default Preset;
