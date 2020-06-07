import React from 'react';
import { render } from 'react-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FC = React.FC<any>;

export const renderComponent = (Component: FC) => {
  const { name } = Component;
  const targets = document.querySelectorAll(`div[data-react-class="${name}"]`);

  for (const target of targets) {
    const props = JSON.parse((target as HTMLElement).dataset.reactProps ?? '{}');
    const component = Component(props);

    if (component) render(component, target);
  }
};

export const renderComponents = (...Components: FC[]) => {
  for (const Component of Components) {
    renderComponent(Component);
  }
};
