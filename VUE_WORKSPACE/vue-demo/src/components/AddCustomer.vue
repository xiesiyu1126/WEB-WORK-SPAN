<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" ></Alert>
    <h1 class="page-header">用戶添加</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用戶信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>電話</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>郵箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>年齡</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age" />
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: "add",
  components:{
    Alert
  },
  data() {
    return {
      customer: {},
      alert:""
    };
  },
  methods:{
      addCustomer(e){
          if(!this.customer.name|| !this.customer.phone|| !this.customer.email){
             this.alert="请填写必填内容";
          }else{
              //创建新的用户对象
              let newCustomer={
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  age:this.customer.age
              }
              this.$http.post("http://localhost:3000/users",newCustomer)
              .then(function(response){
                  console.log(response);
                  this.$router.push({path:"/",query:{alert:"用户信息添加成功"}});
              })
              e.preventDefault();
          }
          e.preventDefault();//阻止默认事件
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
