<template>
  <div>
    <div class="bgcolor">
      <div class="shopcar">
        <div class="bj22">
          <h4>
            购物车
            <a>编辑</a>
          </h4>
          <i>
            <img src="../../images/dw.png" />
          </i>
        </div>
        <router-link to="/myself">
          <button>登录</button>
        </router-link>
        <span>登录后商品将合并到您的账号中</span>
      </div>
      <div class="bookdaicar">
        <!-- 购物车列表头部 -->
        <div class="mui-input-row mui-checkbox mui-left shangdian">
          <label>
            <i>
              <img src="../../images/shopcar.png" />
            </i>书袋APP商城
            <span>
              <img src="../../images/quan.png" />
            </span>
          </label>
          <input name="checkbox" value="Item 2" type="checkbox" />
        </div>
        <!--+++++++ 购物车列表项 +++++++-->
       <!-- 第一个商品 -->
          <div class="mui-input-row mui-checkbox mui-left booklist">
            <label>晚风枕酒</label>
            <input name="checkbox" value="Item 1" type="checkbox" />
            <span>
              <img src="../../images/booka-1.jpg" />
            </span>
            <div class="nan">
              <div id="addjj">
                <span class="bookname">￥{{price}}</span>
                <button @click="deducebook">--</button>
                <input class="countbook" v-model="shuliang"/>
                <button @click="addbook">＋</button>
              </div>
            </div>
        </div>
  <!-- 第二个商品 -->
       <!-- <div class="mui-input-row mui-checkbox mui-left booklist">
            <label>晚风枕酒</label>
            <input name="checkbox" value="Item 1" type="checkbox" />
            <span>
              <img src="../../images/booka-2.jpg" />
            </span>
            <div class="nan">
              <div id="addjj">
                <span class="bookname">￥{{price}}</span>
                <button @click="deducebook">--</button>
                <input class="countbook" v-model="shuliang"/>
                <button @click="addbook">＋</button>
              </div>
            </div>
        </div> -->
        <!-- 底部全选结算区 -->
        <div class="mui-input-row mui-checkbox mui-left botttomlist">
          <label>
            全选
            <button>
              去结算(
              <i>3&nbsp;</i>)
            </button>
           
             
               合计：￥<input v-model="zonprice"/>
           
          </label>
          <input name="checkbox" value="Item 1" type="checkbox" />
        </div>

        <!-- 推荐好书区 -->

      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
            return {
              price:'23',
              shuliang:'1',
              zonprice:'0'
             


            }
        },
        methods: {
          deducebook(){
            this.$store.commit("redusceshop");
            if(this.shuliang>1){
                this.shuliang--;
            }
           
           this.zonprice=this.price*this.shuliang;

          },
           addbook(){
            this.$store.commit("addcarshop");
            this.shuliang++;
            this.zonprice=this.price*this.shuliang;

          }
        
          },
         

        
        
};
</script>
<style lang="scss" scoped>
.shopcar {
  background-color: rgb(247, 247, 247);

  h4 {
    text-align: center;
    padding: 10px 0 5px 0;
    font-size: 19px;
  }
  i {
    img {
      width: 8%;
      position: relative;
      top: -38px;
      left: 52%;
    }
  }
  button {
    border: 1px solid #b50d0d;
    border-radius: 4px;
    color: #b50d0d;
    padding: 2px 20px;
    margin: 2px 10px 11px 27px;
    background-color: rgb(247, 247, 247);
  }
  span {
    font-size: 15px;
    color: #999999;
    display: inline-block;
    margin-top: 6px;
  }
}
.bj22 {
  position: relative;
  height: 45px;
  a {
    float: right;
    margin-right: 3px;
    margin-right: 10px;
    font-size: 17px;
  }
}
.bookdaicar {
  ul {
    padding-left: 0;
  }
}
.mui-input-row {
  border-bottom: 0.5px solid #999999;
  label {
    margin-bottom: 0;
  }
  i {
    img {
      width: 6%;
      position: relative;
      top: 1%;
    }
  }
  span {
    overflow: hidden;
    img {
      position: relative;
      top: 2%;
      width: 7%;
      float: right;
    }
  }
}
.mui-radio input[type="radio"]:checked:before,
.mui-checkbox input[type="checkbox"]:checked:before {
  color: #b50d0d;
}
// 购物车列表项
.booklist {
  // background-color:rgb(222,222,222);
  span {
    img {
      width: 30%;
      float: left;
    }
  }
}
.bookname {
  width: 30%;
  color: #b50d0d;
  margin-left: -59%;
  margin-right: 22%;
  display: inline-block;
  padding-bottom: 2px;
}
#addjj {
  margin-left: 35%;
  margin-top: 21%;
  font-size: 17px;
  margin-bottom: 3%;
  span {
    margin: 0 7px;
  }
  input{
    width:37px;
    height: 39px;
    border: none;
    text-align: center;
  }
}
.countbook {
  display: inline-block;
  padding-top: 5px;
}
// 底部固定全选结算
.botttomlist {
  overflow: hidden;
  position: fixed;
  top: 85%;
  border-top: 1px solid rgb(228, 228, 228);
  input{
    width: 50px;
    margin-left: -3px;
    margin-top:9px;
    border: none;
    color: #b50d0d;

  }

  label {
    width: 100% !important;

  }

  button {
    float: right;
    color: white;
    background-color: rgb(198,47,46);
    padding: 9px 17px;
    margin-left: 78px;
  }
  span {
    float: right;
    padding-top: 2%;
    margin: 0 17px 0 77px;
  }
}
</style>