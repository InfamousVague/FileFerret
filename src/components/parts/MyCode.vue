<template>
  <div class="my_code">
    <label>SHARE ID:</label><br>
    <p class="small">Send this to anyone you'd like to share with.</p>
    <input v-if="$root.$data.store.state.peerId" ref="share_id" type="text" :value="$root.$data.store.state.peerId" readonly="readonly" class="share_id">
    <input v-else type="text" value="Connecting..." readonly="readonly" class="share_id">
    <button :class="this.copied ? 'copy blue' : 'copy'" v-on:click="copyCode()"><i class="fa fa-copy"></i></button>
  </div>
</template>

<script>
  export default {
    name: 'MyCode',
    methods: {
      copyCode() {
        console.log('test');
        this.$refs.share_id.select();
        document.execCommand('copy');
        this.copied = true;
      },
    },
    data() {
      return {
        copied: false,
      };
    },
  };
</script>
