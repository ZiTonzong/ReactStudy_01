import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    constructor (props) {
			super()
			this.state = {}
    }
    render () {
			const { content, index, delItem, test } = this.props
			return (
				<li 
				onClick={() => delItem(index)}
				>
					{test} - {content}
				</li>
			)
    }
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.string,
	delItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}