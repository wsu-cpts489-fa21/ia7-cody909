import RoundsTable from '../RoundsTable.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('displays confirm delete modal when delete button is clicked', () => {
    const {getByTestId} = render(<RoundsTable rounds={[]}/>)
    const deleteBtn = getByTestId('simulateDeleteButton')
    fireEvent.click(deleteBtn)
    const modal = getByTestId('modal')
    expect(modal).toBeInTheDocument();
})

it('modal is closed and notification displayed when delete confirmed', () => {
    const {getByTestId} = render(<RoundsTable rounds={[]}/>)
    const deleteBtn = getByTestId('simulateDeleteButton')
    fireEvent.click(deleteBtn)
    const modal = getByTestId('modal')
    expect(modal).toBeInTheDocument();
    const confirmDelete = getByTestId('Yes, delete round')
    fireEvent.click(confirmDelete)
    expect(modal).not.toBeInTheDocument()
    const notification = getByTestId('notification')
    expect(notification).toBeInTheDocument()
})

it('modal is closed and returns to roundsTable when delete canceled', () => {
    const {getByTestId} = render(<RoundsTable rounds={[]}/>)
    const deleteBtn = getByTestId('simulateDeleteButton')
    fireEvent.click(deleteBtn)
    const modal = getByTestId('modal')
    expect(modal).toBeInTheDocument();
    const confirmDelete = getByTestId('No, do not delete round')
    fireEvent.click(confirmDelete)
    expect(modal).not.toBeInTheDocument()
    const roundsTable = getByTestId('roundsTable')
    expect(roundsTable).toBeInTheDocument()
})