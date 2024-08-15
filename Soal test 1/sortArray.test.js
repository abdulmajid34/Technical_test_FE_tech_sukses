const request = require("supertest");
const sortArray = require("./sortArray");

describe("sortArray Function", () => {
  // sort by ascending order
  test("should sort array in ascending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2];
    const sortedArr = sortArray(arr, "asc");
    expect(sortedArr).toEqual([1, 1, 2, 3, 4, 5, 9]);
  });

  // sort by descending order
  test("should sort array in descending order", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2];
    const sortedArr = sortArray(arr, "desc");
    expect(sortedArr).toEqual([9, 5, 4, 3, 2, 1, 1]);
  });

  // sort for empy array
  test("should return an empty array if input is an empty array", () => {
    const arr = [];
    const sortedArr = sortArray(arr, "asc");
    expect(sortedArr).toEqual([]);
  });

  // sort same element array
  test("should handle array with all the same elements", () => {
    const arr = [1, 1, 1, 1];
    const sortedArr = sortArray(arr, "asc");
    expect(sortedArr).toEqual([1, 1, 1, 1]);
  });
});
