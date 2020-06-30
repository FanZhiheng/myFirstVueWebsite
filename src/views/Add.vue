<template>
  <div>
    <p>标题</p>
    <input type="text" v-model='title'>
    <p>内容</p>
    <input type="text" v-model='content'><br>
    <button class='btn' @click='add()'>确定添加</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name:'add',
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      store.commit('add', {
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
      this.$router.push('/home/lists')
    }
  }
}
</script>

<style scoped>
.btn {

}
</style>