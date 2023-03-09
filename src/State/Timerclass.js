import React, { Component } from "react";

class Timer2 extends Component {
	constructor(props) { //생성자 함수
		super(props);
		this.state = {
			number: 0,
		};
	}
	render() {
		const { number } = this.state;
		const upTime = () => {
			this.setState({ number: number + 1 });
		};

		return (
			<div>
				<h3>{number}초</h3>
				<button onClick={upTime}>1씩 올려주세요</button>
			</div>
		);
	}
}

export default Timer2;