import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, INIT_LSIT_ACTION, GET_INIT_LIST } from './actionTypes'

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const initListAction = (data) => ({
  type: INIT_LSIT_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then(res => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}

export const getInitList = () => ({
  type: GET_INIT_LIST
})