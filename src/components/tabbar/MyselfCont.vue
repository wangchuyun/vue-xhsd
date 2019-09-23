<template>
  <div>
    <router-link class="login" to="/myself/login" >账号登录</router-link>
    <router-link class="register" to="/myself/register" >快捷注册</router-link>
    <router-view></router-view>

  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div {
  background-color: rgb(247, 247, 247);
}
.login {
  display: inline-block;
  font-size: 23px;
  color: #000 !important;
  width: 50%;
  text-align: center;
  margin: 29px 0;
  padding: 35px 0 7px 0;
  
}
.register {
  display: inline-block;
  font-size: 23px;
  color: #000 !important;
  width: 48%;
  text-align: center;
  margin: 29px 0;
  padding: 35px 0 7px 0;
}
.login:hover{
    text-decoration:none;
    border-bottom: 2px solid #b50d0d;
    font-weight: 600;
}
.register:hover{
    text-decoration:none;
    border-bottom: 2px solid #b50d0d;
        font-weight: 600;

}

</style>