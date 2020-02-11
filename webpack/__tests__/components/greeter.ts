import { hello } from '#/components/greeter';

describe('greeting', () => {
  test('should return hello', () => {
    const greeting = hello('Jest');
    expect(greeting).toBe('Hello Jest!');
  });
});
