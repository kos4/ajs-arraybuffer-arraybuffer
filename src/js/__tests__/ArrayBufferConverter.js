import ArrayBufferConverter from '../classes/ArrayBufferConverter';
import getBuffer from '../functions';

test('ArrayBuffer convert to string', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
