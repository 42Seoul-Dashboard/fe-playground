import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import 'react-grid-layout/css/styles.css';
import Section from './Section';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
	{ i: "section1", x: 0, y: 0, w: 3, h: 3 },
	{ i: "section2", x: 3, y: 0, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
	background: whitesmoke;
	width: 100%;
	height: 100%;
`;

const GridItemContent = styled.div`
	padding: 8px;
	width: 100%;
	height: 100%;
`;

const Root = styled.div`
	padding: 16px;
	width:100%;
	height:100%;
`;

const getLayouts = () => {
	const savedLayouts = localStorage.getItem("grid-layout");
	return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const Board = () => {
	const handleLayoutChange = (layout: any, layouts: any) => {
		localStorage.setItem("grid-layout", JSON.stringify(layouts));
	};

	return (
		<Root>
			<ResponsiveGridLayout
			layouts={getLayouts()}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
			rowHeight={300}
			width={1000}
			onLayoutChange={handleLayoutChange}
			>
				<GridItemWrapper key="section1">
					<GridItemContent><Section/></GridItemContent>
				</GridItemWrapper>
				<GridItemWrapper key="section2">
					<GridItemContent>Dark Magician</GridItemContent>
				</GridItemWrapper>
			</ResponsiveGridLayout>
		</Root>
	);
};
export default Board;