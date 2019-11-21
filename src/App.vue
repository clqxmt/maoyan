<template>
  <div id="app">
      <keep-alive :exclude="/(detail)/">
        <router-view></router-view>
      </keep-alive>
       <TabBar v-if="$route.meta.flag"/>
  </div>
 
</template>
<script>
import TabBar from "@common/components"
export default {
  
}
</script>
<style >
.page{
  position: absolute;
  left:0;
  top:0;
  right: 0;
  bottom: 0;
  padding-bottom: 0.4167rem;
}
</style>
