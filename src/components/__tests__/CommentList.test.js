import React from "react";
import { mount } from "enzyme";
import store from "store";

import CommentList from "components/CommentList";

describe("CommentList", () => {
	let component;
	const initialState = { comments: ["Lore ipsum 1","Lore ipsum 2"] };
	beforeEach(() => {
		
		component = mount(<CommentList store={store(initialState)} />);
	});

	it("create on LI per comment", () => {
		expect(component.find("li").length).toEqual(2);
	});

	it("shows the text for each comment", () => {
		expect(component.render().text()).toContain(initialState.comments[0]);
		expect(component.render().text()).toContain(initialState.comments[1]);
	});
});