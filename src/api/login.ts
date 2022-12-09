import request from '../utils/request'
import { IBaseResponse } from './types/common'
interface ILoginRequest {
  username: string
  password: string
  code: string
  uuid: string
}

interface ILoginResponse {
  token: String
}

export const login = (data: ILoginRequest) => {
  return request<IBaseResponse<ILoginResponse>>({
    method: 'POST',
    url: '/login',
    data
  })
}
// export const login = (data: ILoginRequest) => {
//   return request<IBaseResponse<ILoginResponse>>('/login', data).then(res => res.data)
// }
