<template>
  <div class="manage-account-container">
    <div class="manage-account-container__header">
      <Header />
    </div>
    <div class="manage-account-container__search-form">
      <b-form-input placeholder="Họ tên, username, ..."></b-form-input>
      <div class="manage-account-container__search-form__button">
        <Button :title="'Tìm kiếm'" :styleCss="styleCss" />
      </div>
    </div>
    <div class="manage-account-container__table">
      <b-table show-empty small stacked="md" :items="setItemsTable" :fields="fields">
        <template #cell(actions)="row">
          <div class="show-detail">
            <inline-svg
              src="media/svg/icons/Design/Edit.svg"
              class="edit-svg"
              @click="getDetailAccount(row)"
              v-b-modal.modal-detail-account
            />
             <inline-svg
              src="media/svg/icons/General/Trash.svg"
              class="delete-svg"
              @click="getDetailAccount(row)"
              v-b-modal.modal-detail-account
            />
          </div>
        </template>
      </b-table>
    </div>

    <div>
      <b-modal id="modal-detail-account" size="lg" :title="userDetail.full_name">
        <PopupDetailAccount :userDetail="userDetail" />
        <template #modal-footer="{ cancel,ok }">
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
          <b-button size="sm" variant="success" @click="ok()">
            OK
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Header from '../../components/ManageAccount/Headers/Header.vue';
import Button from '../../components/ManageAccount/Buttons/Button.vue';
import PopupDetailAccount from '../../components/ManageAccount/Popups/PopupDetailAccount.vue';

export default {
  name: 'ManageAccount',
  components: {
    Header,
    PopupDetailAccount,
    Button,
  },
  data() {
    return {
      styleCss: 'background: #FFFFFF;color:#333333;',
      userDetail: {},
      fields: [
        { key: 'username', label: 'Tài khoản' },
        { key: 'employeeName', label: 'Nhân viên' },
        { key: 'role', label: 'Vai trò' },
        { key: 'staffCode', label: 'Mã nhân viên' },
        { key: 'address', label: 'Địa chỉ' },
        { key: 'actions', label: 'Tùy chọn' },
      ],
      responseAllAccount: {
        error_code: 0,
        message: 'Success',
        data: [
          {
            id: 1,
            username: 'dungnv',
            full_name: 'Nguyễn Văn Dũng',
            role: 'Nông dân',
            staff_code: 'dungnv01',
            tenant: {
              id: 1,
              name: 'TEst',
              address: 'Hà Nội',
              description: null,
              phone: 'a',
              phone2: null,
              email: 'a',
              email2: null,
              dkkd: 'a',
              tax_code: 'a',
              rep: 'a',
              rep_role: 'a',
              ten_tk: 'a',
              so_TK: 'a',
              chi_nhanh: 'a',
              ngan_hang: 'a',
              ten_tk2: null,
              so_TK2: null,
              chi_nhanh2: null,
              ngan_hang2: null,
              note: null,
            },
          },
          {
            id: 2,
            username: 'tungdv',
            full_name: 'Đào Văn Tùng',
            role: 'Shipper',
            staff_code: 'tungdv01',
            tenant: {
              id: 1,
              name: 'TEst',
              address: 'Hà Nội',
              description: null,
              phone: 'a',
              phone2: null,
              email: 'a',
              email2: null,
              dkkd: 'a',
              tax_code: 'a',
              rep: 'a',
              rep_role: 'a',
              ten_tk: 'a',
              so_TK: 'a',
              chi_nhanh: 'a',
              ngan_hang: 'a',
              ten_tk2: null,
              so_TK2: null,
              chi_nhanh2: null,
              ngan_hang2: null,
              note: null,
            },
          },
        ],
      },
    };
  },
  computed: {
    setItemsTable() {
      const items = [];
      this.responseAllAccount.data.forEach((item) => {
        items.push({
          username: item.username,
          employeeName: item.full_name,
          role: item.role,
          staffCode: item.staff_code,
          address: item.tenant.address,
        });
      });
      return items;
    },
  },
  methods: {
    getDetailAccount(row) {
      this.userDetail = this.responseAllAccount.data.find((item) => item.username === row.item.username);
    },
    ok() {
      console.log('ok');
    },
  },
};
</script>

<style lang='scss' scoped>
.manage-account-container {
  &__header {
    margin-bottom: 12px;
  }
  &__search-form {
    display: grid;
    grid-template-columns: 80% 20%;
    padding: 12px 0px;
    &__button {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__table {
    .show-detail {
      svg {
        border-radius: 50%;
        background: #1a9fed;
        padding: 5px;
        width: 32px;
        height: 32px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang='scss'>
thead {
  background: #28c5bd;
  opacity: 0.7;
  color: #ffffff;
}
</style>
