<template>
    <div class="container" style="padding-left:10%;padding-right:10%;padding-top:10%;border-left: 1px solid black;background-color:#293062;height:100vh;">
        <b-col style=""> 
            <b-row class="d-flex flex-row justify-content-between">
                <div class="align-self-start">
                    <h4 >Views By Browser</h4>
                </div>
                <div class="align-self-end">
                    <b-button class="dd"><i style="margin-left:2%;margin-top:2%;" class="fas fa-ellipsis-v bdr"></i></b-button>
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
                    <b-button class="dd"><i style="margin-left:2%;margin-top:2%;" class="fas fa-ellipsis-v bdr"></i></b-button>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" >
                <div class="mm" style="margin-top:15px;;margin-left:10px;">
                    <h6>Online Visitors</h6>
                </div>
                <div class="mm">


                    <!-- <no-name></no-name> -->

                </div>
                <div class="mm">
                <h6>Total</h6>
                    <h4>8125</h4>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" >
                <div class="mm" style="margin-top:15px;;margin-left:10px;">
                    <h6>New Visitors</h6>
                </div>
                <div class="mm">





                </div>
                <div class="mm">
                <h6>Total</h6>
                    <h4>7694</h4>
                </div>
            </b-row>
            <b-row class="lstsh d-flex flex-row justify-content-between" style="padding-top:30px;" >
                <div class="mm">
                    <h6>Avarage revenue</h6>
                </div>
                <div class="mm">
                    <h3 style="font-weight:bold;">{{reveneu}}<span style="font-size: 15px;font-weight: normal;margin-left: 10px;padding-bottom: 2px;color: azure;background-color: rgb(107, 117, 203);margin-right: 10%;">{{x}}%</span></h3>
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
            reveneu:65574,
            x:30,
            series: [{
                data: [80, 50, 30, 40, 100, 20],
            }],
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
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    colors:['#ffffff'],
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
    padding:5px;
    height: 120px;
    margin-top:5px;
    background-color: #333c77;
    margin-top:10%;
}
.dd{
    height: 32px;
    width: 10px;
    padding-left: 6px;
    padding-top: 4px;
    background-color: #363e71;
    border-radius: 5px;
    border-style: none;
}

</style>