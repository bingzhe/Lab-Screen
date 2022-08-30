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
        // {
        //   type: 'category',
        //   data: ['PCO2', 'N2', 'Ar', 'N2', 'NH3', 'Ar', 'Ar MIX', 'PAr', 'Ar'],
        //   axisLine: {
        //     lineStyle: {
        //       color: '#a5ccf2',
        //     },
        //   },
        // },
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#a5ccf2',
            },
          },
        },
      ],
      yAxis: [
        // {
        //   type: 'value',
        //   axisLine: {
        //     lineStyle: {
        //       color: '#a5ccf2',
        //     },
        //   },
        // },
        {
          type: 'category',
          data: [
            '3445 PCO2',
            '3440/3445 N2',
            '3440/3445 Ar',
            '3110/3113 N2',
            '3440 NH3',
            '3110/3118/3113 Ar',
            '3113 Ar MIX',
            '3113 PAr',
            '3113 Ar',
          ],
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
          data: [210, 180, 40, 20, 100, 200, 180, 190, 100, 250],
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
