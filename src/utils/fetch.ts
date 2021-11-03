// https://reqres.in/api/users?page=

const BASE_URL = 'https://reqres.in/api/users?page='

// eslint-disable-next-line prefer-promise-reject-errors
const handleResponse = (response: any) => (response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`))

const getData = (page: number) => fetch(`${BASE_URL}${page}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(handleResponse)

export default getData
