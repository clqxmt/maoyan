<template>
    <div class="messagebox-container">
        <div class="messagebox-title">
            <span>{{title}}</span>
        </div>
        <div class="messagebox-content">{{content}}</div>
        <v-touch tag="div" @tap="handleOk()" class="bottom">确定</v-touch>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="scss">
.messagebox-container{
    width:2.1333rem;
    height:1.325rem;
    box-shadow:1px 1px 50px rgba(0,0,0,0.3);
    border-radius:2px;
    background:#fff;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index:10;
    color:#333;
    font-size:0.1333rem;
    display:flex;
    flex-direction: column;
}
.messagebox-title{
    width:100%;
    height:0.300rem;
    background:#f8f8f8;
    padding:0 0.0167rem;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
   
    span{
        color: #333;
    }
}
.messagebox-content{
    padding:4px 2px;
    text-align:center;
    box-sizing: border-box;
    font-size:0.15rem;
    flex:1;
    display:flex;
    align-items:center;
    justify-content: center;
    color:#999;
}
.bottom{
    height:0.3rem;
    width:100%;
    background:#fff;
    text-align:center;
    line-height:0.3rem;
    /* position:absolute; */
    /* bottom:10px; */
    border-top:1px solid #ddd;
    /* color:#42bd56; */
    color:#26a2ff;
    font-size:0.15rem;
}
</style>