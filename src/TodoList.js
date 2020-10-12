import React, { Component } from 'react'
import './style.css'
import axios from 'axios'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

	constructor(props) {
		super()
		this.state = {
			inputValue: '',
			list: [ '学习 React' ],
		}
	}

	// 在组件即将被挂载到页面的时刻自动执行
	componentWillMount() {
		console.log('componentWillMount')
	}

	// 组件被挂载到页面自动执行
	componentDidMount() {
		console.log('componentDidMount')
		axios.get('api/tolist').then((res) => {
			alert('success')
			console.log('res', res)
		}).catch(() => {
			alert('error')
		})
	}

	// 组件被更新之前，他会自动被执行
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate')
		return true
	}

	// 组件被更新之前，他会自动执行，但是在 shouldComponnetUpdate 之后执行，若 shouldComponnetUpdate 返回 true 执行，否则不执行
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}

	// 组件更新完成之后，它会被执行
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	render() {
		console.log('render')
		return (
			<div style={{ margin: '20px' }}>
				<label htmlFor="insertArea">输入内容</label>
					<input id="insertArea" className='input' value={this.state.inputValue} onChange={this.changeInputValue} ref={(input) => { this.input = input }} /><br/>
					<button onClick={this.submitInputValue}>提交</button>
					<ul>
						{this.getTodoItem()}
					</ul>
			</div>
		)
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps')
	}

	// 当这个组件即将从页面中被剔除时执行
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	getTodoItem = () => {
		return this.state.list.map((item, index) => {
			return <TodoItem
								key={`${index}-${item}`}
								content={item}
								index={index}
								delItem={this.delSelf}
								>
							</TodoItem>
		})
	}

	changeInputValue = (e) => {
		// console.log('222', e.target.value, this)
		this.setState({ inputValue: this.input.value })
	}

	submitInputValue = () => {
		this.setState({ list: [...this.state.list, this.state.inputValue] })
	}

	delSelf = (index) => {
		console.log(index)
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({ list })
	}
}