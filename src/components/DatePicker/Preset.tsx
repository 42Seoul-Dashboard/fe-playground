import { Dispatch, SetStateAction } from "react";

interface PresetInput {
  setStart: Dispatch<SetStateAction<Date>>;
  setEnd: Dispatch<SetStateAction<Date>>;
}

function Preset ({setStart, setEnd}: PresetInput) {
  const DAYTOMS = 86400400;
  const onClick = (days: number) => {
    return () => {
      // set 함수가 실행될 때 바로 값으로 적용이 되는건 아닌듯.
      setEnd(new Date());
      setStart(new Date(Date.now() - days * DAYTOMS));
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