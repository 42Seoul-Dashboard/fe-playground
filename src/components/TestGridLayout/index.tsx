import React, { useState } from 'react';
import { Responsive, WidthProvider} from 'react-grid-layout';
import styled from 'styled-components';
import 'react-grid-layout/css/styles.css';
import { withSize } from 'react-sizeme';
import { ChartBar } from './../Chart/ChartBar';
import { ChartLine } from './../Chart/ChartLine';
import { ChartDoughnut } from './../Chart/ChartDoughnut'

const chartColor = [
  '#72aee6',
  '#c3c4c7',
  '#ff8085',
  '#f0c33c',
  '#1ed14b',
  '#2271b1',
  '#008a20',
];

const chartBorderColor = [
  '#4f94db',
  '#a7aaad',
  '#f96369',
  '#dba617',
  '#00ba37',
  '#135e96',
  '#007107',
];

const labels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const data1 = {
  labels: labels,
  datasets: [
    {
      label: 'dataset 1',
      backgroundColor: chartColor[0],
      borderColor: chartBorderColor[0],
      data: [2, 9, 5, 3, 6, 1, 9],
    },
  ],
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
}

const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'dataset 2',
      backgroundColor: chartColor,
      borderColor: chartBorderColor,
      data: [2, 9, 5, 3, 6, 1, 9],
    },
  ]
}

const withSizeHOC = withSize();
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
	{ i: 'blue-eyes-dragon', x: 0, y: 0, w: 10, h: 1 },
	{ i: 'dark-magician', x: 1, y: 0, w: 10, h: 1 },
	{ i: 'kuriboh', x: 2, y: 0, w: 10, h: 1 },
	{ i: 'spell-caster', x: 3, y: 0, w: 10, h: 1 },
	{ i: 'summoned-skull', x: 4, y: 0, w: 10, h: 1 },
];

const GridItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: stretch;
	background: #f5f5f5;
`;

const GridItemContent = styled.div`
	position: relative;
	margin: auto;
	padding: 8px;
	width: 100%;
	height: 100%;
`;

const Root = styled.div`
	padding: 16px;
`;

const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)`
	// 상단에 다른 element가 있을 때 item을 클릭하면 상위 element height만큼 아래로 내려가서 absolute를 relative로 바꿔줌
	position: relative;
	background: #888888;
`;

// getLayouts : 저장한 layouts 객체를 리턴한다.
const getLayouts = () => {
	const savedLayouts = localStorage.getItem('grid-layout');

	return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const TestGridLayout = () => {
	// handleLayoutChange handler가 그리드의 레이아웃이 바뀔 때마다 localStorage.setItem함수로 새로운 layouts 객체를 저장한다.
	const handleLayoutChange = (layout: any, layouts: any) => {
		localStorage.setItem('grid-layout', JSON.stringify(layouts));
	};

	return (
		<Root>
			<StyledResponsiveGridLayout
					layouts={getLayouts()}
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
					rowHeight={300}
					width={1000}
					onLayoutChange={handleLayoutChange}
					>
					<GridItemWrapper key='blue-eyes-dragon'>
						<GridItemContent>
							<ChartLine options={options} data={data1}/>
						</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='dark-magician'>
						<GridItemContent>
							<ChartBar options={options} data={data1} />
						</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='kuriboh'>
						<ChartDoughnut options={options} data={data2} />
					</GridItemWrapper>
					<GridItemWrapper key='spell-caster'>
						<GridItemContent>Spell Caster</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='summoned-skull'>
						<GridItemContent>Summoned Skull</GridItemContent>
					</GridItemWrapper>
			</StyledResponsiveGridLayout>
		</Root>
	);
};
export default TestGridLayout;
