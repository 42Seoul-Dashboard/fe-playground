interface SenderInput {
  buttonText: string;
  to: string;
  startTime: Date;
  endTime: Date;
}

function Sender ({buttonText, to, startTime, endTime}: SenderInput) {
  const onClick = () => {
    // apply period
    console.log(`send period from ${startTime} to ${endTime} to ${to}`);
  }
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}

export default Sender;
