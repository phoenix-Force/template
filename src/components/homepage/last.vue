<template>
    <div class="container" style="padding-left:10%;padding-right:10%;padding-top:10%;border-left: 1px solid black;background-color:#293062;height:100vh;">
        <b-col style=""> 
            <b-row class="d-flex flex-row justify-content-between">
                <div class="align-self-start">
                    <h4 >Views By Browser</h4>
                </div>
                <div class="align-self-end">
                    <i style="margin-left:2%;margin-top:2%;" class="fas fa-ellipsis-v bdr"></i>
                </div>
            </b-row>
            <b-row>
                <apex-chart type=radar style="background-color:#293062;" height=350 :options="chartOptions" :series="series" />
            </b-row>
            <b-row class="d-flex flex-row justify-content-between">
                <div class="align-self-start">
                    <h4 >Views By Browser</h4>
                </div>
                <div class="align-self-end">
                    <i style="margin-left:2%;margin-top:2%;" class="fas fa-ellipsis-v bdr"></i>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" >
                <div class="mm" style="margin-top:10px;;margin-left:10px;">
                    <h6>Online Visitors</h6>
                </div>
                <div class="mm">
                    
                </div>
                <div class="mm">
                <h6>nvsj</h6>
                    <h4>6554</h4>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" >
                <div class="mm" style="margin-top:10px;;margin-left:10px;">
                    <h6>Online Visitors</h6>
                </div>
                <div class="mm">
                    
                </div>
                <div class="mm">
                <h6>nvsj</h6>
                    <h4>6554</h4>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" >
                <div class="mm" style="margin-top:10px;;margin-left:10px;">
                    <h6>Online Visitors</h6>
                </div>
                <div class="mm">
                    <!-- <no-name></no-name> -->
                </div>
                <div class="mm">
                <h6>Total</h6>
                    <h4>6554</h4>
                </div>
            </b-row>
        </b-col>

        
    </div>
    
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import noname from "./noName.vue"
export default {
    components:{
        apexChart:VueApexCharts,
        noName:noname
    },
    data(){
        return{
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            chartOptions: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    title: {
                        text: 'Daily basis'
                    },
                    colors:['#7f86c9'],
                    toolbar: {
                        show: false,
                    }
                },
        
        }
        
    }
    
}
</script>
<style scoped>
h4{
    font-weight:bold;
    font-size: 20px;
}
.lstsh{
    border-radius: 20px;
    padding:10px;
    height: 100px;
    margin-top:20px;
    background-color: #333c77;
    margin-top:10%;
}

</style>