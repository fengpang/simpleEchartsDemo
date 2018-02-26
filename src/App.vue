<template>
  <div id="app" class="frame-block">
    <favor-city></favor-city>
    <map-chart></map-chart>
    <favor-scenic></favor-scenic>
    <high-opinion></high-opinion>
    <pie-distribution></pie-distribution>
  </div>

</template>

<script>
import favorCity from './components/favorCity.vue'
import favorScenic from './components/favorScenic.vue'
import highOpinion from './components/highOpinion.vue'
import pieDistribution from './components/pieDistribution.vue'
import mapChart from './components/mapChart.vue'
export default {
  name: 'app',
  components:{
    'favor-city':favorCity,
    'favor-scenic':favorScenic,
    'high-opinion':highOpinion,
    'pie-distribution':pieDistribution,
    'map-chart':mapChart
  },
  mounted:function () {
  }
}
</script>

<style lang="scss" rel="stylesheet" type="text/scss">
body{
  background: rgba(1,18,63,.9) url("./images/bg.png") no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.frame-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.out-frame{
  position: relative;
  width:460px;
  height: 320px;
  margin:10px 0 0 10px;
  border: 1px solid rgba(1,59,186,.5);
  background: rgba(0,90,194,.05);
@mixin little-single{
  position: absolute;
  display: block;
  width:9px;
  height:9px;
  border:1px solid #1f5fd3;
}
&::before {
   content:'';
 @include little-single;
   bottom:-1px;
   right:-1px;
   border-top: none;
   border-left: none;
 }
&::after {
   content:'';
   bottom:-1px;
   left:-1px;
 @include little-single;
   border-top: none;
   border-right: none;
 }
}
.analyse-chart{
  width:100%;
  height:270px;
  margin-top: 8px;
}
</style>
