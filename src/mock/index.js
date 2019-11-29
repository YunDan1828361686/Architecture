import Mock from 'mockjs'
import { logout } from './login'
import { getOrgData, getTableData } from './data'


// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

// 登录相关和获取用户信息
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_org_data/, getOrgData)
Mock.mock(/\/get_table_data/, getTableData)



export default Mock
