<template>
  <h2>从源码里 initState函数里可得知,初始化时执行顺序:</h2>
  <div>
    beforeCreate -> inject -> Props -> Methods -> Data -> Computed -> Watch -> provide-> created
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>