<template>
  <div @click="routerJump(10086)">vue路由传参的三种基本方式</div>
</template>

<script>
export default {
  data() {
    return {
      // 三种方式对应的路由配置
      router1: {
        path: '/about/:id',
        name: 'about',
        component: about
      },
      router2: {
        path: '/about',
        name: 'about',
        component: about
      },
      router3: {
        path: '/about',
        name: 'about',
        component: about
      }
    }
  },
  methods: {
    routerJump1(id) {
      // 直接调用$router.push 实现携带参数的跳转（页面刷新数据不会丢失）
      this.$router.push({
        path: `/about/${id}`
      })
    },
    // 获取路由参数 this.$route.params.id

    routerJump2(id) {
      // 通过属性name来确定匹配的路由，通过params来传递参数（页面刷新数据会丢失）
      this.$router.push({
        name: 'about',
        params: {
          id
        }
      })
    },
    // 获取路由参数 this.$route.params.id

    routerJump3(id) {
      // 通过属性path来确定匹配的路由，通过query来传递参数
      this.$router.push({
        path: '/about',
        query: {
          id
        }
      })
    }
    // 获取路由参数 this.$route.params.id
  }
}
</script>

<style>

</style>