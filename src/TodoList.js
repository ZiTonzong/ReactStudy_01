import React, { Component } from 'react'
import './style.css'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

	constructor(props) {
		super()
		this.state = {
			inputValue: '',
			list: [ '学习 React' ],
		}
	}

	render() {
		return (
			<div style={{ margin: '20px' }}>
				<label htmlFor="insertArea">输入内容</label>
					<input id="insertArea" className='input' value={this.state.inputValue} onChange={this.changeInputValue} /><br/>
					<button onClick={this.submitInputValue}>提交</button>
					<ul>
						{this.getTodoItem()}
					</ul>
			</div>
		)
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
		this.setState({ inputValue: e.target.value })
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