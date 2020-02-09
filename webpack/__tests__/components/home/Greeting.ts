import { GreetingMessage } from '#/components/home/Greeting';

describe('greeting', () => {
  test('should return dom', () => {
    const greeting = GreetingMessage('Jest');
    expect(greeting).toBe('Welcome to Jest!');
  });
});
