<template>
  <b-modal id="modal-xl" size="xl" title="Tạo bộ hợp đồng" v-model="show">
    <div class="card card-custom">
      <div class="card-body p-0">
        <!--begin: Wizard-->
        <div
          class="wizard wizard-2"
          id="kt_wizard_v2"
          data-wizard-state="step-first"
          data-wizard-clickable="true"
        >
          <!--begin: Wizard Nav -->
          <div class="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
            <div class="wizard-steps">
              <div
                class="wizard-step"
                v-for="step in filterStateStep"
                @click="currentStep = step.id"
                :key="step.id"
                :data-wizard-state="currentStep === step.id ? 'current' : 'none'"
                :style="{
                  backgroundColor: currentStep === step.id ? '#F3F6F9' : 'transparent'
                }"
              >
                <div class="wizard-wrapper">
                  <div class="wizard-icon">
                    <span class="svg-icon svg-icon-2x">
                      <inline-svg :src="step.icon" />
                    </span>
                  </div>
                  <div class="wizard-label">
                    <h3 class="wizard-title">{{ step.name }}</h3>
                    <div class="wizard-desc">{{ step.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end: Wizard Nav -->

          <!--begin: Wizard Body -->
          <div class="wizard-body py-8 px-8 py-lg-20 px-lg-10">
            <!--begin: Wizard Form-->
            <div class="row">
              <div class="offset-xxl-2 col-xxl-8">
                <div v-if="currentStep === 1">
                  <div class="form-group">
                    <label>Tên bộ hợp đồng</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="fname"
                      placeholder="Nhập tên bộ hợp đồng"
                    />
                  </div>
                  <div class="form-group">
                    <label>Nhân viên:</label>
                    <b-form-select
                      class="form-control form-control-solid form-control-lg"
                      :options="listEmployee"
                    ></b-form-select>
                  </div>
                  <div class="form-group">
                    <label>Người thuê nhà:</label>
                    <b-form-select
                      :options="listEndUser"
                      class="form-control form-control-solid form-control-lg"
                    ></b-form-select>
                  </div>
                  <div class="form-group">
                    <label>Căn hộ:</label>
                    <b-form-select
                      :options="listApartment"
                      class="form-control form-control-solid form-control-lg"
                    ></b-form-select>
                  </div>
                  <div class="form-group">
                    <label>Loại tiền tệ</label>
                    <b-form-select
                      :options="listTypeCurrency"
                      v-model="typeCurrency"
                      class="form-control form-control-solid form-control-lg"
                    ></b-form-select>
                  </div>
                  <div class="form-group d-flex">
                    <label
                      class="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4"
                    >
                      <input type="checkbox" v-model="isBrokerageContract"/>
                      <span class="mr-2"></span>
                      Hợp đồng môi giới
                    </label>
                    <label
                      class="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4"
                    >
                      <input type="checkbox" v-model="isServiceContract" />
                      <span class="mr-2"></span>
                      Hợp đồng dịch vụ
                    </label>
                  </div>
                </div>
                <div v-if="currentStep === 2">
                  <!-- <div class="form-group">
                    <label>Khách thuê:</label>
                    <b-form-select
                      class="form-control form-control-solid form-control-lg"
                    ></b-form-select>
                  </div> -->
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Ngày bắt đầu hợp đồng:</label>
                        <b-form-datepicker
                          class="form-control form-control-solid form-control-lg"
                        ></b-form-datepicker>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Ngày kết thúc hợp đồng:</label>
                        <b-form-datepicker
                          class="form-control form-control-solid form-control-lg"
                        ></b-form-datepicker>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Ngày nhận nhà:</label>
                        <b-form-datepicker
                          class="form-control form-control-solid form-control-lg"
                        ></b-form-datepicker>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Ngày trả nhà:</label>
                        <b-form-datepicker
                          class="form-control form-control-solid form-control-lg"
                        ></b-form-datepicker>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Kỳ thanh toán</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="fname"
                      placeholder="Nhập tên bộ hợp đồng"
                    />
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Giá thuê:</label>
                        <div class="d-flex align-items-center">
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            placeholder="Nhập tên bộ hợp đồng"
                          /><span class="h1 ml-2 mb-0 text-primary"
                            >/<span class="h3">tháng</span></span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Tiền cọc trước:</label>
                        <div class="d-flex align-items-center">
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            placeholder="Nhập tên bộ hợp đồng"
                          /><span class="h1 ml-2 mb-0 text-primary"
                            >/<span class="h3">tháng</span></span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Điều kiện gia hạn:</label>
                        <b-form-textarea
                          class="form-control-solid"
                          placeholder="Enter something..."
                          rows="3"
                          no-resize
                          max-rows="6"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Ghi chú:</label>
                        <b-form-textarea
                          class="form-control-solid"
                          placeholder="Enter something..."
                          rows="3"
                          no-resize
                          max-rows="6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="currentStep === 3 && isBrokerageContract">
                  <div class="form-group">
                    <label>Tiền môi giới:</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="fname"
                      placeholder="Nhập tên bộ hợp đồng"
                    />
                  </div>
                  <div class="form-group">
                    <label>Ghi chú:</label>
                    <b-form-textarea
                      class="form-control-solid"
                      v-model="text"
                      placeholder="Enter something..."
                      rows="6"
                      max-rows="6"
                      no-resize
                    />
                  </div>
                </div>
                <div v-if="currentStep === 4 && isServiceContract">
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Tiền thực lĩnh:</label>
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Tiền dịch vụ:</label>
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Thời gian thanh toán:</label>
                    <b-form-datepicker
                      class="form-control form-control-solid form-control-lg"
                    ></b-form-datepicker>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <label>Dịch vụ:</label>
                    </div>
                    <div class="col-4">
                      <label>Định mức:</label>
                    </div>
                    <div class="col-4">
                      <label>Kỳ thanh toán</label>
                    </div>
                    <div class="w-100 d-flex mb-4">
                      <div class="col-4">
                        <b-form-select
                          :options="listService"
                          class="form-control form-control-solid form-control-lg"
                        ></b-form-select>
                      </div>
                      <div class="col-4">
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                      <div class="col-4">
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                      <b-button
                        ><span class="svg-icon svg-icon-2x d-flex align-items-center mr-0">
                          <inline-svg src="media/svg/icons/Home/Trash.svg" /> </span
                      ></b-button>
                    </div>
                    <!-- <div class="w-100 d-flex mb-4">
                      <div class="col-4">
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                      <div class="col-4">
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                      <div class="col-4">
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="fname"
                          placeholder="Nhập tên bộ hợp đồng"
                        />
                      </div>
                    </div> -->
                    <div class="w-100 d-flex justify-content-end pr-4">
                      <b-button size="sm" variant="outline-primary">
                        Thêm dịch vụ
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard-->
            </div>
          </div>
          <!--end: Wizard Body -->
        </div>
        <!--end: Wizard-->
      </div>
    </div>
    <template #modal-footer="{ ok, cancel, hide }">
      <div class="d-flex">
        <div class="mr-2">
          <button
            class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
            data-wizard-type="action-prev"
          >
            Previous
          </button>
        </div>
        <div>
          <!-- <button
                      v-on:click="submit"
                      class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-submit"
                    >
                      Submit
                    </button> -->
          <button
            class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
            data-wizard-type="action-next"
          >
            Next Step
          </button>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  minLength, required, maxLength,
} from 'vuelidate/lib/validators';
import api from '../../core/services/api/api';

export default {
  name: 'DialogCreateContract',
  mixins: [validationMixin],
  components: {},
  data() {
    return {
      show: true,
      currentStep: 1,
      listEmployee: [],
      listEndUser: [],
      listApartment: [],
      listTypeCurrency: [
        {
          id: 1,
          text: 'VNĐ',
        },
        {
          id: 2,
          text: 'USD',
        },
        {
          id: 1,
          text: 'JPN',
        },
      ],
      listService: [],
      typeCurrency: 1,
      isBrokerageContract: false,
      isServiceContract: false,
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(30),
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  computed: {
    filterStateStep() {
      const cloneStateStep = [
        {
          id: 1,
          name: 'Thông tin cơ bản',
          description: 'Chi tiết thông tin cơ bản',
          icon: 'media/svg/icons/General/User.svg',
        },
        {
          id: 2,
          name: 'Hợp đồng cho thuê',
          description: 'Chi tiết thông tin hợp đồng cho thuê',
          icon: 'media/svg/icons/Map/Compass.svg',
        },
      ];
      if (this.isBrokerageContract) {
        cloneStateStep.push({
          id: cloneStateStep.length + 1,
          name: 'Hợp đồng môi giới',
          description: 'Chi tiết thông tin hợp đồng môi giới',
          icon: 'media/svg/icons/General/Thunder-move.svg',
        });
      }
      if (this.isServiceContract) {
        cloneStateStep.push({
          id: cloneStateStep.length + 1,
          name: 'Hợp đồng dịch vụ',
          description: 'Chi tiết thông tin hợp đồng dịch dịch vụ',
          icon: 'media/svg/icons/Map/Position.svg',
        });
      }
      return cloneStateStep;
    },
  },
  methods: {
    submit(e) {},
    async getListEmployees() {
      const res = await api('getAccount', '');
      if (res.success) {
        this.listEmployee = [{ value: null, text: 'Hãy chọn nhân viên', disabled: true }, ...res.data.data.map((item) => ({ value: item.id, text: item.full_name }))];
      }
    },
    async getListEndUser() {
      const res = await api('getKhachThue', '');
      if (res.success) {
        this.listEndUser = [{ value: null, text: 'Hãy chọn khách thuê', disabled: true }, ...res.data.data.map((item) => ({ value: item.id, text: item.name }))];
      }
    },
    async getListApartment() {
      const res = await api('getCanHo', '');
      if (res.success) {
        this.listApartment = [{ value: null, text: 'Hãy chọn căn hộ', disabled: true }, ...res.data.data.map((item) => ({ value: item.id, text: item.name }))];
      }
    },
    async getListService() {
      const res = await api('getService', '');
      if (res.success) {
        this.listService = [{ value: null, text: 'Hãy chọn dịch vụ', disabled: true }, ...res.data.data.map((item) => ({ value: item.id, text: item.name }))];
      }
    },
  },
  created() {
    this.getListEmployees();
    this.getListEndUser();
    this.getListApartment();
    this.getListService();
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-2.scss";
.modal-body {
  padding: 0px;
}
.custom-select {
  height: calc(1.5em + 1.65rem + 2px);
  padding: 0.825rem 1.42rem;
}
</style>
