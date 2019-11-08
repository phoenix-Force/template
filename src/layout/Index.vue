<template>
    <b-container fluid >
        <b-row class="h-100">
            <b-col cols="1" class="d-flex flex-column custcolor">
                <div class="align-self-start align-self-center">
                    <div class="d-flex align-self-center">
                        <b-button class="btn bdr" ><i class="fas fa-braille"></i></b-button>
                    </div>
                </div>
                <div class="align-self-center">
                        <div >
                            <b-button class="btn bdr" style=""><i class="fa fa-home"></i></b-button>
                        </div>
                        <div >
                            <b-button class="btn btn-sm bdr" ><i class="fa fa-compass"></i></b-button>
                        </div>
                        <div >
                            <b-button class="btn bdr" ><i class="fab fa-phoenix-framework"></i></b-button>
                        </div>
                        <div >
                            <b-button class="btn bdr"><i class='fa fa-spider'></i></b-button>
                        </div>
                    
                </div>
                <div class="align-self-end align-self-center"  style="margin-right:10%;">
                    
                        <b-button class="btn bdr"><i class="fas fa-sign-out-alt"></i></b-button> 
                    
                </div>
            </b-col>
            <b-col cols="11">
                <router-view></router-view>
                <!-- <b-link :to="'/home'">Home</b-link> -->
            </b-col>
        </b-row>
    </b-container>
</template>
<script>

export default {








    // #555AB2
    // back-  #2C3B7A
    // hover > #475996
}
</script>
<style scoped>
.custcolor{
    background-color: #2C3B7A;
    height:100%;
    color:white;
}
.bdr{
    height: 60px;
    width: 60px;
    border-style: none; 
    font-size:35px;
    background-color:transparent;
    margin-top:30px;

}
.bdr:hover{
    
    -webkit-box-shadow: 0px 0px 37px 7px rgba(255,255,255,0.72); 
box-shadow: 0px 0px 37px 7px rgba(255,255,255,0.72);
}



</style>