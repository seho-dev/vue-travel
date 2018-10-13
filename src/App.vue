<template>
  <div id="app">
    <keep-alive except="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

</style>
