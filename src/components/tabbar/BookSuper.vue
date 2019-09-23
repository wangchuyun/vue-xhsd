<template>
    <div>
         <div class="search"><input type="text"><i><img src="../../images/search1.png"></i>
        <router-link  to="/myself" class="user"><img src="../../images/user.png"></router-link></div>
        <div class="bookbox">
            <div class="book-1" v-for="item in list" :key=item.id>
                <img :src="getImgUrl(item.src)">
                <h6>{{item.name}}</h6>
                <p>{{item.author}}</p>
                <span><i>¥</i>{{item.price}}</span><i @click="addcar"><img src="../../images/addbook.png"></i>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // id:this.$route.params.id,
                list:[],
                

            }
        },
        mounted() {
            this.getBookList();
        },
        methods: {
            getBookList(){
                //获去商品列表
                this.$http.get('http://127.0.0.1/admin/product_list.php').then(result => {
                   
                        if (result.status === 200) {
                            console.log(result);
                            this.list = result.body;
                        }
                })
            },
            addcar(){
                this.$store.commit("addcarshop");
            },
            getImgUrl(src){
                return require("../../images/"+src+".jpg");
            }
        }
    }


</script>
<style lang="scss" scoped>
// 搜索框上半截
.search{
       background-color: rgb(247,247,247);
       padding: 2% 14% 2% 7%;
       position: fixed;
       top:0;
       left: 2px;
       width: 100%;

       
       i{
           position: absolute;;
           top:19%;
           left:81%;
          img{
           width: 23px;
           height: 23px;
       } 
       }
       .user{
           position: absolute;
           top:19%;
           left:91%;
           img{
           width: 23px;
           height: 23px;
       } 
       }
        input{
        width: 103%;
        height: 30px;
        padding: 3px;
        border:0px;
        background-color: white;
        margin-bottom: 0px;
    }
}

//两列式弹性布局
.bookbox{
    display: flex;
    flex-wrap: wrap;
    padding-top: 43px;
    background-color: rgb(247,247,247);

}
.book-1{
    width: 47%;
    background-color: white;
    margin: 1% 0 1% 2%;
    i{
        
        img{
            width:14%;
            margin-right:8px;
            float: right;
        }
    }
    h6{
        color: #000;
        margin-top: 13px;
    }
    p{
        color: #999999;
    }
    span{
        color: #b50d0d;
        padding-bottom: 8px;
        display: inline-block;
        margin-right: 55%;
    }
    img{
        width: 95%;
    }
}

</style>