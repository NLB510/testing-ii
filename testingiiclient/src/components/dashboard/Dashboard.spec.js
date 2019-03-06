import React from "react";

import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
const mockCallBack = jest.fn();

describe("<Dashboard />", () => {
  const state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  };

  // const strike = e => {
  //   e.preventDefault();

  //   return ++state.strikes

  // };

  describe('Buttons', () => {
    it("should fire strike button", () => {
      const { getByTestId } = render(
        <Dashboard stats={state} recordStrike={mockCallBack} />
      );

      const strikeButton = getByTestId("strikeBtn");
      fireEvent.click(strikeButton);

      expect(mockCallBack).toHaveBeenCalled();
    });

    it("should fire hit button", () => {
      const { getByTestId } = render(
        <Dashboard stats={state} recordHit={mockCallBack} />
      );

      const hitButton = getByTestId("hitBtn");
      fireEvent.click(hitButton);

      expect(mockCallBack).toHaveBeenCalled();
    });

    it("should fire ball button", () => {
      const { getByTestId } = render(
        <Dashboard stats={state} recordBall={mockCallBack} />
      );

      const ballButton = getByTestId("ballBtn");
      fireEvent.click(ballButton);

      expect(mockCallBack).toHaveBeenCalled();
    });

    it("should fire foul button", () => {
      const { getByTestId } = render(
        <Dashboard stats={state} recordFoul={mockCallBack} />
      );

      const foulButton = getByTestId("foulBtn");
      fireEvent.click(foulButton);

      expect(mockCallBack).toHaveBeenCalled();
    });
  })
  
});
