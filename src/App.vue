<template>
  <div id="app">
    <main>
      <Menu />
      <transition appear mode="out-in" name="slide-fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import Menu from '@/components/parts/Menu';

  export default {
    name: 'app',
    components: {
      Menu,
    },
  };
</script>

<style lang="less" src="@/assets/styles/app.less"></style>
