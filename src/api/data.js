import axios from '@/libs/api.request'


export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTableData = (res) => {
  return axios.request({
    url: 'get_table_data',
    method: 'post',
    data: res
  })
}
