import React, { Component } from 'react'
import { Input, Button, List } from 'antd'


export default class TodoListUI extends Component {
  render() {
    return (
      <div style={{ margin: '20px' }}>
				<div>
					<Input placeholder='todo info' style={{ width: '300px' }} value={this.props.inputValue} onChange={this.props.handleInputChange}></Input>
					<Button type='primary' style={{ marginLeft: '20px' }} onClick={this.props.handleBtnClick}>GOGOGO</Button>
				</div>
				<List
					style={{ marginTop: '20px', width: '500px' }}
					header={<div>Header</div>}
					footer={<div>Footer</div>}
					bordered
					dataSource={this.props.list}
					renderItem={(item, index) => (
						<List.Item onClick={() => {this.props.handleItemDelete(index)}}>
						{index}	- {item}
						</List.Item>
					)}
				/>
			</div>
    )
  }
}