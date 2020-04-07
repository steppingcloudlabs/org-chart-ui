<template>
  <div class="home">
    
    <CoreAppBar></CoreAppBar>
    <core-drawer ></core-drawer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/AppBar"),
    CoreDrawer: () => import("@/components/Drawer")
  }
  
};
</script>
