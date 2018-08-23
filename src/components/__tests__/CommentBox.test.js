import React from "react";
import { mount } from "enzyme";
import store from "store";

import CommentBox from "components/CommentBox";

describe("CommentBox", () => {
	let component;

	beforeEach(() => {
		component = mount(<CommentBox store={store()} />);
	});

	afterEach(() => {
		component.unmount();
	});

	it("has a form with a textarea and button", () => {
		expect(component.find("form").length).toEqual(1);
		expect(component.find("form").find("textarea").length).toEqual(1);
		expect(component.find("form").find("button").length).toEqual(1);
	});

	describe("the textarea", () => {
		beforeEach(() => {
			component
				.find("textarea")
				.simulate("change", { target: { value: "lore ipsum" } });
			component.update();
		});

		it("updates value typed in", () => {
			expect(component.find("textarea").prop("value")).toEqual(
				"lore ipsum"
			);
		});

		it("when form is submitted gets emptied", () => {
			component.find("form").simulate("submit");
			component.update();
			expect(component.find("textarea").prop("value")).toEqual("");
		});
	});
});