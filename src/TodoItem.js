import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    constructor (props) {
			super()
			this.state = {}
		}
		
		shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.content !== this.props.content) {
				return true
			}
			return false
		}

    render () {
			console.log('2 render')
			const { content, index, delItem, test } = this.props
			return (
				<li 
				onClick={() => delItem(index)}
				>
					{test} - {content}
				</li>
			)
		}
		
		// 一个组件要从父组件接受参数
		// 只要父组件的 render 函数被执行了，子组件的这个生命周期函数就会被执行
		// 如果这个组件第一次存在于负组件中，不会执行
		// 如果这个组件之前已经存在于父组件中，才会执行
		componentWillReceiveProps() {
			console.log('2 componentWillReceiveProps')
		}

		// 当这个组件即将从页面中被剔除时执行
		componentWillUnmount() {
			console.log('2 componentWillUnmount')
		}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	delItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}