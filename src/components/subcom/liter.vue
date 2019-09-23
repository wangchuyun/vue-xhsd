<template>
<div class="booksort-right">
<div class="sort">
                <h4>小说</h4>
                <ul>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/sort-1.jpg">
                    <p>中国小说</p></router-link>
                     <router-link class="booksuper" to="/BookSuper"><img src="../../images/sort-2.jpg">
                    <p>中国小说</p></router-link>
                </ul>
            </div>
            <div class="literature">
                <h4>文学</h4>
                <ul>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-1.jpg">
                    <p>中国文学</p></router-link>
                     <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-2.jpg">
                    <p>外国文学</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-3.jpg">
                    <p>诗词曲赋</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-4.jpg">
                    <p>纪实文学</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-5.jpg">
                    <p>文学理论</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-6.jpg">
                    <p>散文随笔</p></router-link>
                </ul>
            </div>

            <div class="literature">
                <h4>艺术</h4>
                <ul>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-7.jpg">
                    <p>摄影</p></router-link>
                     <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-8.jpg">
                    <p>鉴赏收藏</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-9.jpg">
                    <p>艺术概论</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-10.jpg">
                    <p>音乐舞蹈</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-11.png">
                    <p>书法篆刻</p></router-link>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-2.jpg">
                    <p>戏曲影视</p></router-link>
                     <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-3.jpg">
                    <p>绘画雕塑</p></router-link>
                </ul>
            </div>

            <div class="literature">
                <h4>传记</h4>
                <ul>
                    <router-link class="booksuper" to="/BookSuper"><img src="../../images/liter-7.jpg">
                    <p>传记</p></router-link>
                </ul>
            </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.booksort{
    font-size: 12px;
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
         a{
        display: inline-block !important;
        padding: 20px 16px !important;
    }
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
        li{
            padding: 20px 16px;
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
        margin-bottom: 30px;
        p{
            width: 56px;
         font-size: 14px;
         margin: 9px 0 0 5px;

            
        }
        h4{
            text-align: center;
            font-size: 14px;
            font-weight: 600;

        }
        img{
            width: 143%;
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

}
.router-link-active {
    padding: 20px 16px !important;
    color: #b50d0d !important;
}
</style>