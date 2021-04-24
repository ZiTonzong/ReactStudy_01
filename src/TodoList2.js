import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd'
import store from './store'
import {DELETE_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE} from './store/actionTypes'
import { getInputChangeAction, getAddItemAction, initListAction, getInitList } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

export default class TodoList2 extends Component {
	constructor(props) {
		super()
		this.state = store.getState()
		console.log('store', this.state)
		store.subscribe(this.handleStoreChange)
	}

	render() {
		return (
			<TodoListUI inputValue={this.state.inputValue}
			list={this.state.list}
			handleInputChange={this.handleInputChange}
			handleBtnClick={this.handleBtnClick}
			handleItemDelete={this.handleItemDelete}/>
		)
	}

	componentDidMount() {
		const action = getInitList()
		// axios.get('/list.json').then((res) => {
		// 	const data = res.data
		// 	const action = initListAction(data)
		// 	store.dispatch(action)
		// })
	}

	handleInputChange = (e) => {
		// const action = {
		// 	type: CHANGE_INPUT_VALUE,
		// 	value: e.target.value
		// }

		const action = getInputChangeAction(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange = () => {
		console.log('store changed')
		this.setState(store.getState())
	}

	handleBtnClick = () => {
		// const action = {
		// 	type: ADD_TODO_ITEM
		// }

		const action = getAddItemAction()
		store.dispatch(action)
	}

	handleItemDelete = (index) => {
		// alert(index)
		console.log('index', index)
		const action = {
			type: DELETE_TODO_ITEM,
			index
		}
		store.dispatch(action)
	}
}