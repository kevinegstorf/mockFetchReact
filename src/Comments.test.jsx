import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Comments from "./Comments";
import { act } from "react-dom/test-utils";

it("renders", async () => {
  const fakeComment = [
    {
      name: "Great Job!",
      id: "1",
    },
    {
      name: "The Best",
      id: "2",
    },
  ];

  const mockJsonPromise = Promise.resolve(fakeComment);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  await act(async () => {
    render(<Comments />);
  });
  screen.debug();
  expect(screen.getByText("COMMENTS")).toBeInTheDocument();
  expect(screen.getByText(fakeComment[0].name)).toBeInTheDocument();
});
