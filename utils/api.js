import request from './http'; // 应该是将http整体导入，用request命名

// 抽取出公共部分链接
export const baseUrl = "https://api.sunofbeach.net/shop/";
// 成功获取api数据的常量标记
const SUCCESS_CODE = 10000;

export default {
  SUCCESS_CODE,
  // 获取类别的方法
  getCategories(){
    return request.requestGet(baseUrl +"discovery/categories");
  },
  // 获取分类内容
  getCategoriesContent(materialId, page){
    return request.requestGet(baseUrl + "discovery/" + materialId + "/" + page)
  },
  // 获取首页菜单栏菜单项方法
  getRecommendCategories(){
    return request.requestGet(baseUrl + "recommend/categories")
  },
  // 获取首页菜单类内容方法
  getRecommendContent(categoryId){
    return request.requestGet(baseUrl + "recommend/" + categoryId);
  },
  // 获取首页菜单类内容的代理方法
  getRecommendContentByProxy(categoryId){
    return request.requestGet('/union/' + "recommend/" + categoryId);
  },
}
