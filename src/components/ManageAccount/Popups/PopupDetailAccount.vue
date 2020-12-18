<template>
  <div class="popup-detail-account">
    <div class="form-input">
      <label for="username">
        <span class="text-color-required">*</span> Tài khoản:
      </label>
      <div>
        <b-form-input
          placeholder=""
          id="username"
          v-model="userDetail.username"
          disabled
        >
        </b-form-input>
      </div>
    </div>
    <div class="form-input">
      <label for="fullName">
        <span class="text-color-required">*</span> Tên Nhân viên:
      </label>
      <div>
        <b-form-input
          placeholder=""
          id="fullName"
          v-model="$v.dataSubmit.full_name.$model"
          :state="validateState('full_name')"
          aria-describedby="input-fullName-feedback"
        ></b-form-input>
        <b-form-invalid-feedback id="input-fullName-feedback" v-if="!$v.dataSubmit.full_name.required" >
            Xin hãy nhập họ tên
          </b-form-invalid-feedback>
      </div>
    </div>
    <div class="form-input">
      <label for="role">
        <span class="text-color-required">*</span> Vai trò:
      </label>
      <select id="role" v-model="dataSubmit.role" class="b-dropdown">
        <option value="Admin">ADMIN</option>
        <option value="View">VIEW</option>
        <option value="Disable">DISABLED</option>
      </select>
    </div>
    <div class="form-input">
      <label for="staffCode">Mã nhân viên:</label>
      <b-form-input placeholder="" id="staffCode" v-model="dataSubmit.staff_code"></b-form-input>
    </div>
    <div class="form-input">
      <label for="company">
        <span class="text-color-required">*</span> Tên công ty:
      </label>
      <select id="company" class="b-dropdown" v-model="dataSubmit.tenant">
        <option v-for="company in getListTenant" :key="company.id" :value="company.id">{{ company.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'PopupDetailAccount',
  mixins: [validationMixin],
  props: {
    userDetail: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      dataSubmit: {
        full_name: this.userDetail.full_name,
        role: this.userDetail.role,
        staff_code: this.userDetail.staff_code,
        tenant: this.userDetail.tenant.id,
      },
    };
  },
  validations: {
    dataSubmit: {
      full_name: {
        required,
      },
      staff_code: {
        minLength: minLength(4),
      },
    },
  },
  watch: {
    dataSubmit: {
      handler(val) {
        this.$emit('update', {
          data: val,
          id: this.userDetail.id,
          canUpdate: this.canUpdate,
        });
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(['getListTenant']),
    canUpdate() {
      let result;
      this.$v.$touch();
      if (this.$v.$anyError) {
        result = true;
      } else result = false;
      return result;
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.dataSubmit[name];
      return $dirty ? !$error : null;
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
