import React from 'react';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Welcome to {name}!</h1>;
};

export default Greeting;
