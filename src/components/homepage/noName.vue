<template>
    <appex-chart style="color:white;"  width="1100" height="500" type="radialBar" :options="chartOptions" :series="series"></appex-chart>
    
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    components:{
        appexChart:VueApexCharts
    },
    data(){
        return{
            series: [70],
            chartOptions: {
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '80%',
                    }
                },
                
                
            },
            labels: ['Cricket']
            },
            fill: {
                type: 'gradient',
                gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        }
    }
}
}
</script>
<style scoped>
.mm{
    height:100%;
}
</style>