<template>
  <div class="popup-detail-account">
    <div class="form-input">
      <label for="username">Tài khoản:</label>
      <b-form-input placeholder="" id="username"></b-form-input>
    </div>
    <div class="form-input">
      <label for="fullName">Họ và tên:</label>
      <b-form-input placeholder="" id="fullName"></b-form-input>
    </div>
    <div class="form-input">
      <label for="role">Vai trò:</label>
      <b-form-input placeholder="" id="role"></b-form-input>
    </div>
    <div class="form-input">
      <label for="sex">Giới tính:</label>
      <b-form-input placeholder="" id="sex"></b-form-input>
    </div>
    <div class="form-input">
      <label for="dob">Ngày sinh:</label>
      <b-form-input placeholder="" id="dob"></b-form-input>
    </div>
    <div class="form-input">
      <label for="phone">Số điện thoại:</label>
      <b-form-input placeholder="" id="phone"></b-form-input>
    </div>
    <div class="form-input">
      <label for="email">Email:</label>
      <b-form-input placeholder="" id="email"></b-form-input>
    </div>
    <div class="form-input">
      <label for="address">Địa chỉ:</label>
      <b-form-input placeholder="" id="address"></b-form-input>
    </div>
    <div class="form-input">
      <label for="taxCode">Mã số thuế:</label>
      <b-form-input placeholder="" id="taxCode"></b-form-input>
    </div>
    <div class="form-input">
      <label for="note">Chú thích:</label>
      <b-form-textarea
        id="note"
        placeholder=""
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
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
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.popup-detail-account {
 .form-input {
   display: grid;
   grid-template-columns: 20% 80%;
   margin-bottom: 12px;
 }
}
</style>
