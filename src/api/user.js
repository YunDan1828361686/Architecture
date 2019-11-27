import axios from '@/libs/api.request'


export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
