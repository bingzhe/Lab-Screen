import { defineComponent } from 'vue';
import echarts from '@/components/echarts';

const ChartLine = defineComponent({
  name: 'TrafficTools',
  components: {
    echarts,
  },
  setup() {
    const className = 'trafficTools';
    const width = '100%';
    const height = '100%';
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['N2', 'AR', 'CO2', 'H2', 'NH3', 'C12', 'NH3', 'C12'],
          axisLine: {
            lineStyle: {
              color: '#a5ccf2',
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#a5ccf2',
            },
          },
        },
      ],
      series: [
        {
          type: 'bar',
          smooth: true,
          colorBy: 'data',
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
          data: [800, 1200, 900, 300, 800, 200, 300, 400],
        },
      ],
    };
    return () => (
      <div class="borderOne">
        <echarts className={className} width={width} height={height} options={option}></echarts>
      </div>
    );
  },
});
export default ChartLine;
