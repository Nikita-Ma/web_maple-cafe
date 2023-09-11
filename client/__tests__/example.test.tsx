import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Exmaple} from "@/components/Example";

describe('Example', () => {
    it('renders a heading', () => {
        render(<Exmaple/>)

        const heading = screen.getByRole('heading', {
            name: /Example/i,
        })

        expect(heading).toBeInTheDocument()
    })
})