import React, { Component } from "react";
import * as actions from "actions";
import { connect } from "react-redux";

class CommentBox extends Component {
	state = { comment: "" };
	handleChange(e) {
		this.setState({ comment: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.comment !== "") {
			this.props.saveComment(this.state.comment);
			this.setState({ comment: "" });
		}
	}
	handleFetch() {
		this.props.fetchComments();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<h4>Add Comment</h4>
					<textarea
						onChange={this.handleChange.bind(this)}
						value={this.state.comment}
					/>
					<div>
						<button>Submit comment</button>
					</div>
				</form>
				<button className="fetch-comments" onClick={this.props.fetchComments}>
					Fetch comments
				</button>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);