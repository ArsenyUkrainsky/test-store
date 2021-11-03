/* eslint-disable camelcase */
export type DataType = {
     id: number
     avatar: string
     email: string
     first_name: string
     last_name: string
   }

export interface IUser {
     page: number
     per_page: number
     total: number
     total_pages: number
     data: DataType[]
     support: {}
   }

export interface IUserAction {
     type: string
     payload?: any
   }
