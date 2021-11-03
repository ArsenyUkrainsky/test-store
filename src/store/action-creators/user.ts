/* eslint-disable no-console */
// Данные с сервера
// https://reqres.in/api/users?page=

import { Dispatch } from 'redux'

import { DataType, IUserAction } from '../../types/types'

const LINK = 'https://reqres.in/api/users?page='

export const fetchUsers = (page: number) => async (dispatch: Dispatch<IUserAction>) => {
  try {
    const response = await fetch(`${LINK}${page}`)
    const data = await response.json()
    dispatch({ type: 'LOAD_DATA', payload: data })
  } catch (e) {
    console.log(`Произошла ошибка при загрузке данных ${e}`)
  }
}

export const loadLocalData = () => (dispatch: Dispatch<IUserAction>) => {
  console.log('Данные со всех страниц получены')
  dispatch({ type: 'LOAD_LOCAL' })
}

export const loadLocalStorage = (data: DataType[]) => (dispatch: Dispatch<IUserAction>) => {
  console.log('Данные были сохранены локально')
  dispatch({ type: 'LOAD_LOCAL_STORAGE', payload: data })
}

export const setPage = (page: number) => (dispatch: Dispatch<IUserAction>) => {
  dispatch({ type: 'LOAD_PAGE', payload: page })
}
