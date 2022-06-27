import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import 'react-grid-layout/css/styles.css';
import BarSticker from './ChartSticker/BarSticker';
import DoughnutSticker from './ChartSticker/DoughnutSticker';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
	{ i: "sticker1", x: 0, y: 0, w: 1, h: 1 },
	{ i: "sticker2", x: 0, y: 1, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
	position: relative;
	background: white;
	width:100%;
	height:100%;
`;

const GridItemContent = styled.div`
	padding: 8px;
	position: relative;
	width: 100%;
	height: 100%;
`;

const Root = styled.div`
	// inline으로 sticker외의 section 범위를 드래깅할 수 있도록 함
	display: inline;
	position: relative;
	width:100%;
	height:100%;
`;

const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)`
	position: relative;
	width: 100%;
	height: 100%;
`;

const getLayouts = () => {
	const savedLayouts = localStorage.getItem("grid-layout");
	return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const Section = (props: any) => {
	const handleLayoutChange = (layout: any, layouts: any) => {
		localStorage.setItem("grid-layout", JSON.stringify(layouts));
	};

	const handlePress = (e: any) => {
		e.stopPropagation();
	};

	return (
		<Root onMouseDown={e => handlePress(e)}>
			<StyledResponsiveGridLayout
			layouts={getLayouts()}
			breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
			rowHeight={284}
			width={1000}
			onLayoutChange={handleLayoutChange}
			>
				<GridItemWrapper key="sticker1">
					<GridItemContent><BarSticker/></GridItemContent>
				</GridItemWrapper>
				<GridItemWrapper key="sticker2">
					<GridItemContent><DoughnutSticker/></GridItemContent>
				</GridItemWrapper>
			</StyledResponsiveGridLayout>
		</Root>
	);
};
export default Section;