import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('コンポーネントが正常にレンダリングされる', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Enter')).toBeInTheDocument();
  });
});
