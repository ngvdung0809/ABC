<template>
  <div class="change-password-container">
    <h1 class="text-center">THAY ĐỔI MẬT KHẨU</h1>
    <div class="d-grid">
      <div></div>
      <div class="mt-10">
        <div class="form-input d-flex">
          <label for="old-password">Mật khẩu hiện tại:</label>
          <div>
            <b-form-input
              placeholder=""
              id="old-password"
            ></b-form-input>
          </div>
        </div>

        <div class="form-input d-flex">
          <label for="username">Mật khẩu mới:</label>
          <div>
            <b-form-input
              placeholder=""
              id="username"
            ></b-form-input>
          </div>
        </div>

        <div class="form-input d-flex">
          <label for="username">Xác nhận mật khẩu mới:</label>
          <div>
            <b-form-input
              placeholder=""
              id="username"
            ></b-form-input>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.change-password-container {
  .d-grid {
    display: grid;
    grid-template-columns: 25% 50% 25%;
  }
}
</style>
