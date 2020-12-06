<template>
  <div class="popup-detail-account">
    <div class="form-input">
      <label for="username">Tài khoản:</label>
      <b-form-input placeholder="" id="username" v-model="userDetail.username" disabled></b-form-input>
    </div>
    <div class="form-input">
      <label for="fullName">Nhân viên:</label>
      <b-form-input placeholder="" id="fullName" v-model="convertName"></b-form-input>
    </div>
    <div class="form-input">
      <label for="role">Vai trò:</label>
      <select id="role" v-model="role" class="b-dropdown">
        <option value="Admin">ADMIN</option>
        <option value="View">VIEWER</option>
        <option value="Disable">DISABLED</option>
      </select>
    </div>
    <div class="form-input">
      <label for="staffCode">Mã nhân viên:</label>
      <b-form-input placeholder="" id="staffCode" v-model="userDetail.staff_code"></b-form-input>
    </div>
    <div class="form-input">
      <label for="company">Tên công ty:</label>
      <select id="role" class="b-dropdown" v-model="companyId">
        <option v-for="company in getListTenant" :key="company.id" :value="company.id">{{ company.name }}</option>
      </select>
    </div>
    <div class="popup-detail-account__button-wrapper">
      <b-button size="sm" @click="cancel">
        Hủy bỏ
      </b-button>
      <b-button size="sm" variant="success" @click="submit">
        Sửa
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
      companyId: this.userDetail.tenant.id,
      role: this.userDetail.role,
    };
  },
  computed: {
    ...mapGetters(['getListTenant']),
    convertFullName() {
      let result;
      if (this.userDetail.full_name) {
        result = this.userDetail.full_name;
      }
      return result;
    },
    convertRole() {
      let result;
      if (this.role === 'Admin') {
        result = 1
      } else if (this.role === 'View') {
        result = 2
      } else {
        result = 3
      }
      return result;
    },
    setDataSubmit() {
      const data = {
        full_name: this.userDetail.full_name,
        role: this.convertRole,
        staff_code: this.userDetail.staff_code,
        tenant: this.companyId,
      }
      return data;
    },
  },
  methods: {
    setSelectedTenant() {
      const company = this.getListTenant?.find((item) => item.name === this.userDetail?.tenant?.name);
      this.companyId = company.id;
    },
    submit() {
    },
    cancel() {
      this.$bvModal.hide('modal-detail-account');
    },
  },
};
</script>

<style lang='scss' scoped>
.popup-detail-account {
 .form-input {
   display: grid;
   grid-template-columns: 20% 80%;
   margin-bottom: 12px;
   .b-dropdown {
     width: 130px;
     border: 1px solid #dcdcdc;
     outline: none;
   }
 }
 &__button-wrapper {
   display: flex;
   justify-content: flex-end;
   button {
     margin-right: 7px;
   }
   button:last-child {
     margin-right: 0px;
   }
 }
}
</style>
