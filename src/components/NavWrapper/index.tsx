import styled from 'styled-components';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
	display: flex;
	border-right: 1px solid #e0e0e0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 20%;
	height: 100vh;
`;

function NavWrapper() {
	return (
		<Wrapper>
			<div>I'm NavWrapper</div>
			<Button variant="contained">Hello World</Button>
		</Wrapper>
	);
}

export default NavWrapper;
