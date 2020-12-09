<template>
  <div class="manage-account-container">
    <div class="manage-account-container__header">
      <Header />
    </div>
    <div class="manage-account-container__search-form" v-show="false">
      <b-form-input placeholder="Họ tên, username, ..."></b-form-input>
      <div class="manage-account-container__search-form__button">
        <Button :title="'Tìm kiếm'" :styleCss="styleCss" />
      </div>
    </div>
    <div class="manage-account-container__table">
      <b-table sticky-header selectable show-empty small Striped hover stacked="md" :items="setItemsTable" :fields="fields" >
        <!-- <template v-slot:cell(selected)="">
          <b-form-group>
            <input type="checkbox" />
          </b-form-group>
        </template> -->
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
      <b-modal id="modal-detail-account" no-close-on-backdrop size="lg" :title="userDetail.full_name">
        <PopupDetailAccount :userDetail="userDetail" @update="updateData"/>
        <template #modal-footer="">
          <b-button size="sm" variant="danger" @click="cancel">
            Hủy bỏ
          </b-button>
          <b-button size="sm" variant="success" @click="submit" :disabled="!canUpdate">
            Thay đổi
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
        // { key: 'selected', label: '' },
        { key: 'username', label: 'Tài khoản' },
        { key: 'employeeName', label: 'Nhân viên' },
        { key: 'role', label: 'Vai trò' },
        { key: 'staffCode', label: 'Mã nhân viên' },
        { key: 'company', label: 'Tên công ty' },
        { key: 'actions', label: 'Tùy chọn' },
      ],
      canUpdate: false,
      dataChanged: {},
    };
  },
  computed: {
    ...mapGetters(['getListAccount']),
    setItemsTable() {
      const items = [];
      this.getListAccount.forEach((item) => {
        items.push({
          username: item.username,
          employeeName: item.full_name,
          role: item.role,
          company: item.tenant.name,
          staffCode: item.staff_code,
        });
      });
      return items;
    },
    // getToken() {
    //   return window.sessionStorage.jwtToken;
    // },
  },
  methods: {
    getDetailAccount(row) {
      this.userDetail = this.getListAccount.find((item) => item.username === row.item.username);
      this.$store.dispatch('getTenant');
    },
    convertRole(role) {
      // change role to number
      let result;
      if (role === 'Admin') {
        result = 1;
      } else if (role === 'View') {
        result = 2;
      } else {
        result = 3;
      }
      return result;
    },
    updateData(newData) {
      // data before is changed
      const oldData = {
        full_name: this.userDetail.full_name,
        role: this.userDetail.role,
        staff_code: this.userDetail.staff_code,
        tenant: this.userDetail.tenant.id,
      };

      // check data is changed -> active button submit
      if (JSON.stringify(oldData) === JSON.stringify(newData.data)) {
        this.canUpdate = false;
      } else {
        this.canUpdate = true;
      }

      // data to submit api
      this.dataChanged = {
        data: {
          full_name: newData.data.full_name,
          role: this.convertRole(newData.data.role),
          staff_code: newData.data.staff_code,
          tenant: newData.data.tenant,
        },
        id: newData.id,
      };
    },
    async submit() {
      // update account
      await this.$store.dispatch('updateAccount', this.dataChanged);
      this.$bvModal.hide('modal-detail-account');
      await this.$store.dispatch('getAccount');
    },
    cancel() {
      this.$bvModal.hide('modal-detail-account');
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
td {
  vertical-align: middle !important;
}
</style>
