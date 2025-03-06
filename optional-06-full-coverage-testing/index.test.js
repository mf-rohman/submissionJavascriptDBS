import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("Sum", () => {
  it("Should sum two numbers correctly", () => {
    const operandA = 5;
    const operandB = 5;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 10;
    assert.equal(expectedValue, actualValue);
  });

  it("Should return 0 if type of operandA is not number", () => {
    const operandA = "5";
    const operandB = 5;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 0;
    assert.equal(expectedValue, actualValue);
  });

  it("Should return 0 if type of operandB is not number", () => {
    const operandA = 5;
    const operandB = "5";

    const actualValue = sum(operandA, operandB);

    const expectedValue = 0;
    assert.equal(expectedValue, actualValue);
  });

  it("Should return 0 if type of operandA less than 0", () => {
    const operandA = -5;
    const operandB = 5;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 0;
    assert.equal(expectedValue, actualValue);
  });

  it("Should return 0 if type of operandB less than 0", () => {
    const operandA = 5;
    const operandB = -5;

    const actualValue = sum(operandA, operandB);

    const expectedValue = 0;
    assert.equal(expectedValue, actualValue);
  });
});
