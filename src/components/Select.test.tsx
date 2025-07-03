import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';
import { describe, it, expect, vi } from 'vitest';

const options = ['Option 1', 'Option 2', 'Option 3'];
describe('Select Component', () => {
  // it('renders with options', () => {
  //   const module = render(<Select options={options} onChange={vi.fn()} label="text"  />);
  //   expect(screen.getByRole('combobox')).toBeInTheDocument();
  //   expect(screen.getByText('Option 1')).toBeInTheDocument();
  //   expect(screen.getByText('Option 2')).toBeInTheDocument();
  // });

  it('calls onChange when an option is selected', async () => {
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} label="text" />);
    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'Option 1');
    
    expect(handleChange).toHaveBeenCalledWith('Option 1');
  });

  // it('displays the selected option', async () => {
  //   render(<Select options={options} defaultValue="Option 2"  label="text" />);
    
  //   const select = screen.getByRole('combobox');
  //   expect(select).toHaveValue('Option 2');
  // });
});