import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentBox";
import { shallow } from "enzyme";

it("shows a comment box", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
