<template>
  <div>
    xin chao {{ getFullName }}
  </div>
</template>

<script>

export default {
  name: 'PopupDetailAccount',
  props: {
    userDetail: {
      type: Object,
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    getFullName() {
      return this.userDetail?.full_name;
    },
  },
  methods: {},
};
</script>

<style lang='scss' scoped>

</style>
