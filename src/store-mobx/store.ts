/* eslint-disable no-console */
import { makeAutoObservable } from 'mobx'
import { DataType, IUser } from '../types/types'
import getData from '../utils/fetch'

class Store {
  initialState: IUser = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [],
    support: {},
  }

  constructor() {
    makeAutoObservable(this)
  }

  loadStorage(local: DataType[]) {
    this.initialState.data = local
  }

  loadLocal() {
    return this.initialState.data
  }

  setNewPage(page: number) {
    this.initialState.page = page
  }

  fetchData(page: number) {
    getData(page)
      .then((data) => {
        this.initialState.data = [...this.initialState.data, ...data.data]
      })
      .catch((e) => console.log(`Ошибка ${e}`))
  }
}

export default new Store()
