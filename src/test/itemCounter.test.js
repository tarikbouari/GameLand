
// This is the function we'll be testing
async function gamefetch() {
  const res = await fetch(
    "https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14"
  );
  const json = await res.json();
  return json;
}

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            game: {
              id: 223,
              title: " Drangon Ball",
              release: "13-12-13",
            },
          },

          {
            game: { id: 777, title: " Justice League", release: "25-09-22" },
          },
        ]),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

// This is actual testing suite
describe("game testing", () => {
  test("works", async () => {
    const json = await gamefetch();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(2);
  });
});
