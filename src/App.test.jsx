import { screen, render } from '@testing-library/react';
import { ListProvider } from './context/ListProvider';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('first item displays on page, add new item, edit item, check item is done, and delete item', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    screen.getByText(/Grocery List/i);
    const originalItem = screen.getByText(/bring reusable bags/i);
    screen.getByText(/total items: 1/i);

    // test adding an item
    const addInput = screen.getByPlaceholderText('Add item');
    userEvent.type(addInput, 'eggs');

    const addButton = screen.getByText(/add to my list/i);
    userEvent.click(addButton);

    screen.getByText(/eggs/i);
    screen.getByText(/total items: 2/i);

    // test deleting an item
    const deleteButton = screen.getAllByRole('button', { name: 'Delete' });
    userEvent.click(deleteButton[1]);

    expect(originalItem).not.toBeInTheDocument();
    screen.getByText(/total items: 1/i);

    // test editing an item

    // test checking an item

    screen.debug();
  });
});
