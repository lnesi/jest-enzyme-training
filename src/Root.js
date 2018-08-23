import React from "react";
import { Provider } from "react-redux";

import store from "store";

export default function Root({children,initialState={}}) {
	return <Provider store={store(initialState)}>{children}</Provider>;
}