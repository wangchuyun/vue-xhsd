<template>
  <div class="booksort-right">
    <!-- <p>333</p> -->
    <div class="sort">
      <h4>历史</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-1.jpg" />
          <p>世界史</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-2.jpg" />
          <p>中国史</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-3.jpg" />
          <p>考古文物</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-4.jpg" />
          <p>史学理论</p>
        </router-link>
      </ul>
    </div>

    <div class="literature">
      <h4>哲学宗教</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-15.jpg" />
          <p>中国哲学</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-12.jpg" />
          <p>西方哲学</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-13.jpg" />
          <p>哲学总论</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-4.jpg" />
          <p>马列著作</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-5.jpg" />
          <p>逻辑学</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-6.jpg" />
          <p>宗教</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-2.jpg" />
          <p>伦理学</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-1.jpg" />
          <p>美学</p>
        </router-link>
      </ul>
    </div>

    <div class="literature">
      <h4>心理</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-7.jpg" />
          <p>心理学百科</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-8.jpg" />
          <p>变态/病态心理学</p>
        </router-link>
      </ul>
    </div>

    <div class="literature">
      <h4>政治军事</h4>
      <ul>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-1.jpg" />
          <p>党政读物</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-2.jpg" />
          <p>中国政治</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-4.jpg" />
          <p>世界政治</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-3.jpg" />
          <p>中国军事</p>
        </router-link>
        <router-link class="booksuper" to="/BookSuper">
          <img src="../../images/human-7.jpg" />
          <p>军事理论</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.booksort-right {
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