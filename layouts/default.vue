<template>
  <div>
    <!--  顶部 -->
    <div id="header">
      <div  class="center-box clear-fix">
        <div class="header-logo float-left">
          <span>京东内销平台</span>
        </div>
        <div class="header-menu float-left">
          <ul class="float-left">
            <a href="/"><li class="menu-active">券场</li></a>
            <a href="/discovery">
              <li>发现</li>
            </a>
            <li>特惠</li>
          </ul>
        </div>
        <div class="header-search-box float-left">
          <el-input placeholder="搜索商品" size="small"></el-input>
        </div>
        <div class="header-search-btn float-left">
          <el-button type="danger" size="small" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
    </div>
    <Nuxt />
    <!--  底部  -->
    <div id="footer">
      <div class="center-box ">
        <div class="foot-link">
          <ul class="clear-fix">
            <li>联系我们</li>
            <li>人才招聘</li>
            <li>广告投放</li>
            <li>网店加盟</li>
            <li>友情链接</li>
          </ul>
        </div>
        <div class="size-info">
          <p>&COPY; 2021 www.kepiziju.com 苏IPC备 备案号 code by 科皮子菊</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.size-info{
  color: white;
  line-height: 30px;
  text-align: center;
  padding-bottom: 20px;
}
.foot-link li{
  float: left;
  color: white;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.foot-link{
  padding-top: 20px;
  text-align: center;
}
.foot-link ul{
  display: inline-block;
  list-style: none;
}
#footer{
  background: #c9302c;
}
.menu-active{
  background: #0000000a;
}
#header{
  height: 70px;
  background: #fff;
  box-shadow: 0px 5px 10px #d4d4d4;
}
.header-search-box, .header-search-btn{
  line-height: 70px;
}
.header-search-btn .el-button{
  width: 100px;
}
.header-search-btn{
  margin-left: 20px;
}
.header-search-box .el-input{
  width: 300px;
}
.header-search-box{
  margin-left: 20px;
}
.header-menu{
  margin-left: 30px;
}
.header-menu ul{
  list-style: none;
}
.header-menu li:hover{
  background: #0000000a;
}
.header-menu li{
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  float: left;
  line-height: 70px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
}
.float-left{
  float: left;
}
.clear-fix{
  zoom: 1;
  overflow: auto;
}
.header-logo{
  font-size: 24px;
  font-weight: 600;
  color: #c9302c;
  line-height: 70px;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,  *:before,  *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.center-box {
  width: 1140px;
  margin: 0 auto;
}
.float-right{
  float: right;
}
.back-top:hover{
  border: #c9302c 1px solid;
}
.back-top{
  height: 30px;
  width: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  border: #8c8c8c 1px solid;
  color: #8c8c8c;
}
.back-top:hover{
  color: #c9302c;
  border: #c9302c 1px solid;
}
</style>
