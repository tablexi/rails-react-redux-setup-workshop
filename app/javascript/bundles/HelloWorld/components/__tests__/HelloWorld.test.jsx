import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HelloWorld from '../HelloWorld';

describe('<HelloWorld />', () => {
  it('renders', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(
      <HelloWorld name='Stranger' />
    );
    expect(tree).toMatchSnapshot();
  });
});
