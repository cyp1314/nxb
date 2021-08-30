<template>
  <div class="container">
    <div class="center-box">
      <div id="recommend-category-box">
        <ul class="clear-fix" >
          <li :class="item.favorites_id!==currentFavoriteId?'float-left':'float-left recommend-menu-active'" v-for="(item, index) in categories" :key="index"
              @click="onCategoryItemClick(item)">
            {{item.favorites_title}}
          </li>
          <!--回到顶部按钮-->
          <li class="float-right ">
            <a href="#top">
              <span class="el-icon-upload2 back-top"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="recommend-content-list-box" v-loading="loading">
        <div class="recommend-content-title">
          <span v-html="currentCategory"></span>
        </div>
        <div class="recommend-content-list clear-fix">
          <div class="recommend-content-item float-left" v-for="(item, index) in content" :key="index">
            <div class="recommend-item-cover">
              <img :src="item.pict_url + '_240x240xzq90.jpg_.webp'" alt="">
            </div>
            <div class="recommend-item-title">
              <a v-text="item.title" :href="item.coupon_click_url!==null?item.coupon_click_url: item.click_url" target="_blank"></a>
            </div>
            <div class="recommend-item-info">
              <a v-if="item.coupon_click_url!==null" class="buy_btn" :href="item.coupon_click_url"
                 target="_blank">领券购买</a>
              <span class="recommend-original-price" v-text="item.coupon_click_url===null?'晚了，无优惠券了':'原价：'+item.zk_final_price"></span>
            </div>
            <span class="recommend-coupon-info" v-if="item.coupon_info!==''" v-text="item.coupon_info">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../utils/api";

export default {
  data(){
    return {loading:false}
  },
  // vue周期函数（页面出现之前）
  mounted() {
    this.onScroll(); // 中间刷新也跳上去
    let listBox = document.getElementById("recommend-content-list-box");
    if (listBox){
      listBox.style.minHeight = document.documentElement.clientHeight + 'px';
    }
    window.addEventListener('scroll', this.onScroll)
  },
  methods:{
    onCategoryItemClick(item){
      // document.documentElement.scrollTop = 0;
      this.currentFavoriteId = item.favorites_id;
      this.currentCategory = item.favorites_title.split("").join("<em>/</em>");
      // 加载内容
      this.loadContentByCategory(item.favorites_id);
    },
    loadContentByCategory(favoriteId){
      this.content.length = 0;
      this.content = [];
      api.getRecommendContentByProxy(favoriteId).then(result =>{
        if(result.code === 10000){
          this.content = result.data.tbk_dg_optimus_material_response.result_list.map_data;
        }
      })
    },
    onScroll(){
      let menuBox = document.getElementById('recommend-category-box');
      if (menuBox){
        let dy = document.documentElement.scrollTop;  // 获取滑动间距
        if (dy < 90){
          menuBox.style.top = (90 - dy) + 'px';
        }else {
          menuBox.style.top ='0px';
        }
      }
    },
  },
  // vue生命周期函数
  async asyncData(){
    console.log("test load data..");
    let categoryResult = await api.getRecommendCategories();
    // 数据返回状态码为10000表示获取数据成功
    if (categoryResult.code === 10000){
      // 获取分类商品列表
      let currentId = categoryResult.data[0].favorites_id;
      let contentResult = await api.getRecommendContent(currentId);
      let titleArray = categoryResult.data[0].favorites_title.split('');
      if (contentResult.code === 10000){
        return {categories: categoryResult.data,
          content: contentResult.data.tbk_dg_optimus_material_response.result_list.map_data,
          currentCategory:titleArray.join('<em>/</em>'),
          currentFavoriteId:currentId};
      }

    }else{
      // TODO:错误处理
    }
  }
}
</script>

<style>
.recommend-content-list-box{
  box-shadow: 0 5px 10px #d4d4d4;
}
.recommend-content-title em{
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 400;
}
.recommend-content-title span{
  font-size: 20px;
  font-weight: 600;
  color: #4d555d;
  font-style: normal;
  margin: 0 3px;
}
.recommend-content-title{
  text-align: center;
  margin-bottom: 30px;
}
.recommend-coupon-info{
  background: #c9302c;
  color: #FFFFFF;
  position: absolute;
  right: 12px;
  top: 20px;
  padding: 5px 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.buy_btn{
  text-decoration: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #FFF;
  background-color: #F56C6C;
  border-color: #F56C6C;
}
.recommend-original-price{
  margin-left: 10px;
  color: #ebb563;
  font-weight: 600;
}
.recommend-item-info{
  margin-top: 10px;
}
.recommend-item-title a{
  text-decoration: none;
  color: #47494e;
  margin-top: 10px;
  margin-bottom: 10px;
  /*控制显示行数，超出两行用省略号显示*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  overflow: hidden;
}
.recommend-content-item{
  position: relative;
  width: 265px;
  height: 370px;
  box-shadow: 0 5px 10px #d4d4d4;
  padding: 10px 10px;
  margin: 10px;
  border-radius: 5px;
}
.recommend-item-cover img{
  width: 243px;
  height: 243px;
}
.recommend-menu-active{
  border-bottom: #c9302c 2px solid;
  color: #c9302c!important;
}
#recommend-category-box li{
  font-size: 16px;
  margin-left: 20px;
  margin-right: 20px;
  color: #8c8c8c;
  cursor: pointer;
}
#recommend-category-box{
  height: 60px;
  line-height: 58px;
  margin-top: 30px;
  background: white;
  box-shadow: 0 5px 10px #d4d4d4;
  margin-bottom: 20px;
}
#recommend-category-box ul{
  list-style: none;
}
#recommend-content-list-box{
  margin-top: 100px;
  box-shadow: 0 5px 10px #d4d4d4;
}
#recommend-category-box{
  height: 60px;
  line-height: 58px;
  position: fixed;
  z-index: 1000;
  top: 90px;
  width: 1140px;
  background: white;
  box-shadow: 0 5px 10px #d4d4d4;
}
</style>
