<template>
  <b-modal :id="idModal" no-close-on-backdrop :title="titleModal" size="xl">
    <div class="popup-add-chunha">
      <div class="justify-content-between">
        <b-row>
          <b-col cols="4" class="d-flex">
            <label for="fullName" class="align-items-center w-50"><span class="text-color-red">*</span> Tên chủ nhà:</label>
            <b-form-input placeholder="" id="fullName" ></b-form-input>
          </b-col>
          <b-col cols="4" class="d-flex">
            <label for="dob" class="align-items-center w-50">Ngày sinh:</label>
            <b-form-input placeholder="" id="dob" ></b-form-input>
          </b-col>
          <b-col cols="4" class="d-flex">
            <label for="address" class="align-items-center w-50">Địa chỉ:</label>
            <b-form-input placeholder="" id="address" ></b-form-input>
          </b-col>
        </b-row>
      </div>

      <div>
        <h2 class="header mt-5 mb-5">THÔNG TIN LIÊN LẠC</h2>
        <b-row>
          <b-col class="d-flex" cols="4">
            <label for="phoneNumber" class="align-items-center w-50"><span class="text-color-red">*</span> Số điện thoại:</label>
            <b-form-input placeholder="" id="phoneNumber"></b-form-input>
          </b-col>

          <b-col class="d-flex" cols="4">
            <b-form-checkbox
              id="checkbox-phone"
              name="checkbox-phone"
              class="w-50 align-items-center"
              v-model="phoneNumberSub"
            >
              SDT dự phòng
            </b-form-checkbox>
            <b-form-input placeholder="" id="phoneNumber-sub" v-show="phoneNumberSub"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col class="d-flex" cols="4">
            <label for="email" class="align-items-center w-50"><span class="text-color-red">*</span> Email:</label>
            <b-form-input placeholder="" id="email" ></b-form-input>
          </b-col>

          <b-col class="d-flex" cols="4">
            <b-form-checkbox
              id="checkbox-email"
              name="checkbox-email"
              class="w-50 align-items-center"
              v-model="emailSub"
            >
              Email dự phòng
            </b-form-checkbox>
            <b-form-input placeholder="" id="email-sub" v-show="emailSub"></b-form-input>
          </b-col>
        </b-row>
      </div>

      <div>
        <h2 class="header mt-5 mb-5">THÔNG TIN GIẤY TỜ TÙY THÂN</h2>
        <b-row>
          <b-col cols="2">
            <b-form-checkbox
              id="checkbox-cmnd"
              name="checkbox-cmnd"
              class="mb-2"
              v-model="checkboxCMT"
            >
              Chứng minh thư nhân dân
            </b-form-checkbox>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="cmnd" class="align-items-center w-50" v-show="checkboxCMT">Số CMND:</label>
              <b-form-input placeholder="" id="cmnd" v-show="checkboxCMT"></b-form-input>
            </div>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="noicap-cmnd" class="align-items-center w-50" v-show="checkboxCMT">Nơi cấp:</label>
              <b-form-input placeholder="" id="noicap-cmnd" v-show="checkboxCMT"></b-form-input>
            </div>
          </b-col>

          <b-col cols="4" class="d-flex">
            <div class="d-flex col">
              <label for="ngaycap-cmnd" class="align-items-center w-25" v-show="checkboxCMT">Ngày cấp:</label>
              <div v-show="checkboxCMT" class="w-75">
                <b-form-datepicker id="ngaycap-cmnd"></b-form-datepicker>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col cols="2">
            <b-form-checkbox
              id="checkbox-cccd"
              name="checkbox-cccd"
              class="mb-2"
              v-model="checkboxCCCD"
            >
              Căn cước công dân
            </b-form-checkbox>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="cccd" class="align-items-center w-50" v-show="checkboxCCCD">Số CCCD:</label>
              <b-form-input placeholder="" id="cccd" v-show="checkboxCCCD"></b-form-input>
            </div>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="noicap-cccd" class="align-items-center w-50" v-show="checkboxCCCD">Nơi cấp:</label>
              <b-form-input placeholder="" id="noicap-cccd" v-show="checkboxCCCD"></b-form-input>
            </div>
          </b-col>

          <b-col cols="4" class="d-flex">
            <div class="d-flex col">
              <label for="ngaycap-cccd" class="align-items-center w-25" v-show="checkboxCCCD">Ngày cấp:</label>
              <div class="w-75" v-show="checkboxCCCD">
                <b-form-datepicker id="ngaycap-cccd"></b-form-datepicker>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col cols="2">
            <b-form-checkbox
              id="checkbox-hc"
              name="checkbox-hc"
              class="mb-2"
              v-model="checkboxHC"
            >
              Hộ chiếu
            </b-form-checkbox>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="hc" class="align-items-center w-50" v-show="checkboxHC">Số hộ chiếu:</label>
              <b-form-input placeholder="" id="hc" v-show="checkboxHC"></b-form-input>
            </div>
          </b-col>

          <b-col cols="3" class="d-flex">
            <div class="d-flex col p-0">
              <label for="ngaycap-hc" class="align-items-center w-32" v-show="checkboxHC">Ngày cấp:</label>
              <div v-show="checkboxHC" class="w-68">
                <b-form-datepicker id="ngaycap-hc"></b-form-datepicker>
              </div>
            </div>
          </b-col>

          <b-col cols="4" class="d-flex">
            <div class="d-flex col">
              <label for="ngayhethan-hc" class="align-items-center w-25" v-show="checkboxHC">Ngày hết hạn:</label>
              <div v-show="checkboxHC" class="w-75">
                <b-form-datepicker id="ngayhethan-hc"></b-form-datepicker>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div>
        <h2 class="header mt-5 mb-5">THÔNG TIN TÀI KHOẢN NGÂN HÀNG</h2>
        <b-row>
          <b-col cols="3" class="d-flex">
            <label for="accountBank" class="align-items-center w-50">Số Tk:</label>
            <b-form-input placeholder="" id="accountBank"></b-form-input>
          </b-col>
          <b-col cols="3" class="d-flex">
            <label for="bank" class="align-items-center w-50">Ngân hàng:</label>
            <b-form-input placeholder="" id="bank"></b-form-input>
          </b-col>
          <b-col cols="3" class="d-flex">
            <label for="branch" class="align-items-center w-50">Chi nhánh:</label>
            <b-form-input placeholder="" id="branch"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col>
            <b-form-checkbox
              id="checkbox-account-bank-2"
              name="checkbox-account-bank-2"
              v-model="bankAccountSub"
            >
              Tài khoản ngân hàng dự phòng
            </b-form-checkbox>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="accountBank-sub" class="align-items-center w-50" v-show="bankAccountSub">Số Tk:</label>
              <b-form-input placeholder="" id="accountBank-sub" v-show="bankAccountSub"></b-form-input>
            </div>
          </b-col>
          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="bank-sub" class="align-items-center w-50" v-show="bankAccountSub">Ngân hàng:</label>
              <b-form-input placeholder="" id="bank-sub" v-show="bankAccountSub"></b-form-input>
            </div>
          </b-col>
          <b-col cols="3" class="d-flex">
            <div class="d-flex">
              <label for="branch-sub" class="align-items-center w-50" v-show="bankAccountSub">Chi nhánh:</label>
              <b-form-input placeholder="" id="branch-sub" v-show="bankAccountSub"></b-form-input>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col class="d-flex">
            <label for="textarea-note" class="align-items-center w-25">Ghi chú:</label>
            <b-form-textarea
              id="textarea-note"
              placeholder="Nhập ghi chú"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
    </div>
    <template #modal-footer="">
      <b-button size="sm" variant="danger" @click="cancel" >
        Hủy bỏ
      </b-button>
      <b-button size="sm" variant="success" @click="submit" >
        Tạo
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    titleModal: {
      type: String,
    },
    idModal: {
      type: String,
    },
  },
  data() {
    return {
      phoneNumberSub: false,
      emailSub: false,
      checkboxCMT: false,
      checkboxCCCD: false,
      checkboxHC: false,
      bankAccountSub: false,
    };
  },
  methods: {
    cancel() {
      this.$bvModal.hide(this.idModal);
    },
    submit() {},
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 40%;
  border-bottom: 3px solid #6a02e8;
  h1 {
    font-weight: 900;
  }
}
.w-32 {
  width: 32%;
}
.w-68 {
  width: 68%;
}
</style>

<style lang="scss">
.justify-content-between {
  display: flex;
  justify-content: space-between;
}
.align-items-center {
  display: flex;
  align-items: center;
}
.text-color-red {
  color: red;
}
textarea {
  overflow: auto;
}
.modal-xl {
  max-width: 70vw !important;
}
</style>
