<template>
  <div>
    <!-- 首页轮播图 -->
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in banners" :key="index">
          <img :src="item.imageUrl" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 推荐歌单 -->
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in lists" :key="index">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{item.name}}</span>
            </div>
            <img :src="item.picUrl" alt />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{item.copywriter}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      banners: [],
      lists: []
    };
  },
  created() {
    // 轮播图接口
    axios({
      url: "https://autumnfish.cn/banner",
      methods: "get"
    })
      .then(res => {
        this.banners = res.data.banners;
      })
      .catch(err => {
        alert("轮播图获取出错");
      });

    // 推荐歌单接口
    axios({
      url: "https://autumnfish.cn/personalized",
      methods: "get",
      params: {
        // 获取的数据量
        limit: 10
      }
    })
      .then(res => {
        console.log(res);
        this.lists = res.data.result;
      })
      .catch(err => {
        alert("推荐歌单获取出错");
      });
  }
};
</script>
<style lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 575px;
  height: 200px;
}
.recommend {
  width: x;
  .items {
    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>