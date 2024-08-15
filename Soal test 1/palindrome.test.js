const request = require("supertest");
const isPalindrome = require("./palindrome");

describe("isPalindrome", () => {
  test("returns true for palindrome string", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns true for single character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("returns false for non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("returns false for mixed characters", () => {
    expect(isPalindrome("Madam")).toBe(false);
  });
});
