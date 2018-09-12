<template>
  <div class="relative onehundred">
    <GoHome />
    <h3>Send a File</h3>
    <p class="small blue">Connected Peers: {{ $root.$data.store.state.connections.length }}</p>
    <br>
    <MyCode />
    <br>
    <UploadFile />
    <br>
    <Loader v-if="$root.$data.store.state.sending"/>
    <Share v-if="$root.$data.store.state.file && $root.$data.store.state.connections.length > 0 && !$root.$data.store.state.sending" />
    <button v-else-if="!$root.$data.store.state.file" disabled class="send disabled bottom_button"> SELECT A FILE</button>
    <button v-else-if="$root.$data.store.state.sending" class="send disabled bottom_button">SENDING</button>
    <button v-else disabled class="send disabled bottom_button">WAITING FOR CONNECTION(S)</button>
  </div>
</template>

<script>
  import MyCode from '@/components/parts/MyCode';
  import GoHome from '@/components/parts/GoHome';
  import UploadFile from '@/components/parts/UploadFile';
  import Share from '@/components/parts/Share';
  import Loader from '@/components/parts/Loader';

  export default {
    name: 'Send',
    components: {
      GoHome,
      MyCode,
      Share,
      UploadFile,
      Loader,
    },
    destroyed() {
      for (let i = 0; i < this.$root.$data.store.state.connections.length - 1; i += 1) {
        const connection = this.$root.$data.store.state.connections[i];
        connection.close();
      }
      this.$root.$data.store.commit('cleanup');
    },
  };
</script>
