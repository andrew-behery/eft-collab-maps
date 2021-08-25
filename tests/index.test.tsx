import {screen, render} from '@testing-library/react';
import {getPage} from 'next-page-tester';
import Home from '../pages/index';

describe('App', () => {
  it('renders without crashing', async () => {
    const {render} = await getPage({
      route: '/',
    });

    render();
  });

  it('renders a <ReactSketchCanvas />', () => {
    const component = render(<Home />);
    const findCanvas = component.getByTestId('canvasId').firstChild;
    expect(findCanvas).toBeInTheDocument();
  });
});
