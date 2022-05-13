import { screen, render } from '@testing-library/react';
import { ListProvider } from './context/ListProvider';
import App from './App';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  it('first item displays on page, add new item, edit item, check item is done, and delete item', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    screen.getByText(/Grocery List/i);
    screen.getByText(/bring reusable bags/i);

    // const addInput = screen.getByPlaceholderText('Add item');

    // userEvent.type(addInput, 'eggs');
    screen.debug();
  });
});
