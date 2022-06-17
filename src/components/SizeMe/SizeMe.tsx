import { SizeMe } from "react-sizeme";

function TestSizeMe(size: any) {
  return (
    <div>
      <SizeMe>{({ size }) => <div>My width is {size.width}px</div>}</SizeMe>
    </div>
  );
}

export default TestSizeMe;