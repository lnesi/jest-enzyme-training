import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
	moxios.install();

	moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
		status: 200,
		response: [{ name: "Lore Ipsum1" }, { name: "Lore Ipsum 2" }]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it("can fetch a listof comment sand display them", done => {
	const component = mount(
		<Root>
			<App />
		</Root>
	);
	component.find(".fetch-comments").simulate("click");
	moxios.wait(() => {
		component.update();
		expect(component.find("li").length).toEqual(2);
		done();
		component.unmount();
	});
});