import { Link } from 'react-router-dom';

function Login(): JSX.Element {
	return (
		<>
			<p>login page</p>
			<Link to="/Dashboard">로그인</Link>
		</>
	);
}

export default Login;
