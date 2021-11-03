/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import React, {
  FC, useEffect, useState, useMemo,
} from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import store from '../../store-mobx/store'
import { DataType } from '../../types/types'
import '../Page1/Page1.css'
import getData from '../../utils/fetch'

const Page2: FC = observer(() => {
  const {
    data, page, total_pages, per_page, total,
  } = toJS(store.initialState)

  const [pages, setPages] = useState<number[]>([])
  const [savedData, setSavedData] = useState<DataType[]>([])

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('SAVED_DATA')
    if (dataFromLocalStorage == null) {
      data.length < total ? store.fetchData(page) : store.loadLocal()
    }
    if (dataFromLocalStorage !== null) {
      store.loadStorage(JSON.parse(dataFromLocalStorage))
    }
  }, [page])

  useEffect(() => {
    for (let i = 1; i <= total_pages; i++) {
      setPages((p) => p.concat(i))
    }
  }, [])

  useMemo(() => {
    if (savedData.length === total) {
      localStorage.setItem('SAVED_DATA', JSON.stringify(savedData.sort((a, b) => a.id - b.id)))
      alert('Данные успешно сохранены')
    }
  }, [savedData, total])

  const handleClick = () => {
    pages.forEach((p) => getData(p)
      .then((d) => setSavedData((s) => s.concat(...d.data)))
      .catch((e) => console.log(`Ошибка при получении данных при сохранении: ${e}`)))
  }

  return (
    <>
      <ul className='users'>
        {/* // TODO */}
        {toJS(data).length ? (
          toJS(data)
            .sort((a, b) => a.id - b.id)
            .slice(per_page * page - per_page, per_page * page)
            .map((user) => (
              <li className='user__info' key={user.id * Math.random()}>
                <img src={user.avatar} alt='avatar' className='user__avatar' />
                <p className='user__text'>
                  {`${user.first_name} ${user.last_name}`}
                  <br />
                  {`Email: ${user.email}`}
                </p>
              </li>
            ))
        ) : (
          <span>Пользователи загружаются...&#9203;</span>
        )}
      </ul>
      <div className='pages'>
        {pages.map((p, index) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <span
            className={p === page ? 'page page_active' : 'page '}
            // eslint-disable-next-line react/no-array-index-key
            key={index * p}
            onClick={() => {
              store.setNewPage(p)
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <button type='button' className='button' onClick={handleClick}>
        Офлайн
      </button>
    </>
  )
})

export default Page2
