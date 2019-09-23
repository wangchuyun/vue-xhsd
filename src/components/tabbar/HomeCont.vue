<template>
  <div class="wrapper">
        <mt-header class="sdapp" fixed title="书袋App"></mt-header>

    <swiper :options="swiperOption">
      <!-- //这既是图片轮播 -->
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgurl" />
      </swiper-slide>
      <div class="swiper-pagination weiz" slot="pagination"></div>
      <!-- // 上面div是指示器不需要可以删除，要其他样式例如前进后退按钮切换可以自己修改，官方文档都有 -->
    </swiper>

    <!-- 栅栏部分 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/11.png" />
          <div class="mui-media-body">排行榜</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/22.png" />
          <div class="mui-media-body">电子书</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/33.png" />
          <div class="mui-media-body">优惠券</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/44.png" />
          <div class="mui-media-body">新华优选</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/55.png" />
          <div class="mui-media-body">新用户</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/66.png" />
          <div class="mui-media-body">新华定制</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/77.png" />
          <div class="mui-media-body">精准扶贫</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/88.png" />
          <div class="mui-media-body">新华教育</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/99.png" />
          <div class="mui-media-body">体育电竞</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-2 mui-col-sm-2">
        <a href="#">
          <img src="../../images/10.png" />
          <div class="mui-media-body">儿童乐园</div>
        </a>
      </li>
    </ul>

    <!-- 四块图片 -->
    <div class="bglist">
      <span>
        <img src="../../images/bg-2.jpg" />
      </span>
      <span>
        <img src="../../images/bg-3.jpg" />
      </span>
      <span>
        <img src="../../images/bg-1.jpg" />
      </span>
      <span>
        <img src="../../images/bg-4.jpg" />
      </span>
    </div>

    <!-- 党政军选 -->
    <div class="horizontallist">
      <h4>党政精选<a href>更多>></a></h4>
      <ul>
        <li>
          <img src="../../images/dz-1.jpg" />
          <p>第五批全国干部学习培训教材（套装共14册）</p>
          <span>￥490.00</span>
        </li>
        <li>
          <img src="../../images/dz-2.png" />
          <p>贯彻落实习近平新时代中国特色社会主义思想在改革发展稳定中攻坚克难案例（全7册）</p>
          <span>￥380.00</span>
        </li>
        <li>
          <img src="../../images/dz-3.jpg" />
          <p>习近平关于“不忘初心、牢记使命”论述摘编（小字本）</p>
          <span>￥150.00</span>
        </li>
        <li>
          <img src="../../images/dz-4.jpg" />
          <p>习近平关于“三农”工作论述摘编（大字本）</p>
          <span>￥13.00</span>
        </li>
        <li>
          <img src="../../images/dz-5.jpg" />
          <p>新中国发展面对面——理论热点面对面2019</p>
          <span>￥49.00</span>
        </li>
        <li>
          <img src="../../images/dz-6.jpg" />
          <p>初心和使命(图解版)</p>
          <span>￥15.00</span>
        </li>
      </ul>
    </div>
    <!-- 新书上架 -->
   <div class="horizontallist">
      <h4>新书上架<a href>更多>></a></h4>
      <ul>
        <li>
          <img src="../../images/xs-1.jpg" />
          <p>朱一龙首部个人写真集《DEPART出发》</p>
          <span>￥142.00</span>
        </li>
        <li>
          <img src="../../images/xs-2.jpg" />
          <p>故宫日历2020年</p>
          <span>￥76.00</span>
        </li>
        <li>
          <img src="../../images/xs-3.png" />
          <p>拿得起放不下的中国史</p>
          <span>￥56.00</span>
        </li>
        <li>
          <img src="../../images/xs-4.png" />
          <p>金秘书为何那样</p>
          <span>￥79.90</span>
        </li>
        <li>
          <img src="../../images/xs-5.png" />
          <p>魔术师</p>
          <span>￥49.80</span>
        </li>
        <li>
          <img src="../../images/xs-6.png" />
          <p>军娃</p>
          <span>￥48.00</span>
        </li>
      </ul>
    </div>
    <!-- 影视原著 -->
    <div class="horizontallist">
      <h4>影视原著<a href>更多>></a></h4>
      <ul>
        <li>
          <img src="../../images/ys-1.jpg" />
          <p>朱一龙首部个人写真集《DEPART出发》</p>
          <span>￥142.00</span>
        </li>
        <li>
          <img src="../../images/ys-2.jpg" />
          <p>故宫日历2020年</p>
          <span>￥76.00</span>
        </li>
        <li>
          <img src="../../images/ys-3.jpg" />
          <p>拿得起放不下的中国史</p>
          <span>￥56.00</span>
        </li>
        <li>
          <img src="../../images/ys-4.jpg" />
          <p>金秘书为何那样</p>
          <span>￥79.90</span>
        </li>
        <li>
          <img src="../../images/ys-5.jpg" />
          <p>魔术师</p>
          <span>￥49.80</span>
        </li>
        <li>
          <img src="../../images/ys-6.jpg" />
          <p>军娃</p>
          <span>￥48.00</span>
        </li>
      </ul>
    </div>
    <!-- 小轮播图 -->
    
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {
      swiperlist: [
        {
          imgurl: require("../../images/02c8f290-8877-4a66-856b-4443ae172dbe.jpg")
        },
        {
          imgurl: require("../../images/5e5cc979-8c79-4f10-b74a-4bb5b00a37c6.jpg")
        },
        {
          imgurl: require("../../images/336e6e6b-f011-42dd-8f90-724b3d4edff0.jpg")
        },
        {
          imgurl: require("../../images/a45fc153-8d1d-4857-9350-4805e17c5f17.jpg")
        },
        {
          imgurl: require("../../images/c895ecc6-d8e2-4a79-9287-e00c73d9bbc1.jpg")
        },
        {
          imgurl: require("../../images/d0f2bf8e-338e-4f5b-a6e7-a721eadbedb0.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          disableOninteraction: true
        },
        bulletActiveClass: {},
        loop: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.sdapp{
	z-index: 99;
}
.wrapper {
  // overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  background-color: #eee;
  padding-top:37px;
}
.swiper-img {
  width: 100%;
}
.mui-grid-view.mui-grid-9 .mui-media {
  background-color: white;
  border: none;
  img {
    width: 37px;
    height: 34px;
  }
  .mui-media-body {
    font-size: 12px;
  }
}
.mui-col-xs-2 {
  width: 20%;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  padding: 0px;
  border: 0px;
}

// +++++++四块图片++++++++++
.bglist span {
  // display: inline-block;

  img {
    width: 49.4%;
  }
}

//++++++++党政精选++++++++++++

.horizontallist {
	width: 100%;
	height: 182px;
  padding-top: 5px;
  ul {
      width:100%;
			height: 154px;
			overflow-x: scroll; 	/* 内容会被裁剪，会以滚动条显示 */
			overflow-y: hidden;  /* 超出内容不可见 */
			white-space: nowrap;  /* 不换行 */
		cursor: pointer;
    padding: 0;
	:-webkit-scrollbar {
			height: 20px;
		}
    li{
        list-style: none;
        display: inline-block;
        width: 100px;
    }
  }
  h4{
    font-size: 14px;
    color: #000;
    font-weight: 600;
    margin-left: 5px;
  }
  a{
    color: #999999;
    margin-left: 73%;
  }
  img{
    width: 82px;
    height:78px;
  }
  p{
    height:22px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
  }
  span{
    color: #b50d0d;
  }

}
</style>