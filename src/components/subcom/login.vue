<template>
    <div>
        <form>
       <input type="text" class="uname" v-model="name"  placeholder="账号">
       <div class="inline"></div>
        <input type="password" v-model="password"  placeholder="密码">
        <div>
            <p>快捷登录</p><span>忘记密码</span>

        </div>
        <div class="sub-btn">
             <input @click="getuser()"  type="button" value="登录">
            <button type="button" class="toastshow" v-show='ishow' v-text="msg"></button>
             <!-- <div id="info"></div> -->
        </div>
         </form>
        <!-- <span class="toast" v-show="errorflag">{{msg}}</span> -->
    </div>
</template>
<script>
//  import { Toast } from 'mint-ui';
export default {
    data: function(){
        return{
            name: '',
            password: '',
            errorflag:false,
            msg:'',
            ishow:false
        }
    },
    methods: {
        getuser: function(){
            var regn=/^[A-Za-z]{1,3}[0-9]{1,3}$/ig
            var regp=/^[A-Za-z]{1,3}[0-9]{5,8}$/ig
            var namebool=regn.test(this.name);
            var pwdbool=regp.test(this.password);
            if(this.name.length==0){
                this.msg='用户名不能空';
                console.log("用户名不能空");
                 this.gettoast();
            }else if(namebool==false){
                 this.msg='请输入以字母开头2~6位包含数字和字母';
                console.log("请输入以字母开头2~6位包含数字和字母");
                 this.gettoast();
                 }else{

                if(this.password.length==0){
                    this.msg="密码不能空";
                console.log("密码不能空");
                this.gettoast();
                }else if(pwdbool==false){
                     this.msg='请输入以字母开头6~11位包含数字和字母';
                console.log("请输入以字母开头6~11位包含数字和字母");
                 this.gettoast();
                }else{
                    this.getBookList();
                }

            }
        },
         getBookList(){
                //登录请求
                //var that=this;因为在ret里面的方法里面，this指向的就是ret了，不是vue的组件属性
                var that=this;
                $.ajax({
                        type:'POST',
                        url:'http://127.0.0.1/admin/userlogin.php',
                        data:{
                           name:this.name,
                           password:this.password

                        },
                        success:function(res){
                            if(res[0].code==1)
                            {
                                that.msg='登录成功';
                                console.log("登录成功");
                                 that.gettoast();
                               
                            }
                            else{
                                
                                that.msg='用户名或密码错误';
                                console.log("用户名或密码错误");
                                that.gettoast();
                                // window.location.href="./BookSuper.vue";

                            }
                        }
                    })
            },
           gettoast() {
                        console.log('点击了 showToast')
                        this.ishow = true; 
                        console.log(333);
						setTimeout(() => {
                            console.log(222);
							this.ishow = false;
						}, 2000);
					}
       
    }
    
}
</script>
<style lang="scss" scoped>
form{
    padding: 0 10px;
    input{
        margin-bottom: 0;
        padding: 0 3px;
        border: none;
        padding-left:16px;
        height: 59px;
        
    }
}
.inline{
    width: 330px;
    height: 1px;
    background-color: rgb(244,244,244);
    position: relative;
    top:2px;
    left: 13px;
}
p{
    display: inline-block;
    margin: 16px 56% 23px 15px;
    font-size: 16px;
    color: #000;

}
input[type='button']{
    padding: 3% 44.7%;
    background-color: #b50d0d;
    border: none;
    margin-left: 5px;
    color: white;
    height: 40px;
   
}
input[type='button']:active{
   background-color: #b50d0d !important;

}
//toast的样式
.toastshow{
    position: fixed;
    top:37%;
    left:49%;
    z-index: 9;
    transform: translate(-50%, -50%);
    background-color: rgba(26, 23, 23, 0.7);
    border-radius: 5px;
    color: white;

}

</style>