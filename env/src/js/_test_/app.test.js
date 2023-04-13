import demo from '../app';

test('The demo function should return the passed value', () => {
  const received = 'test';
  expect(demo('test')).toBe(received);
});