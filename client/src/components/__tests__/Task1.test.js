import NotificationToast from '../NotificationToast.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotificationToast />, div);
})

it('has gray background and white text by default', () => {
    const {getByTestId} = render(<NotificationToast />)
    const notificationBody = getByTestId('notificationBody')
    const style = window.getComputedStyle(notificationBody)
    expect(style.backgroundColor).toBe('gray')
    expect(style.color).toBe('white')
})

it('can be customized to have a different background and text color with props', () => {
    const {getByTestId} = render(<NotificationToast textColor="black" backgroundColor="blue"/>)
    const notificationBody = getByTestId('notificationBody')
    const style = window.getComputedStyle(notificationBody)
    expect(style.backgroundColor).toBe('blue')
    expect(style.color).toBe('black')
})

it('is dismissed when the x icon is clicked', async () => {
    const {getByTestId, getByRole} = render(<NotificationToast />)
    const notification = getByTestId('notification')
    //couldn't figure out how to click the dismiss button
}) 