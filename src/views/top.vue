<template>
  <div id="top">
    <div class="mainView">我是头部组件</div>
    <div class="search">
      <input type="text" placeholder="请输入内容" v-model="inputValue" @keyup.enter="toSearch" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    toSearch() {
      // 如果是空的就提示
      if (this.inputValue == "") {
        alert("请输入内容");
      } else {
        // 否则就跳转
        // this.$router.push("/result?query = " + this.inputValue); //携带数据跳转
        this.$router.push(`/result?q=${this.inputValue}`);
      }
    }
  }
};
</script>
<style lang="less">
#top {
  display: flex;
  width: 100vw;
  height: 80px;
  background: rgb(245, 242, 242);
  .mainView {
    flex: 3;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
  }
  .search {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-size: 20px;
      height: 50px;
      padding-left: 20px;
      border-radius: 30px;
      border: 1px solid #222222;
      // border: none; //去除边框
      outline: none; //去除点击时的边框
      background: transparent; //设置 input 透明度
    }
  }
}
</style>