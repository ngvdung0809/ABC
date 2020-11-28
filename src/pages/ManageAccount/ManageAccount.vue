<template>
  <div class="manage-account-container">
    <div class="manage-account-container__header">
      <Header />
    </div>
    <div class="manage-account-container__table">
      <b-table striped hover :items="items" class="manage-account-container__table"></b-table>
    </div>
  </div>
</template>

<script>
import Header from '../../components/ManageAccount/Headers/Header.vue';

export default {
  name: 'ManageAccount',
  components: {
    Header,
  },
  data() {
    return {
      items: [
        {
          Nhân_Viên: 40,
          Tài_Khoản: 'Dickerson',
          Vai_Trò: 'Macdonald',
          Công_Ty: 'Dickerson',
          Mã_Nhân_Viên: 'Dickerson',
          '#': '',
        },
        {
          Nhân_Viên: 21,
          Tài_Khoản: 'Larsen',
          Vai_Trò: 'Shaw',
          Công_Ty: 'Dickerson',
          Mã_Nhân_Viên: 'Dickerson',
          '#': '',
        },
        {
          Nhân_Viên: 89,
          Tài_Khoản: 'Geneva',
          Vai_Trò: 'Wilson',
          Công_Ty: 'Dickerson',
          Mã_Nhân_Viên: 'Dickerson',
          '#': '',
        },
        {
          Nhân_Viên: 38,
          Tài_Khoản: 'Jami',
          Vai_Trò: 'Carney',
          Công_Ty: 'Dickerson',
          Mã_Nhân_Viên: 'Dickerson',
          '#': '',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.manage-account-container {
  &__header {
    margin-bottom: 12px;
  }
}
</style>
<style lang="scss">
  thead {
    background: #28C5BD;
    opacity: 0.7;
    color: #FFFFFF;
  }
</style>
