<template>
  <div class="out-frame" :id="singleId">
    <frame-header :info="information"></frame-header>
    <!--定义标题边框，并预留内容边框-->
    <div class="model-content">
      <div class="analyse-chart" id="highOpinionChart"></div>
    </div>
  </div>
</template>

<script>
import {convertRadarData,RadarAutoTip} from '../js/tools'
export default {
  name: 'favorCity',
  mounted(){
    const datas =[{cnName:'成都',total:789,allTotal:1000},
      {cnName:'绵阳',total:539,allTotal:600},
      {cnName:'德阳',total:489,allTotal:600},
      {cnName:'广元',total:289,allTotal:500},
      {cnName:'雅安',total:89,allTotal:100}
      ];
      this.drawRadar(datas);
  },
  data () {
    return {
      singleId:'radar'+Math.ceil(Math.random()*10000),
      msg: 'small model',
      information:{
        name:'多维度数据分析'
      }
    }
  },
  methods:{
    drawRadar:function (data) {
      var target = document.getElementById(this.singleId).querySelector('#highOpinionChart');
      var maxRaduis = (((target.offsetWidth<target.offsetHeight)?target.offsetWidth:target.offsetHeight)-80)/2;
      var option= {
        tooltip: {
          show:false
        },
        radar: {
          shape: 'circle',
          splitNumber: 4,
          radius:maxRaduis,
          axisLine: {
            lineStyle: {
              color: '#c6dff1',
              opacity:1
            }
          },
          splitLine: {
            lineStyle: {
              color: '#003366',
              opacity:1
            }
          },
          splitArea:{
            areaStyle:{
              opacity:0
            }
          },
          indicator: [
            { text: '卫生', max:100 },
            { text: '服务', max:120 },
            { text: '饮食',max:100},
            { text: '风景',max:140 },
            { text: '设施',max:100},
            { text: '价格',max:150 },
            { text: '管理',max:100  },
            { text: '交通', max:100}
          ]
        },
        name: {
          formatter:function (val) {
            return val;
          },
          textStyle: {
            color:'#c6dff1',
            fontSize:14
          }
        },

        series: [{
          name: '指数',
          type: 'radar',
          data : [
            {
              value : [40, 70, 50, 70, 42,90,72,90],
              name : '指数',
              itemStyle:{
                normal:{
                  borderColor:'#ff5757',
                  opacity:1,
                  borderWidth:2,
                  borderType:'solid'
                }},
              lineStyle:{
                normal:{
                  color:'#ff5757',
                  type:'solid',
                  width:2
                }},
              areaStyle: {
                normal: {
                  opacity: 0.5,
                  color:'#ff5757'
                }
              }
            }
          ]
        }]
      };
      var myChart = this.$echarts.init(target);
      convertRadarData(data,option);
      myChart.setOption(option);
      this.$echarts.AutoShowTip(myChart,option,3000,{
        hoverEnable:true,
        autoShow:true
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
$bgColor: '#013bba';
$singleColor:'#1f5fd3';
$triangleColor:'#003596';

h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
}

</style>
