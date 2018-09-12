<template>
  <div>
    <img src="@/assets/images/ferret.png" alt="LOGO" width="180" class="logo"/>
    <br>
    <br>
    <label style="text-align: center; width: 100%;">What would you like to do?</label>
    <br>
    <br>
    <button class="send" v-on:click="$router.push('/send')">Send</button>
    <br>
    <br>
    <button class="send" v-on:click="$router.push('/receive')">Receive</button>
  </div>
</template>

<script>
  import MyCode from '@/components/parts/MyCode';
  import UploadFile from '@/components/parts/UploadFile';
  import Share from '@/components/parts/Share';

  export default {
    name: 'Home',
    components: {
      MyCode,
      Share,
      UploadFile,
    },
  };
</script>
