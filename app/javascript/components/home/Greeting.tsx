import React from 'react';

type GreetingProps = {
  name: string;
};

export const GreetingMessage = (name: string): string => `Welcome to ${name}!`;

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>{GreetingMessage(name)}</h1>;
};

export default Greeting;
