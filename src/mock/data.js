import Mock from 'mockjs'
import { pagination1, pagination2, pagination3 } from './data/TableData'
import { log } from 'util'
const Random = Mock.Random

export const getOrgData = req => {
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
export const getTableData = req => {
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
