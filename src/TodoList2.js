import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

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
	}

	render() {
		return (
			<div style={{ margin: '20px' }}>
				<div>
					<Input placeholder='todo info' style={{ width: '300px' }} value={this.state.inputValue}></Input>
					<Button type='primary' style={{ marginLeft: '20px' }}>GOGOGO</Button>
				</div>
				<List
					style={{ marginTop: '20px', width: '500px' }}
					header={<div>Header</div>}
					footer={<div>Footer</div>}
					bordered
					dataSource={this.state.list}
					renderItem={item => (
						<List.Item>
							{item}
						</List.Item>
					)}
				/>
			</div>
		)
	}
}