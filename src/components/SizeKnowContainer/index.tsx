
import { withSize, SizeMeOptions, SizeMeProps } from 'react-sizeme'

function Component({ size }: SizeMeProps) {

	const { width, height } = size;
	console.log("temp");
	return (<div>
		<h1>
			My size is {width}x{height}
		</h1>
	</div>);
}

const options: SizeMeOptions = {
	monitorHeight: true,
	monitorWidth: true,
	noPlaceholder: false,
	refreshMode: 'throttle',
	refreshRate: 16,
	resizeDetectorStrategy: 'scroll'
}

export default withSize(options)(Component);