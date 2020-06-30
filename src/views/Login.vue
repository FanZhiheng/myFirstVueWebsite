<template>
  <div class="root">
    <form action v-if="!isReg">
      <div class="wrap">
        <p>用户名:</p>
        <input type="text" v-model="name" />
        <p>密码:</p>
        <input type="password" v-model="password" />
        <br />
      </div>
      <div class="wrapbuttons">
        <button type="button" @click="login()">登陆</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>

    <form action v-else>
      <div class="wrap">
        <p>用户名:</p>
        <input type="text" v-model="name" />
        <p>密码:</p>
        <input type="password" v-model="password" />
        <p>再次输入密码:</p>
        <input type="password" v-model="repeat" />
        <br />
      </div>

      <div class="wrapbuttons">
        <button type="button" @click="confirm()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    reg() {
      this.isReg = true;
    },
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.$router.push("/home/lists");
        this.name = "";
        this.password = "";
      } else {
        alert("用户名或密码不正确");
        this.name = "";
        this.password = "";
      }
    },
    confirm() {
      if (this.password === this.repeat) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        this.name = "";
        this.password = "";
        this.repeat = "";
        this.isReg = false;
      } else {
        alert("两次输入的密码不一致");
      }
    },
    cancel() {
      this.isReg = false;
    }
  }
};
</script>

<style scoped lang='scss'>
.root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column nowrap;
}

form {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
</style>