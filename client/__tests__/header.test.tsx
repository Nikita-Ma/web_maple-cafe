import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Header} from "@/components/Header";

// TODO: * More test on elements on links
describe('header', () => {
    test('icon available', () => {
        render(<Header/>)

        const logotype = screen.getByRole('img', {name: 'logotype-icon'})

        expect(logotype).toBeInTheDocument()
    })
})