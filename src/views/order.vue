<template>
  <div class="page">
    <el-table :data="customerList" border style="width: 100%;">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column label="商家名" show-overflow-tooltip align="center">
        <template scope="scope">
          <div style="color: blue;cursor: pointer;">
            <span>{{scope.row.store_name}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="sj" label="时间" v-if="false" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip width="110" align="center">
        <template scope="scope">
          <span>{{wcztOption[scope.row.status].text}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get } from '@/api/axios.js';
export default {
  data() {
    return {
      customerList: [],
      wcztOption: [
        { text: '未付款', value: '0' },
        { text: '配送中', value: '1' },
        { text: '待评价', value: '2' },
        { text: '已完成', value: '3' }
      ]
    };
  },
  created() {
    this.getCustomerData();
  },
  methods: {
    async getCustomerData() {
      let res = await get('/order/findAll');
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