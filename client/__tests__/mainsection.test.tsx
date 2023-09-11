import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {MainSection} from "@/components/MainSection";

describe('MainSection Component', () => {
    it('h1', () => {
        render(<MainSection/>)

        const nameCafe = screen.getByRole('heading', {name: 'Клен'})

        expect(nameCafe).toBeInTheDocument()
    });
})