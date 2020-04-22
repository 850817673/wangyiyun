<template>
  <div>
    <top></top>
    <index></index>
  </div>
</template>
<script>
import top from "./views/top";
import index from "./views/index";
export default {
  components: {
    top,
    index
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
