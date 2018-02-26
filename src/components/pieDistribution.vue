<template>
  <div class="out-frame" :id="singleId">
    <frame-header :info="information"></frame-header>
    <!--定义标题边框，并预留内容边框-->
    <div class="model-content">
      <div class="analyse-chart" id="trendAnalyseChart"></div>
    </div>
  </div>
</template>

<script>
  import {addSeparator} from '../js/tools';
  import {themeColor} from '../theme/base';
  export default {
    name: 'favorScenic',
    mounted() {
      const datas = [{name: "成都市", value: 800},
        {name: "绵阳市", value:600},
        {name: "德阳市", value:500},
        {name: "广元市", value: 300}];
      this.initChart(datas);
    },
    data() {
      return {
        singleId: 'radar' + Math.ceil(Math.random() * 10000),
        msg: 'small model',
        information: {
          name: '资源数据分布占比',
          link: 'http:localhost:8080',
          dataSource: 'smallFlag'
        }
      }
    },
    methods: {
      initChart: function (data) {
        const target = document.getElementById(this.singleId).querySelector('#trendAnalyseChart'),
          option = {
            tooltip: {
              trigger: 'item',
              backgroundColor: 'rgba(0,0,0,0.6)',
              formatter: function (param) {
                var res = '';
                if (param) {
                  res += '<p style="padding: 3px 0"> ' + param.data.name + ': <span style="color:#ffbf00;font-weight: bold;font-size:14px;" >' + param.value + '万人次</span><span style="color:#ffbf00;font-weight: bold;font-size:14px;" >(' + param.percent + '%)</span></p>';
                }
                return res;
              },
              position: function (p) {
                var x = p[0] + p[0] * 0.2,
                  y = p[1];
                return [x, y];
              }
            },
            legend: {
              show: false,
              orient: 'horizontal',
              bottom: 10,
              left: '10%',
              width: 250,
              align: 'left',
              data: data.map((t)=>{return t.name}),
              itemWidth: 12,
              itemHeight: 8,
              textStyle: {
                color: '#a9c7dc'
              }
            },
            series: [
              {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '58%'],
                center: ['50%', '50%'],
                color: ['#8c64ff', '#00cab5', '#0e8cf6', '#00be55', '#f0dd06', '#00a2ff'],
                label: {
                  normal: {
                    show: false
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: data
              }
            ]
          },
        myChart = this.$echarts.init(target);
        myChart.setOption(option);
        this.$echarts.AutoShowTip(myChart, option, 3000);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
  $bgColor: '#013bba';
  $singleColor: '#1f5fd3';
  $triangleColor: '#003596';

  h1, h2 {
    font-weight: normal;
  }

  ul, li {
    list-style-type: none;
    padding: 0;
  }

</style>
