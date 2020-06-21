<template>
  <div class="page">
    <el-table :data="customerList" border style="width: 100%;">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column label="商家名" show-overflow-tooltip align="center">
        <template scope="scope">
          <div style="color: blue;cursor: pointer;">
            <span>{{scope.row.name}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="50px" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="name" label="真实姓名" v-if="false" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="telphone" label="商家联系方式" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="score" label="评分" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="zk" label="折扣" width="50px" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="notice" label="商家宣言" show-overflow-tooltip align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get } from '@/api/axios.js';
export default {
  data() {
    return {
      customerList: []
    };
  },
  created() {
    this.getCustomerData();
  },
  methods: {
    async getCustomerData() {
      let res = await get('/store/findAll');
      console.log('res', res);
      this.customerList = res.data;
    },
    async deleteCustomer(id) {
      console.log('is', id);
      let params = {
        id: id
      };
      let res = await get('/customer/deleteById');
      console.log('res', res);
    }
  }
};
</script>