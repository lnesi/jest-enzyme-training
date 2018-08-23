import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";


describe("App Component", () => {
	let component;
	
	beforeEach(()=>{
		component = shallow(<App />);
	});
	it("has CommentBox", () => {
		expect(component.find(CommentBox).length).toEqual(1);
	});

	it("has CommentList", () => {
		expect(component.find(CommentList).length).toEqual(1);
	});
});
