<template>
  <Table
    border
    stripe
    ref="table1"
    height="518"
    highlight-row
    :data="tableData_1"
    :loading="loading_1"
    @on-expand="expand_click"
    :columns="tableColumns_1"
  ></Table>
</template>
<script>
import expandRow from './expand1.vue'
export default {
  components: { expandRow },
  data () {
    return {
      // 表格的loading
      loading_1: false,
      // 表格表头
      tableColumns_1: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              },
              on: {
                updatemsg: () => {
                  console.log('父页面执行了')
                }
              }
            })
          }
        },
        {
          title: 'Name',
          key: 'name',
          align: 'center',
          minWidth: 200
        },
        {
          title: '年龄',
          key: 'age',
          align: 'center',
          minWidth: 200
        },
        {
          title: '地址',
          key: 'address',
          align: 'center',
          ellipsis: true,
          tooltip: true,
          minWidth: 200
        },
        {
          title: '电影',
          key: 'movie',
          align: 'center',
          minWidth: 200
        }
      ],
      // 表格数据
      tableData_1: [
        {
          id: '1',
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          interest: 'badminton',
          book: 'Steve Jobs',
          movie: 'The Prestige',
          music: 'I Cry'
        },
        {
          id: '2',
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          job: 'Data Scientist',
          interest: 'volleyball',
          birthday: '1989-03-18',
          book: 'My Struggle',
          movie: 'Roman Holiday',
          music: 'My Heart Will Go On'
        },
        {
          id: '3',
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          job: 'Data Product Manager',
          interest: 'tennis',
          birthday: '1992-01-31',
          book: 'Win',
          movie: 'Jobs',
          music: 'Don’t Cry'
        },
        {
          id: '4',
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          job: 'Data Analyst',
          interest: 'snooker',
          birthday: '1988-7-25',
          book: 'A Dream in Red Mansions',
          movie: 'A Chinese Ghost Story',
          music: 'actor'
        }
      ]
    }
  },
  methods: {
    expand_click (row, status) {
      if (status == true) {
        if (!row.hasOwnProperty('children_row')) {
          // 如果当前行没有children_row就获取
          this.loading_1 = true
          let data = [
            {
              id: this.tableData_1[row.id - 1].id + '-1',
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              job: 'Data engineer',
              interest: 'badminton',
              birthday: '1991-05-14',
              book: 'Steve Jobs',
              movie: 'The Prestige',
              music: 'I Cry'
            }
          ]
          //  给这行数据加上
          this.$set(this.tableData_1[row.id - 1], 'children_row', data)
          this.$set(this.tableData_1[row.id - 1], '_expanded', true)
          this.loading_1 = false
          console.log(this.tableData_1)
        }
      }
    }
  }
}
</script>
