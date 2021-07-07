const musicalInstruments = require("./instruments");

const { woodWindInstruments } = require("./challenge2");

describe("Slice Problems", () => {
  test("Test Woodwind Instruments", () => {
    expect(woodWindInstruments(musicalInstruments)).toHaveLength(8);
    const clarinet = {
      family: "Woodwind",
      name: "Clarinet",
    };

    const harmonica = {
      family: "Woodwind",
      name: "Harmonica",
    };

    expect(woodWindInstruments(musicalInstruments)).toContainEqual(clarinet);
    expect(woodWindInstruments(musicalInstruments)).toContainEqual(harmonica);
  });
});
