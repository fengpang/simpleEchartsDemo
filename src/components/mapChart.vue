<template>
  <div class="out-frame" :id="singleId">
    <frame-header :info="information"></frame-header>
    <!--定义标题边框，并预留内容边框-->
    <div class="model-content">
      <div class="analyse-chart" id="mapChart"></div>
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
          name: '资源数据分布',
          link: 'http:localhost:8080',
          dataSource: 'smallFlag'
        }
      }
    },
    methods: {
      initChart: function (data) {
        const target = document.getElementById(this.singleId).querySelector('#mapChart'),
          option = {
            tooltip: {
              show: false
            },
            geo: {
              map: '四川',
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#d3edff'
                  },
                  position: ['50%', '50%'],
                  align: 'center',
                  fontSize: 14,
                  fontWeight: 'bold'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    color: '#d3edff'
                  }
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#45aaff',
                  borderWidth: 1,
                  borderColor: '#122e41'
                },
                emphasis: {
                  show: false,
                  areaColor: '#0083ef'
                }
              },
              roam: false,
              center: [102.9526, 29.8617],
              zoom: 1,
              /* 设置特定区域的样式 */
              regions: []
            },
            series: [{
              type: 'map',
              geoIndex: 0,
              data: []
            }]
        },
        myChart = this.$echarts.init(target);
        fetch('http://filealiyun.geeker.com.cn/ued/map/regionJson/510000.json', {
          method:'get',
          mode:'cors'
        }).then((response)=>{
          return response.json();
        }).then((data)=>{
          console.log(data);
          this.$echarts.registerMap('四川', data);
          myChart.setOption(option);
        });

       // this.$echarts.AutoShowTip(myChart, option, 3000);
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
  .out-frame{
    position: relative;
    width:920px;
    height: 640px;
  }
  .analyse-chart{
    height:590px;
  }
</style>
