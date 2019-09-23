<template>
    <div class="booksort">
        <div class="search"><input type="text"><i><img src="../../images/search1.png"></i>
        <router-link  to="/myself" class="user"><img src="../../images/user.png"></router-link></div>
        <div class="booksort-left">
            <ul>
                <router-link to="/sort/liter"><span>文学艺术</span></router-link>
                 <router-link to="/sort/human"><span>人文社科</span></router-link>
                  <router-link to="/sort/children"><span>少儿童书</span></router-link>
                   <router-link to="/sort/child"><span>教育考试</span></router-link>
                  <a><span>经济金融</span></a>
                 <a ><span>生活休闲</span></a>
                  <a ><span>科学技术</span></a>
                  <a ><span>电子书</span></a>
                  <a ><span>新华定制</span></a>
                 <a ><span>精准扶贫</span></a>
                  <a ><span>食品酒瘾</span></a>
                 <a ><span>文化生活</span></a>
                  <a ><span>学习办公</span></a>
                 <a ><span>旅游休闲</span></a>
                  <a ><span>省内推荐</span></a>
            </ul>
        </div>
            <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
// ++++++输入框+++++++++++++

.booksort{
    input{
        width: 103%;
        height: 30px;
        padding: 3px;
        border:0px;
        background-color: white;
        margin-bottom: 0px;
        
        
    }
    ul{
        padding-left: 0px;
        margin-bottom: 16px;
        li{
            list-style-type: none;
            
        }
    }
}
.booksort-left{
    display: inline-block;
    position: fixed;
        top:45px;
        bottom: 0;
        overflow: scroll;
        left: 0;
       background-color: rgb(247,247,247);
    ul{
        margin: 1px 2px 2px 2px;
       span{
           display:block;
            padding: 20px 16px;
            color: #74787a;
        }
    }
}
.booksort-right{
    display: inline-block;
    position: fixed;
        top: 54px;
        bottom: 0;
        overflow: scroll;
        right: 0;
        width: 72%;
        h4{
            text-align: center;
            font-size: 14px;
            font-weight: 600;

        }
        img{
            width: 90%;
            height:40%;
        }
        ul{
            .booksuper{
                list-style-type: none;
                display: inline-block;
                width: 27%;
                text-align: center;
            }
        }
}
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

}


</style>