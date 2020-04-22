<template>
  <div id="index">
    <!-- 左侧导航 -->
    <div class="leftNav">
      <ul>
        <li>
          <router-link to="/discovery">发现音乐</router-link>
        </li>
        <li>
          <router-link to="/playlists">推荐歌单</router-link>
        </li>
        <li>
          <router-link to="/songs">最新音乐</router-link>
        </li>
        <li>
          <router-link to="/mvs">最新mv</router-link>
        </li>
      </ul>
    </div>
    <!-- 右侧视图 -->
    <div class="rightView">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#index {
  display: flex;
  height: 830px;
  .leftNav {
    width: 200px;
    background-color: #ededed;
    li {
      text-align: center;
      margin: 10px;
      a {
        text-decoration: none;
      }
    }
  }
  // 点击高亮
  .router-link-active {
    background: orange;
    color: white;
  }
  .rightView {
    width: 1150px;
  }
}
</style>