import { Responsive, WidthProvider} from 'react-grid-layout';
import styled from 'styled-components';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
	{ i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
	{ i: 'dark-magician', x: 1, y: 0, w: 1, h: 1 },
	{ i: 'kuriboh', x: 2, y: 0, w: 1, h: 1 },
	{ i: 'spell-caster', x: 3, y: 0, w: 1, h: 1 },
	{ i: 'summoned-skull', x: 4, y: 0, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
	background: #f5f5f5;
`;

const GridItemContent = styled.div`
	padding: 8px;
`;

const Root = styled.div`
	padding: 16px;
`;

const StyledResponsiveGridLatyout = styled(ResponsiveGridLayout)`
	position: relative;
	background: #888888;

`;

// styled-components definition removed for brevity...
const getLayouts = () => {
	const savedLayouts = localStorage.getItem('grid-layout');

	return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};
// styled-components definition removed for brevity...
const TestGridLayout = () => {
	const handleLayoutChange = (layout: any, layouts: any) => {
		localStorage.setItem('grid-layout', JSON.stringify(layouts));
	};

	return (
		<Root>
			<StyledResponsiveGridLatyout
					layouts={getLayouts()}
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
					rowHeight={300}
					width={1000}
					onLayoutChange={handleLayoutChange}
					>
					<GridItemWrapper key='blue-eyes-dragon'>
						<GridItemContent>Blue Eyes Dragon</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='dark-magician'>
						<GridItemContent>Dark Magician</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='kuriboh'>
						<GridItemContent>Kuriboh</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='spell-caster'>
						<GridItemContent>Spell Caster</GridItemContent>
					</GridItemWrapper>
					<GridItemWrapper key='summoned-skull'>
						<GridItemContent>Summoned Skull</GridItemContent>
					</GridItemWrapper>
			</StyledResponsiveGridLatyout>
		</Root>
	);
};
export default TestGridLayout;
