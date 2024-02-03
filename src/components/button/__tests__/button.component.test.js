import {render, screen} from '@testing-library/react';
import Button,{BUTTON_TYPE_CLASSES} from '../button.component';

describe('Button tests', () => {
  test('Render base button', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.default}>Test</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: white');
  })
  test('Render google button', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Test</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #6a9beb');
  })
  test('Render inverted button', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black');
  })
  test('Render spinner button', () => {
    render(<Button isLoading={true}>Test</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  })
})