import axios from '@/libs/api.request'

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}
export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}
