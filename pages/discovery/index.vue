<template>
  <div class="center-box clear-fix">
    <div class="discovery-content-box">
      <div class="discovery-left-part float-left">
        <ul>
          <li :class="currentCategoryId===item.id?'discovery-category-active':''" v-for="(item, index) in categoriesList" :key="index" >
            <span v-text="item.title" ></span>
          </li>
        </ul>
      </div>
      <div class="discovery-center-part float-left">
        这是中间
      </div>
      <div class="discovery-right-part float-left">
        这是右边
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../utils/api";
export default {
  name: "index",
  async asyncData(){
    let categoriesResult = await api.getCategories();
    if (categoriesResult.code === api.SUCCESS_CODE) {
      // 拿推荐内容
      let categoriesList = categoriesResult.data;
      let recommendItem = categoriesList[0]; // 第一个数据就是推荐内容
      let currentCategoryId = recommendItem.id;
      let contentResult = await api.getCategoriesContent(currentCategoryId, 1);
      if (contentResult.code === api.SUCCESS_CODE){
        return {
          currentCategoryId,
          categoriesList,
          contentList: contentResult.data
        }
      }
    }
  },
}
</script>

<style scoped>
.discovery-content-box{
  margin-top: 20px;
}
/**  总宽度1140 **/
.discovery-left-part{
  width: 105px;
  background: #FFFFFF;
  margin-right: 10px;
  margin-left: 5px;
  box-shadow: 0 5px 10px #d4d4d4;
}
.discovery-left-part li{
  cursor: pointer;
  text-align: center;
  width: 105px;
  height: 40px;
}
.discovery-left-part li:hover{
  background: #ff4500;
  color: white;
}
.discovery-left-part span{
  line-height: 40px;
}
.discovery-center-part{
  width: 710px;
  height: 1000px;
  margin-right: 10px;
  margin-left: 10px;
}
.discovery-right-part{
  height: 500px;
  width: 280px;
  background: #4d555d;
  margin-left: 10px;
}
.discovery-category-active{
  color: #fff;
  background: #ff4500;
}
</style>

