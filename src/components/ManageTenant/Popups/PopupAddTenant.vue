<template>
  <b-modal :id="idModal" no-close-on-backdrop size="xl" :title="titleModal">
    <div class="popup-add-chunha">
      <div class="justify-content-between">
        <div class="form-input d-flex width-33">
          <label for="fullName" class="width-50"><span class="text-color-red">*</span> Tên chủ nhà:</label>
          <b-form-input placeholder="" id="fullName" ></b-form-input>
        </div>

        <div class="form-input d-flex width-33">
          <label for="dob" class="width-50">Ngày sinh:</label>
          <b-form-input placeholder="" id="dob" ></b-form-input>
        </div>

        <div class="form-input d-flex width-33">
          <label for="address" class="width-50">Địa chỉ:</label>
          <b-form-input placeholder="" id="address" ></b-form-input>
        </div>
      </div>

      <div>
        <h1 class="header mt-5 mb-5">THÔNG TIN LIÊN LẠC</h1>
        <div class="form-input d-flex width-60 mb-4">
          <div class="d-flex width-60">
            <label for="phoneNumber" class="width-60 align-items-center" ><span class="text-color-red">*</span> Số điện thoại:</label>
            <b-form-input placeholder="" id="phoneNumber" ></b-form-input>
          </div>

          <div class="ml-4 align-items-center">
            <b-form-checkbox
              id="checkbox-phone"
              name="checkbox-phone"
            >
              SDT dự phòng
            </b-form-checkbox>
          </div>
        </div>

        <div class="form-input d-flex width-60">
          <div class="d-flex width-60">
            <label for="email" class="width-60 align-items-center" >Email:</label>
            <b-form-input placeholder="" id="email" ></b-form-input>
          </div>

          <div class="ml-4 align-items-center">
            <b-form-checkbox
              id="checkbox-email"
              name="checkbox-email"
            >
              Email dự phòng
            </b-form-checkbox>
          </div>
        </div>
      </div>

      <div>
        <h1 class="header mt-5 mb-5">THÔNG TIN GIẤY TỜ TÙY THÂN</h1>
        <div>
          <b-form-checkbox
            id="checkbox-cmnd"
            name="checkbox-cmnd"
            class="mb-2"
          >
            Chứng minh thư nhân dân
          </b-form-checkbox>

          <b-form-checkbox
            id="checkbox-cccd"
            name="checkbox-cccd"
            class="mb-2"
          >
            Căn cước công dân
          </b-form-checkbox>

          <b-form-checkbox
            id="checkbox-hc"
            name="checkbox-hc"
            class="mb-2"
          >
            Hộ chiếu
          </b-form-checkbox>
        </div>
      </div>

      <div>
        <h1 class="header mt-5 mb-5">THÔNG TIN TÀI KHOẢN NGÂN HÀNG</h1>
        <div>
          <div class="d-flex justify-content-between mb-3">
            <div class="d-flex">
              <label for="accountBank" class="width-60 align-items-center" >Số Tk:</label>
              <b-form-input placeholder="" id="accountBank" ></b-form-input>
            </div>

            <div class="d-flex">
              <label for="accountName" class="width-60 align-items-center" >Tên Tk:</label>
              <b-form-input placeholder="" id="accountName" ></b-form-input>
            </div>
            
            <div class="d-flex">
              <label for="bank" class="width-60 align-items-center" >Ngân hàng:</label>
              <b-form-input placeholder="" id="bank" ></b-form-input>
            </div>

            <div class="d-flex">
              <label for="branch" class="width-60 align-items-center" >Chi nhánh:</label>
              <b-form-input placeholder="" id="branch" ></b-form-input>
            </div>
          </div>

          <div>
            <b-form-checkbox
              id="checkbox-account-bank-2"
              name="checkbox-account-bank-2"
              class="mb-2"
            >
              Tài khoản ngân hàng dự phòng
            </b-form-checkbox>
          </div>

          <div class="d-flex">
            <label for="branch" class="width-10 align-items-center" >Ghi chú:</label>
            <b-form-textarea
              id="textarea"
              placeholder="Nhập ghi chú"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </div>
        </div>
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
  methods: {
    cancel() {
      this.$bvModal.hide(this.idModal);
    },
    submit() {},
  },
}
</script>

<style lang="scss" scoped>
.width-33 {
  width: 33%;
}
.width-50 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  padding-right: 12px;
}
.header {
  width: 40%;
  border-bottom: 3px solid #6a02e8;
  h1 {
    font-weight: 900;
  }
}
.width-60 {
  width: 60%;
}
.width-10 {
  width: 10%;
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
</style>
