import Mock from 'mockjs'
import orgData from './data/org-data'
import Table1Data from './data/Table1Data'
import { pagination1, pagination2, pagination3 } from './data/Table2Data'
import { log } from 'util'
const Random = Mock.Random

export const getOrgData = req => {
  return orgData
}
export const getTable1Data = req => {
  return Table1Data
}
export const getTable2Data = req => {
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
