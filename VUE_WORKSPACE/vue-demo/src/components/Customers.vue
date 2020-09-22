<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="from-control" placeholder="搜索" v-model="filterInput"/>
    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers,filterInput)">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/edit/'+customer.id">详情</router-link>
            <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: "",
      filterInput:""
    };
  },
  methods: {
    //   自定义查询用户列表信息的方法
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users").then(function(response) {
        this.customers = response.body;
      });
    },
    // 自定义根据用户编号删除用户的方法
    deleteCustomer(id) {
      this.$http
        .delete("http://localhost:3000/users/" + id)
        .then(function(response) {
          this.$router.push({ query: { alert: "删除成功！" } });
        });
    },
    // 自定义筛选查询方法 （名字匹配查询）
    filterBy(customers,value){
        return customers.filter(function(customer){
          
          return customer.name.match(value)
            //match 完全匹配(字母大小写)
        })
    }
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated() {
    this.fetchCustomers();
  },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
