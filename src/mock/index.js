import Mock from 'mockjs'
import { pagination1, pagination2, pagination3 } from './data/TableData'
const Random = Mock.Random
// https://www.jianshu.com/p/a1933d8f1b8f
// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

const logout = req => {
  return null
}
const getOrgData = req => {
  return {
    id: 0,
    label: 'XXX科技有限公司',
    children: [
      {
        id: 2,
        label: '产品研发部',
        children: [
          {
            id: 5,
            label: '研发-前端'
          }, {
            id: 6,
            label: '研发-后端'
          }, {
            id: 9,
            label: 'UI设计'
          }, {
            id: 10,
            label: '产品经理'
          }
        ]
      },
      {
        id: 3,
        label: '销售部',
        children: [
          {
            id: 7,
            label: '销售一部'
          }, {
            id: 8,
            label: '销售二部'
          }
        ]
      },
      {
        id: 4,
        label: '财务部'
      }, {
        id: 11,
        label: 'HR人事'
      }
    ]
  }
}
const getTableData = req => {
  req = JSON.parse(req.body)
  if (req.page_current == 1 || req.page_current == "") {
    if (req.page_size == 20) {
      return pagination3
    } else {
      return pagination1
    }
  } else if (req.page_current == 2) {
    return pagination2
  }
}


// 登录相关和获取用户信息
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_org_data/, getOrgData)
Mock.mock(/\/get_table_data/, getTableData)



export default Mock
