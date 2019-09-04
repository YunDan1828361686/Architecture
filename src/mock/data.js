import Mock from 'mockjs'
import orgData from './data/org-data'
const Random = Mock.Random

export const getOrgData = req => {
  return orgData
}
