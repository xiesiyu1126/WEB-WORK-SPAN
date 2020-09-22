<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户详情</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label>年龄</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age" />
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
        <router-link class="btn btn-default" to="/">返回</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "edit",
  components: {
    Alert
  },
  data() {
    return {
      customer: {},
      alert: ""
    };
  },
  methods: {
    fetchCustomer(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
          console.log(response.body);
          this.customer = response.body;
        });
    },

    updateCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请填写必填内容";
      } else {
        //更新新的用户对象
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          age: this.customer.age
        };
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            updateCustomer
          )
          .then(function(response) {
            console.log(response);
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault(); //阻止默认事件
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
