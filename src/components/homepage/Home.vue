<template>
<b-container fluid class="custcolor">
    <b-row class="custcolor">
        <b-col md="8">
            <b-row style="height:250px; color:white;" class="custcolor">
                <b-col md="3"  >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <b-col md-24>
                                <h1>{{stockPrice}}</h1>
                                <h6>total visitors</h6>
                            </b-col>
                        </b-row>
                        <b-row style="height:60%;">
                        <canvas style="height:100%;width:100%;"></canvas>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <b-col md-24>
                                <h1>{{stockPrice}}</h1>
                                <h6>total visitors</h6>
                            </b-col>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;padding-left: 11%;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;padding-left: 11%;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <b-col md-24>
                                <h1>{{stockPrice}}</h1>
                                <h6>total visitors</h6>
                            </b-col>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;padding-left: 11%;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;padding-left: 11%;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
                <b-col md="3" >
                    <b-container class="clr">
                        <b-row style="height:40%">
                            <b-col md-24>
                                <h1>{{stockPrice}}</h1>
                                <h6>total visitors</h6>
                            </b-col>
                        </b-row>
                        <b-row style="height:60%;">
                        <p style="color:red;padding-left: 11%;" v-if="x<0"><i class="fas fa-arrow-down"></i>{{ x}}%</p>
                        <p style="color:green;padding-left: 11%;" v-else><i class="fas fa-arrow-up"></i>{{  x}}%</p>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
            <b-row>
            <b-col md-24>
                <apex-chart style="color:white;"  height="500" type="area" :options="chartOptions" :series="series"></apex-chart>
            </b-col>
            </b-row>
            <b-row data-spy="scroll">
                <show-compt :key="index" v-for="(x,index) in 3"></show-compt>
            </b-row>
        </b-col>
        <b-col md="4">
            <last-div></last-div>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import showcmp from "./com.vue"
import lstd from "./last.vue"
// Vue.use(VueApexCharts)
// Vue.component('apexchart', VueApexCharts)
// import profit from "../../marker/profit.vue"
// import loss from "../../marker/loss.vue"
// import chart from "../graph/Linear.vue"
// colors:['#F44336', '#E91E63', '#9C27B0']
export default {
    data(){
        
        return{
            stockPrice:2500,
            x:60,
            chartOptions: {
                chart: {
                id: 'vuechart-example',
                toolbar: {
                    show: false,
                    tools: {
                        selection: false,
                        reset: true
                    }
                }
                },
                fontFamily: 'Helvetica, Arial, sans-serif',
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        colors:['#7f86c9'],
                    },
                },
                yaxis:{
                    title: {
                        text: 'Earning'
                    },
                    labels: {
                        style: {
                            color: '#7f86c9'
                        }
                    }
                },
                xaxis: {
                    categories: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
                    title: {
                        text: 'Year'
                    },
                    labels: {
                        style: {
                            colors: '#ffffff'
                        }
                    }
                },
                colors:['#7f86c9'],
                // foreColor: '#FFFFFF',
                grid: {
                borderColor: 'black',
                    // row: {
                    // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    // opacity: 0.5
                    // },
                },
                markers: {
                    size: 4
                },
            },

            series: [{
                data: [20000, 42000, 45000, 65000, 49000, 60000, 55000, 81530,100000]
            }]
            }
        },
    components:{
        apexChart:VueApexCharts,
        showCompt:showcmp,
        lastDiv:lstd
    }
    // components:{
    //     profitIndicator:profit,
    //     lossIndicator:loss,

    // }
    
}
</script>
<style scoped>
.custcolor{
    background-color:#343C6B;
    height:100%;
    
}
.clr{
    background-color: 	rgb(47, 54, 97);
    color:white;
    border-radius: 0px 0px 20px 20px;
    
}
.clr:hover{
    background-color: #5A62B3;
}
h1{
    padding-left:5%;
    padding-top:20px;
}
h6{
    padding-left: 7%;
    color: rgb(193, 201, 207);
}

</style>


