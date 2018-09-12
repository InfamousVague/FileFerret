<template>
  <div>
    <label>Select File</label>
    <p class="small">You can also drag and drop files below.</p>
    <input type="file" ref="file" v-on:change="prepFile()">
  </div>
</template>

<script>
  export default {
    name: 'UploadFile',
    methods: {
      prepFile() {
        const input = this.$refs.file;
        const file = input.files[0];
        const blob = new Blob(input.files, { type: file.type });
        this.$root.$data.store.commit('setFile', {
          blob,
          file,
        });
      },
    },
  };
</script>
