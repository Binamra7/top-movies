/** @format */

import { shallow } from "enzyme";
import NavBar from "../NavBar";

describe("NavBar", () => {
	it("should render without crashing", () => {
		shallow(<NavBar />);
	});
});
