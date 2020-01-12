<!-- 登录页面 -->
<template>
  <div id="login_page">
    <div>
      <p style="text-align:center;font-size: 50px;margin-top: 20rem">OHHHHH!!!!!!!</p>
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
          this.$api.login
            .login(values)
            .then(res => {
              if (res.code === 0) {
                this.$message.success("登录成功！");
                sessionStorage.setItem("token", 'over');
                this.$router.push({
                  path: "/index/overview",
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
