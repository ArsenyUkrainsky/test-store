/* eslint-disable camelcase */

import { IUser, IUserAction } from '../../types/types'

const initialState = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
  support: {},
}

export const userReducer = (state: IUser = initialState, action: IUserAction): IUser => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, data: state.data.concat(action.payload.data) }
    case 'LOAD_LOCAL':
      return { ...state, data: state.data }
    case 'LOAD_LOCAL_STORAGE':
      return { ...state, data: action.payload }
    case 'LOAD_PAGE':
      return { ...state, page: action.payload }
    default:
      return state
  }
}

export type RootState = ReturnType<typeof userReducer>
