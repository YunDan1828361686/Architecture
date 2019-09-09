import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getOrgData } from './data'
import { getTable1Data } from './data'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/save_error_logger/, 'success')
Mock.mock(/\/get_org_data/, getOrgData)
Mock.mock(/\/get_table1_data/, getTable1Data)


export default Mock
