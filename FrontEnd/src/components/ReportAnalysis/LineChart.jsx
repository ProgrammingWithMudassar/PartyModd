import { lineChartData as data } from './Data';
import { ResponsiveBump } from '@nivo/bump';

const LineChart = () => (
    // <h1>LineChart</h1>  
    <ResponsiveBump
        data={data}
        // colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        enableGridX={false}
        enableGridY={false}
        axisBottom={false}
        axisTop={false}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />

)
export default LineChart;