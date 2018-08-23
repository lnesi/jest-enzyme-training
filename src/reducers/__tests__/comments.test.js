import { SAVE_COMMENT } from "actions/types";
import commentsReducers from "reducers/comments";

describe("comments reducer", () => {
	it("handles actions of type SAVE_COMMENT", () => {
		const action = {
			type: SAVE_COMMENT,
			payload: "Lore ipsum"
		};
		const newState = commentsReducers([], action);
		expect(newState).toEqual(["Lore ipsum"]);
	});

	it("handles actions of unknown type ", () => {
		const action = {
			type: "FAKE_ACTION",
			payload: "Lore ipsum"
		};
		const newState = commentsReducers([], action);
		expect(newState).toEqual([]);
	});
});