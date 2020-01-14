<!-- 登录页面 -->
<template>
  <div id="login_page">
    <div>
      <div style="textAlign:center; margin: 80px 0">
        <h1>OHHHHH!!!!!!!!!!</h1>
      </div>
      <a-form id="login_page_form" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: '请输入用户名!' }] }
            ]"
            placeholder="登录名"
            size="large"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入登录密码!' }] }
            ]"
            type="password"
            placeholder="登录密码"
            size="large"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            size="large"
            :loading="loading"
          >登录</a-button>
        </a-form-item>
      </a-form>
    </div>
    <div
      :style="{textAlign: 'center',margin: '48px 0 24px'}"
    >KOA_LEARN</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$api.user
            .login(values)
            .then(res => {
              if (res.code === 200) {
                this.$message.success("登录成功！");
                sessionStorage.setItem("token", res.token);
                this.$router.push({
                  path: "/home",
                });
              }
              this.loading = false;
            })
            .catch(e => {
              this.loading = false;
            });
        }
      });
    }
  }
};
</script>
<style scope>
#login_page {
  height: 100vh;
  width: 100%;
  background: #f0f2f5;
  padding: 32px 0 24px;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#login_page_form {
  width: 388px;
  margin: 0 auto;
}
#login_page_form .login-form-forgot {
  float: right;
}
#login_page_form .login-form-button {
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
}
</style>
