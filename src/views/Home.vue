<template>
  <div>
    <router-view />
    <ul class='list'>
      <li class='links'>
        <router-link :to="{name: 'lists'}">新闻列表</router-link>
      </li>
      <li class='links'>
        <router-link :to="{name: 'personal'}">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped lang='scss'>
$color: rgb(0,113,141);

.list {
  padding: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  left: 0;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  border-top: 2px solid $color;
}
.links {
  list-style: none;
  flex: 1;
  text-align: center;
  a {
    color: $color;
    display: block;
    &.active {
      color: white;
      background-color: $color;
    }
  }
}
</style> 

