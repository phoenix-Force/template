<template>
    <b-col  cols="11" sm="11" lg="5" xl="3" md="11" class="comcon">
        <b-row style="height:7vh;padding-top:5%;">
                <b-col md-2>
                    <b-img src="https://picsum.photos/300/150/?image=41" class="logoImage" alt="Logo"></b-img>
                </b-col>
                <b-col md-5 style="padding-left:0px;">
                    <h6>Top PlatForm</h6>
                    <h5>Codelogicx</h5>
                </b-col>
                <b-col md-1 >
                    <i style="margin-left:2%;margin-top:2%;" class="fas fa-ellipsis-v bdr"></i>
                </b-col>
        </b-row>
        <b-row  style="height:100px;padding-top:30px; padding-left:30px;">
            <h2>{{x}} <span style="font-size:15px;color:rgb(193, 201, 207);">/{{title}}</span></h2>
        </b-row>
    </b-col>
</template>
<script>
export default {
    data(){
        return {
            x:4000,
            title:"codelogicx"
        }
    }
}
</script>
<style scoped>
.logoImage{
    margin-left:2px;
    height:50px;
    width:50px;

}
h5{
    color:white;
    font-weight: bold;
}
h6{
    color:rgb(193, 201, 207);
}
.comcon{
    border-radius: 20px;
    background-color:#292D5A;
    
    margin:2%;
    /* float:left; */
    /* margin-left:px; */
    /* #343D74 */
    /* back #32396D */
}
.bdr{
    border-style: none; 
    font-size:20px;
    background-color:transparent;

}
.bdr:hover{
    
    -webkit-box-shadow: 0px 0px 37px 7px rgba(255,255,255,0.72); 
    box-shadow: 0px 0px 37px 7px rgba(255,255,255,0.72);
}
.comcon:hover{
    background-color: #5A62B3;
}
</style>
