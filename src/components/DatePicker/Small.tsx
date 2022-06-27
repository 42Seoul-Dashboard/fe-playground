import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface SmallInput {
  text: string;
  time: Date | null | undefined;
  setTime: (time: Date) => void;
}


function Small({text, time, setTime}: SmallInput) {
  console.log("Render Small DatePicker", text, time);
  return (
    <div style={{ display: "inline-flex" }}>
      <span>{`${text}: `}</span>
      <DatePicker selected={time} onChange={setTime}/>
    </div>
  );
}

export default Small;
