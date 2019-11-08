<template>
<b-container fluid class="custcolor">
    <b-row class="custcolor">
        <b-col md="8">

            <b-row style="height:250px; color:white;" class="custcolor">
                <b-col md="3"  >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <h1>{{stockPrice}}</h1>
                        </b-row>
                        <b-row style="height:60%;">
                        <canvas style="height:100%;width:100%;"></canvas>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <h1>{{stockPrice}}</h1>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <h1>{{stockPrice}}</h1>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <h1>{{stockPrice}}</h1>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
            <b-row>
            <apex-chart style="color:white;"  width="1100" height="400" type="line" :options="chartOptions" :series="series"></apex-chart>
            </b-row>
            <b-row>
            </b-row>
        </b-col>
        <b-col md="4">

        </b-col>
    </b-row>
</b-container>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
// Vue.use(VueApexCharts)
// Vue.component('apexchart', VueApexCharts)
// import profit from "../../marker/profit.vue"
// import loss from "../../marker/loss.vue"
// import chart from "../graph/Linear.vue"
colors:['#F44336', '#E91E63', '#9C27B0']
export default {
    data(){
        
        return{
            stockPrice:2500,
            x:60,
            chartOptions: {
                chart: {
                id: 'vuechart-example',
                },
                xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [{
                name: 'Vue Chart',
                data: [30, 40, 45, 50, 49, 60, 70, 81]
            }]
            }
        },
    components:{
        apexChart:VueApexCharts
    }
    // components:{
    //     profitIndicator:profit,
    //     lossIndicator:loss,

    // }
    
}
</script>
<style scoped>
.custcolor{
    background-color: rgb(64, 76, 124);
    height:100%;
    
}
.clr{
    background-color: rgb(26, 34, 66);
    color:white;
    border-radius: 0px 0px 20px 20px;
    
}
.clr:hover{
    background-color: rgba(73, 107, 230, 0.589);
}
h1{
    padding-left:5%;
    padding-top:20px;
}

</style>


