// to fix TS cannot redeclare block-scoped variable error
export {};

// to fix testcafe + jest type collision
declare const test: jest.It;

const text = 'Hello world!';
test('It must be a text', () => {
  expect(text).toMatch(/world/);
});
