import { GreetingMessage } from '#/components/home/Greeting';

describe('greeting', (): void => {
  test('should return dom', (): void => {
    const greeting = GreetingMessage('Jest');
    expect(greeting).toBe('Welcome to Jest!');
  });
});
