<template>
  <b-modal :id="idModal" no-close-on-backdrop size="lg" :title="detail.name">
    <div class="popup-add-service">
      <div class="form-input">
        <label for="name">
          <span class="text-color-required">*</span> Tên dịch vụ:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="name"
            v-model="$v.name.$model"
            :state="validateState('name')"
            aria-describedby="input-name-feedback"
          ></b-form-input>
          <b-form-invalid-feedback id="input-name-feedback" v-if="!$v.name.required" >
            Vui lòng nhập tên dịch vụ
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="don_vi">
          Đơn vị:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="don_vi"
            v-model="don_vi"
          ></b-form-input>
          <!-- <b-form-invalid-feedback id="input-don_vi-feedback" v-if="!$v.dataSubmit.don_vi.maxLength" >
            Đơn vị không quá 10 ký tự
          </b-form-invalid-feedback> -->
        </div>
      </div>
      <div class="form-input">
        <label for="code">
          Mã dịch vụ:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="code"
            v-model="code"
          ></b-form-input>
        </div>
      </div>
      <div class="form-input">
        <label for="dinh_ky">Định kỳ:</label>
        <div>
          <b-form-checkbox
            id="dinh_ky"
            v-model="dinh_ky"
            size="lg"
          ></b-form-checkbox>
        </div>
      </div>
    </div>
    <template #modal-footer="">
      <b-button size="sm" variant="danger" @click="cancel" >
        Hủy bỏ
      </b-button>
      <b-button ref="btn_add_service" size="sm" variant="success" @click="submit" >
        Thay đổi
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
import constants from '../../../constants/index';

// const alphaNumAndDotValidator = constants.ACCOUNT_CONST.REGEX_PASSWORD;

export default {
  props: {
    idModal: {
      type: String,
    },
    detail: {
      type: Object,
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      constants,
      name: '0',
      don_vi: '',
      code: '',
      dinh_ky: '',
    };
  },
  validations: {
    name: {
      required,
    },
    dataSubmit: {
      name: {
        required,
      },
      don_vi: {
        maxLength: maxLength(10)
      }
    },
  },
  computed: {
    ...mapGetters(['getErrorCodeService']),
    // dataSubmit() {
    //   const result = {
    //     name: this.detail.name,
    //     don_vi: this.detail.don_vi,
    //     code: this.detail.code,
    //     dinh_ky: this.detail.dinh_ky,
    //   };

    //   return result;
    // },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
    clearErrorValidate() {
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    cancel() {
      this.$bvModal.hide(this.idModal);
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
      if (this.$v.dataSubmit.$anyError) {
        return;
      }
      const payload = {
        id: this.detail.id,
        data: this.dataSubmit
      };
      
      // if staff_code null => delete staff_code
      // if (payload.staff_code === '') {
      //   delete payload.staff_code;
      // }
      const submitButton = this.$refs.btn_add_service;
      submitButton.classList.add('spinner', 'spinner-light', 'spinner-right');
      await this.$store.dispatch('updateService', payload);
      if (this.getErrorCodeService === 0) {
        this.clearErrorValidate();
        this.cancel()
        await this.$store.dispatch('getService', '');
        this.makeToastMessage(constants.COMMON_CONST.MESSAGE_UPDATE_SUCCEED, 'success');
      } else {
        this.makeToastMessage(constants.COMMON_CONST.MESSAGE_UPDATE_FAILED, 'danger');
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
.popup-add-service {
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
