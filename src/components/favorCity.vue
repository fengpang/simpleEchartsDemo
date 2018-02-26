<template>
  <div class="out-frame" :id="singleId">
    <frame-header :info="information"></frame-header>
    <!--定义标题边框，并预留内容边框-->
    <div class="model-content">
      <div class="analyse-chart" id="resourceCountChart"></div>
    </div>
  </div>
</template>

<script>
  import {addSeparator,AutoShowTip} from '../js/tools'

  export default {
    name: 'favorCity',
    mounted() {
      this.initChart();
    },
    data() {
      return {
        singleId: 'radar' + Math.ceil(Math.random() * 10000),
        msg: 'small model',
        information: {
          name: '资源数据分析',
          link: 'http:localhost:8080'
        }
      }
    },
    methods: {
      initChart: function (data) {
        let target = document.getElementById(this.singleId).querySelector('#resourceCountChart'),
          option = {
            tooltip: {
              trigger: 'axis',
              backgroundColor: 'rgba(0,0,0,.8)',
              textStyle: {
                color: '#b4d1e6'
              },
              formatter: function (val) {
                return val[0].name + ':' + addSeparator(val[0].data) + '个'
              }
            },
            grid: {
              width: '86%',
              top: '6%',
              left: '6%',
              right: '8%',
              bottom: '6%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              /*
                  设置坐标轴刻度的显示，输入min，max，按照splitNumber=3,按官方文档说，坐标轴的分割段数只是个预估值，
                  最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。只有计算interval，才能制定刻度间隔
              */
              /*          min:dataMin,
                        max:dataMax,
                        //splitNumber:(dataMax-dataMin)/3,
                        interval:(dataMax-dataMin)/3,*/
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dotted',
                  color: '#1a2e60'
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  fontSize: 14,
                  color: '#c6dff1'
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'category',
              data: ['其他旅游餐饮', '特色风味与小吃', '旅游餐饮', '旅游快餐', '旅游正餐'],
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(0,29,88,0.5)", "rgba(0,0,0,0)"]
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#c6dff1',
                  fontSize: 14
                },
                formatter: function (val) {
                  return val.replace(/(\S{4})(?=\S{2,})/g, '$1' + '\n');
                }
              },
              axisLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#1e3876'
                }
              }
            },
            series:[
              {
                name: '',
                type: 'bar',
                /*这个值根据高度进行调整*/
                barWidth: '35.7%',
                itemStyle: {
                  normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: 3,
                    label: {
                      show: true,//是否展示
                      textStyle: {
                        fontWeight: 'bolder',
                        fontSize: '12',
                        fontFamily: '微软雅黑',
                      }
                    },
                    color: '#3d98ff'
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                      color: '#c6dff1',
                      fontSize: 14
                    },
                    formatter: function (val) {
                      return addSeparator(val.value);
                    }

                  }
                },
                data: [3254, 3477, 4300, 4582, 4798]
              }]
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
