import { render, screen } from '@testing-library/react';
import { Text, TextProps, baseId } from './Text';
import { propObj } from './Text.props';

let props: TextProps;

describe('default', () => {
  beforeEach(() => {
    props = propObj.default;
  });

  it('default の props に対するテストケースを書くこと', () => {
    render(<Text {...props} />);
    expect(screen.getByTestId(baseId)).toBeInTheDocument();
  });
});