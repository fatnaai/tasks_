import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Change Color
			</button>
		);
	}
}
export default Button;