import comment from './comment.js';

const unMockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'half',
        creation_date: '2022-09-01',
        username: 'hello',

      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unMockedFetch;
});

describe('add comments', () => {
  test('comment', async () => {
    const response = await comment();
    expect(Array.isArray(response)).toEqual(true);
    expect(response.length).toEqual(1);
  });
});