import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.comments.map((comment, i) => {
						return <li key={i}>{comment}</li>;
					})}
				</ul>
			</div>
		);
	}
}
function mapStateToProps({ comments }) {
	return { comments };
}

export default connect(mapStateToProps)(CommentList);