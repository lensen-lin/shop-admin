export interface IBaseResponse<T = any> {
  code: Number
  data: T
  msg: String
  success: Boolean
}
