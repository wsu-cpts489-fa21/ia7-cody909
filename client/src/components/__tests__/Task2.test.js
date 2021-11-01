import PopUpModal from '../PopUpModal.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('accepts an text prop and sets it as modal title', () => {
    const {getByTestId} = render(<PopUpModal text="Hello"/>)
    const title = getByTestId('modalTitle');
    expect(title).text = 'Hello'
})

it('choices prop creates buttons that fire corresponding functions', () => {
    var value = 0
    const increment = () => ++value
    const decrement = () => --value
    const choices = {"increment": increment, "decrement": decrement}
    const {getByTestId} = render(<PopUpModal text="Hello" choices={choices}/>)
    const option1 = getByTestId('increment')
    const option2 = getByTestId('decrement')
    fireEvent.click(option1)
    expect(value) === 1;
    fireEvent.click(option1)
    expect(value) === 2;
    fireEvent.click(option2)
    expect(value) === 1
})

it('handles error for value of choice not being a function without crashing', () => {
    const choices = {"hello": "world"}
    const {getByTestId} = render(<PopUpModal text="Hello" choices={choices}/>)
    const option1 = getByTestId('hello')
    fireEvent.click(option1)
})

