<template>
  <div class="booksort-right">
    <div class="sort">
      <h4>儿童文学</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-1.jpg" />
          <p>中国儿童文学</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-2.jpg" />
          <p>外国儿童文学</p>
        </router-link>
       
      </ul>
    </div>
    <div class="literature">
      <h4>动漫绘本</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-4.jpg" />
          <p>儿童绘本</p>
        </router-link>
         <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-3.jpg" />
          <p>童话寓言</p>
        </router-link>
      </ul>
    </div>

    <div class="literature">
      <h4>启蒙益智</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-5.jpg" />
          <p>益智游戏</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-8.jpg" />
          <p>书法绘画</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-9.jpg" />
          <p>艺术培养</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-6.jpg" />
          <p>识字说话</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-4.jpg" />
          <p>科普百科</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/chilren-2.jpg" />
          <p>低幼读物</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.booksort {
  font-size: 12px;
  input {
    width: 103%;
    height: 30px;
    padding: 3px;
    border: 0px;
    background-color: white;
    margin-bottom: 0px;
  }
  ul {
    padding-left: 0px;
    margin-bottom: 16px;
    a {
      display: inline-block !important;
      padding: 20px 16px !important;
    }
    li {
      list-style-type: none;
    }
  }
}
.booksort-left {
  display: inline-block;
  position: fixed;
  top: 45px;
  bottom: 0;
  overflow: scroll;
  left: 0;
  background-color: rgb(247, 247, 247);
  ul {
    margin: 1px 2px 2px 2px;
    li {
      padding: 20px 16px;
    }
  }
}
.booksort-right {
  display: inline-block;
  position: fixed;
  top: 54px;
  bottom: 0;
  overflow: scroll;
  right: 0;
  width: 72%;
   margin-bottom: 30px;
  p {
    width: 56px;
    font-size: 14px;
    margin: 9px 0 0 5px;
  }
  h4 {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }
  img {
    width: 143%;
    height: 40%;
  }
  ul {
    .booksuper {
      list-style-type: none;
      display: inline-block;
      width: 27%;
      text-align: center;
    }
  }
}
.search {
  background-color: rgb(247, 247, 247);
  padding: 2% 14% 2% 7%;
  position: fixed;
  top: 0;
  left: 2px;
  width: 100%;
}
.router-link-active {
  padding: 20px 16px !important;
  color: #b50d0d !important;
}
</style>