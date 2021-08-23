import {screen} from '@testing-library/react';
import {getPage} from 'next-page-tester';
import App from '../pages/index';

describe('App', () => {
  it('renders without crashing', async () => {
    const {render} = await getPage({
      route: '/',
    });

    render();
  });

  it('renders the SketchField', () => {
    expect(screen.getByTestId('SketchfieldTestId')).toBeInTheDocument();
  });
});
