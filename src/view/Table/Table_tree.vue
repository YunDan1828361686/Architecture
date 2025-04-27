<template>
  <div>
    <Card shadow>
      <p>
        <b>支持使用slot-scope进行自定义列渲染内容</b>
      </p>
      <p>
        文档请看
        <a
          href="https://github.com/lison16/tree-table-vue"
        >https://github.com/lison16/tree-table-vue</a>
      </p>
      <tree-table
        :border="true"
        :selectable="true"
        :expand-type="false"
        :columns="columns"
        :data="data"
        expand-key="sex"
        @checkbox-click="getCheckedProp"
      >
        <template slot="likes" slot-scope="scope">
          <Button @click="handle(scope)">123</Button>
        </template>
      </tree-table>
    </Card>
  </div>
</template>

<script>
export default {
  name: "tree_table_page",
  data() {
    return {
      columns: [
        {
          title: "序号",
          key: "id",
          // 表头位置
          headerAlign: "center",
          // 数据位置
          align: "center",
          width: 100,
          align: "center"
        },
        {
          title: "name",
          key: "name",
          headerAlign: "center",
          align: "center",
          minWidth: 200
        },
        {
          title: "sex",
          key: "sex",
          headerAlign: "center",
          minWidth: 50
        },
        {
          title: "score",
          key: "score",
          headerAlign: "center",
          align: "center",
          minWidth: 50
        },
        {
          title: "likes",
          key: "likes",
          minWidth: 200,
          type: "template",
          headerAlign: "center",
          align: "center",
          template: "likes"
        }
      ],
      data: [
        {
          id: "1",
          name: "Jack",
          sex: "male",
          likes: ["football", "basketball"],
          score: 10,
          children: [
            {
              id: "1-1",
              name: "Ashley",
              sex: "female",
              likes: ["football", "basketball"],
              score: 20,
              children: [
                {
                  id: "1-1-1",
                  name: "Ashley",
                  sex: "female",
                  likes: ["football", "basketball"],
                  score: 20
                },
                {
                  id: "1-1-2",
                  name: "Taki",
                  sex: "male",
                  likes: ["football", "basketball"],
                  score: 10,
                  children: [
                    {
                      id: "1-1-2-1",
                      name: "Ashley",
                      sex: "female",
                      likes: ["football", "basketball"],
                      score: 20
                    },
                    {
                      id: "1-1-2-2",
                      name: "Taki",
                      sex: "male",
                      likes: ["football", "basketball"],
                      score: 10,
                      children: [
                        {
                          id: "1-1-2-2-1",
                          name: "Ashley",
                          sex: "female",
                          likes: ["football", "basketball"],
                          score: 20
                        },
                        {
                          id: "1-1-2-2-2",
                          name: "Taki",
                          sex: "male",
                          likes: ["football", "basketball"],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "1-2",
              name: "Taki",
              sex: "male",
              likes: ["football", "basketball"],
              score: 10
            }
          ]
        },
        {
          id: "2",
          name: "Tom",
          sex: "male",
          likes: ["football", "basketball"],
          score: 20,
          children: [
            {
              id: "2-1",
              name: "Ashley",
              sex: "female",
              likes: ["football", "basketball"],
              score: 20,
              children: [
                {
                  id: "2-1-1",
                  name: "Ashley",
                  sex: "female",
                  likes: ["football", "basketball"],
                  score: 20
                },
                {
                  id: "2-1-2",
                  name: "Taki",
                  sex: "male",
                  likes: ["football", "basketball"],
                  score: 10
                }
              ]
            },
            {
              id: "2-2",
              name: "Taki",
              sex: "male",
              likes: ["football", "basketball"],
              score: 10,
              children: [
                {
                  id: "2-2-1",
                  name: "Ashley",
                  sex: "female",
                  likes: ["football", "basketball"],
                  score: 20
                },
                {
                  id: "2-2-2",
                  name: "Taki",
                  sex: "male",
                  likes: ["football", "basketball"],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          id: "3",
          name: "Tom",
          sex: "male",
          likes: ["football", "basketball"],
          score: 20
        },
        {
          id: "4",
          name: "Tom",
          sex: "male",
          likes: ["football", "basketball"],
          score: 20,
          children: [
            {
              id: "4-1",
              name: "Ashley",
              sex: "female",
              likes: ["football", "basketball"],
              score: 20
            },
            {
              id: "4-2",
              name: "Taki",
              sex: "male",
              likes: ["football", "basketball"],
              score: 10
            }
          ]
        }
      ],
      // 表格勾选的数据
      selectedData_1: new Set()
    };
  },
  methods: {
    handle(row) {
      console.log(row, this.selectedData_1);
    },
    getCheckedProp(row) {
      try {
        this.selectedData_1.forEach(item => {
          if (item.id == row.id) {
            this.selectedData_1.delete(item);
            // 通过制造报错  跳出forEach循环
            throw new Error("return");
          }
        });
        this.selectedData_1.add(row);
      } catch (e) {
        console.log("取消掉了");
      }
    }
  }
};
</script>

<style>
</style>
