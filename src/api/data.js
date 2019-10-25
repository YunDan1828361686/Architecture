import axios from '@/libs/api.request'

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTable1Data = () => {
  return axios.request({
    url: 'get_table1_data',
    method: 'post'
  })
}

export const getTable2Data = (res) => {
  return axios.request({
    url: 'get_table2_data',
    method: 'post',
    data: res
  })
}
