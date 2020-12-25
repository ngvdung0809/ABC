<template>
  <b-modal :id="idModal" no-close-on-backdrop size="lg" :title="titleModal">
    <div class="popup-add-account ml-3 mr-3">
      <div class="form-input">
        <label for="username">
          <span class="text-color-required">*</span> Tài khoản:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="username"
            v-model="$v.userName.$model"
            :state="validateState('userName')"
            aria-describedby="input-username-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-username-feedback" v-if="!$v.userName.required" >
            Xin hãy nhập tên tài khoản
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="password">
          <span class="text-color-required">*</span> Mật khẩu:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="password"
            type="password"
            v-model="$v.password.$model"
            :state="validateState('password')"
            aria-describedby="input-password-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-password-feedback" v-if="!$v.password.required" >
            Xin hãy nhập mật khẩu
          </b-form-invalid-feedback>
          <!-- <b-form-invalid-feedback id="input-password-feedback" v-else-if="!$v.password.alphaNumAndDotValidator" >
            Mật khẩu không hợp lệ
          </b-form-invalid-feedback> -->
        </div>
      </div>
      <div class="form-input">
        <label for="confirmPassword">
          <span class="text-color-required">*</span> Xác nhận mật khẩu:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="confirmPassword"
            type="password"
            v-model="$v.confirmPassword.$model"
            :state="validateState('confirmPassword')"
            aria-describedby="input-confirmPassword-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-confirmPassword-feedback" v-if="!$v.confirmPassword.required" >
            Xin hãy xác nhận mật khẩu
          </b-form-invalid-feedback>
          <b-form-invalid-feedback id="input-confirmPassword-feedback" v-else-if="!$v.confirmPassword.sameAsPassword" >
            Xác nhận mật khẩu không khớp
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="fullName">
          <span class="text-color-required">*</span> Tên nhân viên:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="fullName"
            v-model="$v.fullName.$model"
            :state="validateState('fullName')"
            aria-describedby="input-fullName-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-fullName-feedback" v-if="!$v.fullName.required" >
            Xin hãy nhập họ tên
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="role">
          <span class="text-color-required">*</span> Vai trò:
        </label>
        <select id="role" class="b-dropdown" v-model="role" >
          <option :value="1">ADMIN</option>
          <option :value="2">VIEW</option>
          <option :value="3">DISABLED</option>
        </select>
      </div>
      <div class="form-input">
        <label for="staffCode">Mã nhân viên:</label>
        <div>
          <b-form-input
            placeholder=""
            id="staffCode"
            v-model="$v.staffCode.$model"
            :state="validateState('staffCode')"
            aria-describedby="input-staffCode-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-staffCode-feedback" v-if="!$v.staffCode.minLength" >
            Mã nhân viên phải có tối thiểu 4 kí tự
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="company">
          <span class="text-color-required">*</span> Tên công ty:
        </label>
        <select id="company" class="b-dropdown" v-model="company" >
          <option v-for="company in getListTenant" :key="company.id" :value="company.id">{{
            company.name
          }}</option>
        </select>
      </div>
    </div>
    <template #modal-footer="">
      <b-button size="sm" variant="danger" @click="cancel" >
        Hủy bỏ
      </b-button>
      <b-button ref="btn_add_account" size="sm" variant="success" @click="submit" >
        Tạo
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import constants from '../../../constants/index';

// const alphaNumAndDotValidator = constants.ACCOUNT_CONST.REGEX_PASSWORD;

export default {
  props: {
    idModal: {
      type: String,
    },
    titleModal: {
      type: String,
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      userName: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      role: 1,
      staffCode: '',
      company: '',
      constants,
    };
  },
  validations: {
    userName: {
      required,
    },
    password: {
      required,
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password'),
      // alphaNumAndDotValidator,
    },
    fullName: {
      required,
    },
    staffCode: {
      minLength: minLength(4),
    },
  },
  watch: {
    getListTenant: {
      handler(val) {
        this.company = val[0]?.id;
      }
    }
  },
  computed: {
    ...mapGetters(['getListTenant', 'getErrorCodeAccount']),
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
    clearData() {
      this.userName = '';
      this.password = '';
      this.confirmPassword = '';
      this.fullName = '';
      this.role = 1;
      this.staffCode = '';
      this.company = this.getListTenant[0]?.id;
    },
    clearErrorValidate() {
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    cancel() {
      this.$bvModal.hide(this.idModal);
      this.clearData();
      this.clearErrorValidate()
    },
    makeToastMessage(message, status) {
      this.$bvToast.toast(message, {
        title: 'Thông báo',
        variant: status,
        autoHideDelay: 2000,
        solid: true,
      });
    },
    async submit() {
      this.$v.$touch();
      if (this.$v.$anyError) {
        return;
      }
      const payload = {
        username: this.userName,
        password: this.password,
        full_name: this.fullName,
        role: this.role,
        staff_code: this.staffCode,
        tenant: this.company,
      };
      
      const submitButton = this.$refs.btn_add_account;
      submitButton.classList.add('spinner', 'spinner-light', 'spinner-right');
      await this.$store.dispatch('addAccount', payload);
      if (this.getErrorCodeAccount === 0) {
        this.clearErrorValidate();
        this.$bvModal.hide(this.idModal);
        this.clearData();
        await this.$store.dispatch('getAccount', '');
        this.makeToastMessage(constants.COMMON_CONST.MESSAGE_ADD_SUCCEED, 'success');
      } else {
        this.makeToastMessage(constants.COMMON_CONST.MESSAGE_ADD_FAILED, 'danger');
      }
      submitButton.classList.remove(
        'spinner',
        'spinner-light',
        'spinner-right',
      );
    },
  },
};
</script>

<style lang='scss' scoped>
.popup-add-account {
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
  .spinner.spinner-right {
    padding-right: 3.5rem !important;
  }
}
</style>
<style lang="scss">
.text-color-required {
  color: red;
}
</style>
