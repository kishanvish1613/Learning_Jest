import * as dummyService from "../../src/services/dummy.js";

test("result is true and return JS", () => {
  // 1. prepare mocks
  jest.spyOn(dummyService, "helper").mockImplementation(() => true);
  // 2. excute the method to test
  const result = dummyService.execute();
  // 3.Assert
  expect(result).toBe('JS');
});

test("result is false and return NodeJS", () => {

    jest.spyOn(dummyService, 'helper').mockImplementation(() => false);

    const result = dummyService.execute();

    expect(result).toBe('NodeJS');
})
