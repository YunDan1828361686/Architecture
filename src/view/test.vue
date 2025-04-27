<template>
  <CheckboxGroup v-model="fruit" @on-change="CheckboxGroup_change">
    <Checkbox label="0">Name</Checkbox>
    <Checkbox label="1">Age</Checkbox>
    <Checkbox label="2">Province</Checkbox>
  </CheckboxGroup>
  <!-- <Table border :columns="columns2" :data="data3"></Table> -->
</template>
<script>
export default {
  data() {
    return {
      fruit: ["0","1","2"],
      columns2: [
        {
          title: 'Name',
          key: 'name',
          width:'120'
        },
        {
          title: 'Age',
          key: 'age',
          minWidth: 130,
        },
        {
          title: 'Province',
          key: 'province',
          minWidth: 130,
        },
      ],
      columns2_: [
        {
          title: 'Name',
          key: 'name',
          width:'120'
        },
        {
          title: 'Age',
          key: 'age',
          minWidth: 130,
        },
        {
          title: 'Province',
          key: 'province',
          minWidth: 130,
        },
      ],
      data3: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ]
    };
  },
  methods: {
    CheckboxGroup_change(val) {
      this.columns2 = []
      val.sort(function (a, b) {
        return a - b;
      });
      for (let i = 0; i < val.length; i++) {
        const element = val[i];
        this.columns2.push(this.columns2_[element])
      }
    },
  },
};
</script>
