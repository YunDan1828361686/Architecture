<template>
  <div>
    <cascaderMulti
      seach
      multiple
      :data="cascaderMulti_data"
      @on-change="cascaderMulti_onchange"
      placeholder="请选择厂家/型号/额定功率"
      style="display: inline-block;width:350px;margin-right:20px;"
    ></cascaderMulti>
  </div>
</template>
 
<script>
import city_data from "@/libs/city.js";
export default {
  name: "Api",
  data() {
    return {
      cascaderMulti_data: city_data.city
    };
  },
  mounted() {
    this.axios({
      url: "https://restapi.amap.com/v3/config/district",
      method: "get",
      params: {
        key: "940fcb4edf57712c96fe713081970cc7",
        subdistrict: "3"
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    cascaderMulti_onchange() {}
  }
};
</script>
 
<style lang="less" scoped>
</style>