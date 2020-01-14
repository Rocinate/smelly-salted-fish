<!-- 登录页面 -->
<template>
  <div>
    <a-table
      :rowKey="record => record.id"
      :columns="columns"
      :dataSource="data"
      :loading="loading"
      :pagination="pagination"
      @change="handleChange"
      bordered
    >
      <template slot="title">
        <a-form :form="form" @submit="handleAdd" layout="inline">
          <a-form-item>
            <a-input v-decorator="['username']"></a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">添加</a-button>
          </a-form-item>
        </a-form>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a href="javascript:;" @click="del(record.id)">删除</a>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "id",
    dataIndex: "id"
  },
  {
    title: "名称",
    dataIndex: "username"
  },
  {
    title: "操作",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
    width: 180
  }
];
export default {
  data() {
    return {
      loading: false,
      pagination: {
        pageSize: 10,
        current: 1,
        total: 0
      },
      data: [],
      columns: columns
    };
  },
  created() {
    this.form = this.$form.createForm(this);
    this.handleSubmit();
  },
  methods: {
    handleSubmit(e) {
      if (e) {
        e.preventDefault();
      }
      this.loading = true;
      this.$api.management.getList(this.pagination).then(res => {
        this.data = res.data.rows;
        this.pagination.total = res.data.count;
        this.loading = false;
      });
    },
    handleAdd(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          this.$api.management
            .add(values)
            .then(res => {
              this.handleSubmit();
              this.loading = false;
            })
            .catch(e => {
              this.loading = false;
            });
        }
      });
    },
    handleChange(pagination, filters, sorter) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.handleSubmit();
    },
    del(id) {
      this.$api.management.del({id: id})
      .then(res => {
        this.handleSubmit()
      })
    }
  }
};
</script>
<style scope>
</style>
