const COMMON_CONST = {
  MESSAGE_UPDATE_SUCCEED: 'Sửa thành công',
  MESSAGE_UPDATE_FAILE: 'Sửa thất bại',
  MESSAGE_ADD_SUCCEED: 'Tạo mới thành công',
  MESSAGE_ADD_FAILED: 'Tạo mới thất bại',
  MESSAGE_DELETE_SUCCEED: 'Xóa thành công',
  MESSAGE_DELETE_FAILED: 'Xóa mới thất bại',
}

const ACCOUNT_CONST = {
  HEADER_MANAGE_ACCOUNT: 'QUẢN LÝ TÀI KHOẢN',
  TITLE_MANAGE_ACCOUNT: 'Thêm tài khoản',
  ID_POPUP_ADD_ACCOUNT: 'modal-add-account',
  ID_POPUP_DETAIL_ACCOUNT: 'modal-detail-account',
  ID_POPUP_DELETE_ACCOUNT: 'modal-delete-account',
  CONTENT_POPUP_DELETE_ACCOUNT: 'Bạn có chắc chắn muốn xóa tài khoản này ?',
  TITLE_POPUP_ADD_ACCOUNT: 'Thêm tài khoản',
  TITLE_POPUP_DETAIL_ACCOUNT: 'Chi tiết tài khoản',
  TITLE_POPUP_DELETE_ACCOUNT: 'Xóa tài khoản',
  regexPassword: '^(?=.*[a-z])(?=.*[A-Z])(?=.*)[A-Za-z!@#$%^&*?]{8,50}$',
  ACTION: 'deleteAccount',
  LIST_ACTION: 'getAccount',
}

const CANHO_CONST = {
  HEADER_MANAGE: 'QUẢN LÝ CĂN HỘ',
  TITLE_MANAGE: 'Thêm căn hộ',
  ID_POPUP_ADD: 'modal-add-canho',
  ID_POPUP_DETAIL: 'modal-detail-canho',
  ID_POPUP_DELETE: 'modal-delete-canho',
  CONTENT_POPUP_DELETE: 'Bạn có chắc chắn muốn xóa căn hộ này ?',
  TITLE_POPUP_ADD: 'Thêm tài khoản',
  TITLE_POPUP_DELETE: 'Xóa căn hộ',
  ACTION: 'deleteCanHo',
  LIST_ACTION: 'getAppartment',
}

export default {
  COMMON_CONST,
  ACCOUNT_CONST,
  CANHO_CONST
};
