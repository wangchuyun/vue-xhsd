<template>
  <div>
    <form>
      <input type="text" v-model="name" placeholder="用户名" />
      <div class="inline"></div>
      <input type="text"  v-model="number"  placeholder="手机号码" />
      <div class="inline"></div>
      <input type="password" v-model="password" placeholder="请设置密码" />
    </form>
    <div>
      <div class="mui-input-row mui-checkbox mui-left">
        <label>已同意&nbsp;&nbsp;《<a href="">用户注册协议</a>》</label>
        <input name="checkbox" v-model="value" type="checkbox" />
      </div>
    </div>
    <div class="sub-btn">
      <input type="button" @click="pushuser" value="注册" />
    </div>
       <button type="button" class="toastshow" v-show='ishow' v-text="msg"></button>

  </div>
</template>
<script>
export default {
   data: function(){
        return{
            name: '',
            password: '',
            number:'',
            msg:'',
            errorflag:false,
            ishow:false,
            value:false


        }
    },
      methods: {
        pushuser: function(){
          var regn=/^[A-Za-z]{1,3}[0-9]{1,3}$/ig
            var regnub=/^[0-9]{11}$/ig
             var regp=/^[A-Za-z]{1,3}[0-9]{5,8}$/ig
             var namebool=regn.test(this.name);
             var nubbool=regnub.test(this.number);
            var pwdbool=regp.test(this.password);
            if(this.name.length==0){
                // this.msg("用户名不能空");
               console.log("用户名不能空");
                this.msg='用户名不能空'
                this.gettoast();
            }else if(namebool==false){
                this.msg='请输入以字母开头2~6位包含数字和字母';
                console.log("请输入以字母开头2~6位包含数字和字母");
                 this.gettoast();
               
            }else{
                if(this.number.length==0){
                    // this.msg("手机号不能空");
                console.log("手机不能空");
                this.msg='手机号码不能空'
                this.gettoast();
                }else if(nubbool==false){
                  this.msg='请输入11位数字';
                console.log("请输入11位数字");
                 this.gettoast();
                }else{
                  if(this.password.length==0){
                    //  this.msg("密码不能空");
                     console.log("密码不能空");
                     this.msg='密码不能空'
                     this.gettoast();
                  }else if(pwdbool==false){
                      this.msg='请输入以字母开头6~11位包含数字和字母';
                console.log("请输入以字母开头6~11位包含数字和字母");
                 this.gettoast();
                  }else{
                    if(this.value==true){
                      this.getuserList();
                    }
                    else{
                      console.log("请仔细阅读用户注册");
                       this.msg='请仔细阅读用户注册'
                       this.gettoast();
                    }
                    
                  }
                }

            }
        },
         getuserList(){
                //注册请求
                var that=this;
                $.ajax({
                        type:'post',
                        url:'http://127.0.0.1/admin/userregister.php',
                        data:{
                            name:this.name,
                            password:this.password,
                            number: this.number
                        },
                        success:function(res){
                            if(res[0].code==1)
                            {
                              console.log('注册成功');
                              that.msg='注册成功'
                               that.gettoast();
                              
                            }
                            else{
                                 that.msg='此用户名已被注册'
                               console.log('此用户名已被注册');
                               that.gettoast();
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
};
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
}
.mui-radio input[type='radio']:checked:before{
           color: #b50d0d;

}
 .mui-checkbox input[type='checkbox']:checked:before{
       color: #b50d0d;
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

