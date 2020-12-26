<template>
  <b-modal :id="idModal" no-close-on-backdrop size="lg" :title="titleModal" @hidden="cancel">
    <div class="popup-add-toanha ml-3 mr-3">
      <div class="form-input">
        <label for="name">
          <span class="text-color-required">*</span> Tên tòa nhà:
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
            Vui lòng nhập tên tòa nhà
          </b-form-invalid-feedback>
        </div>
      </div>
      <div class="form-input">
        <label for="address">
          Địa chỉ:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="address"
            v-model="address"
          ></b-form-input>
        </div>
      </div>
      <div class="form-input">
        <label for="phuong">
          Phường:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="phuong"
            v-model="phuong"
          ></b-form-input>
        </div>
      </div>
      <div class="form-input">
        <label for="district">
          <span class="text-color-required">*</span> Quận:
        </label>
        <select id="district" class="b-dropdown" v-model="district" >
          <option v-for="district in ListDistrict" :key="district.id" :value="district.id">{{
            district.name
          }}</option>
        </select>
      </div>
      <div class="form-input">
        <label for="city">
          Thành phố:
        </label>
        <div>
          <b-form-input
            placeholder=""
            id="city"
            v-model="city"
          ></b-form-input>
        </div>
      </div>
    </div>
    <template #modal-footer="">
      <b-button size="sm" variant="danger" @click="cancel" >
        Hủy bỏ
      </b-button>
      <b-button ref="btn_add_service" size="sm" variant="success" @click="submit" >
        Tạo
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
import constants from '../../../constants/index';
import api from '../../../core/services/api/api'

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
      name: '',
      address: '',
      phuong: '',
      district: 0,
      city: '',
      ListDistrict: [],
      constants,
    };
  },
  validations: {
    name: {
      required,
    },
  },
  created() {
    this.getListDistrict()
  },
  computed: {
    ...mapGetters(['getErrorCodeToaNha'])
  },
  watch: {
    ListDistrict: {
      handler(val) {
        this.district = val[0]?.id;
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
    async getListDistrict() {
      const response = await api('listDistrict');
      if (response.data.error_code === 0) {
        this.ListDistrict = response.data.data;
      } else {
        this.makeToastMessage(response.data.message, 'danger');
      }
    },
    clearData() {
      this.name = '';
      this.address = '';
      this.phuong = '';
      this.district = this.ListDistrict[0]?.id;
      this.city = '';
    },
    resetData() {
      this.data = {
        name: this.detail.name,
        don_vi: this.detail.don_vi,
        code: this.detail.code,
        dinh_ky: this.detail.dinh_ky,
      }
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    clearErrorValidate() {
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    cancel() {
      this.$bvModal.hide(this.idModal);
      this.clearData();
      this.clearErrorValidate();
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
        name: this.name,
        address: this.address,
        phuong: this.phuong,
        district: this.district,
        city: this.city
      };
      const submitButton = this.$refs.btn_add_service;
      submitButton.classList.add('spinner', 'spinner-light', 'spinner-right');
      await this.$store.dispatch('addBuilding', payload);
      if (this.getErrorCodeToaNha === 0) {
        this.clearErrorValidate();
        this.cancel()
        await this.$store.dispatch('getBuilding', '');
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
.popup-add-toanha {
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
