import Mock from 'mockjs'
import orgData from './data/org-data'
import Table1Data from './data/Table1Data'
const Random = Mock.Random

export const getOrgData = req => {
  return orgData
}
export const getTable1Data = req => {
  return Table1Data
}
