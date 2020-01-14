<!-- 登录页面 -->
<template>
  <div>
    <a-table
      :rowKey="record => record.id"
      :columns="columns"
      :dataSource="data"
      :loading="loading"
      :pagination="false"
      bordered
    >

    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: 'id',
  dataIndex: 'id'
},{
  title: '名称',
  dataIndex: 'username'
}]
export default {
  data() {
    return {
      loading: false,
      page: {
        page: 1,
        pageSize: 10
      },
      data:[],
      columns: columns
    };
  },
  created() {
    this.form = this.$form.createForm(this);
    this.handleSubmit()
  },
  methods: {
    handleSubmit(e) {
      if(e) {
        e.preventDefault();
      }
      this.loading = true;
      this.$api.management.getList(this.page)
      .then(res => {
        this.data = res.data
      })
    }
  }
};
</script>
<style scope>

</style>
