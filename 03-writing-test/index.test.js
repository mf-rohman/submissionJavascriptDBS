import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("Sum", () => {
  it("Should sum two numbers correctly", () => {
    const operandA = 5;
    const operandB = 5;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 10;
    assert.equal(expectedValue, actualValue);
  });

  // it("Should throw an error if type of operandA is not number", () => {
  //   const thrownErrors = () => {
  //     const operandA = "5";
  //     const operandB = 5;

  //     sum(operandA, operandB);
  //   };
  //   assert.throws(thrownErrors, Error);
  // });

  // it("Should throw an error if type of operandB is not number", () => {
  //   const thrownErrors = () => {
  //     const operandA = 5;
  //     const operandB = "5";

  //     sum(operandA, operandB);
  //   };
  //   assert.throws(thrownErrors, Error);
  // });
});
