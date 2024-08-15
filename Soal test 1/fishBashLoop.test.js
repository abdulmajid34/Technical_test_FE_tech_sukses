const fishBashLoop = require("./fishBashLoop");

describe("fishBashLoop Function", () => {
  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  afterEach(() => {
    console.log = console.log;
  });

  test("Should print numbers and words based on the criteria", () => {
    fishBashLoop(20);

    expect(consoleOutput[0]).toBe("fish bash"); // 0
    expect(consoleOutput[3]).toBe("fish"); // 3
    expect(consoleOutput[5]).toBe("bash"); // 5
    expect(consoleOutput[15]).toBe("fish bash"); // 15
    expect(consoleOutput[20]).toBe("bash"); // 20
  });

  test("Should print correct sequence for num = 5", () => {
    fishBashLoop(5);

    expect(consoleOutput[5]).toBe("bash"); // 5
  });

  test("Should print correct sequence for num = 3", () => {
    fishBashLoop(3);

    expect(consoleOutput[3]).toBe("fish"); // 3
  });
});
