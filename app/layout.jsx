import './globals.css';
import { Fraunces, Inter } from 'next/font/google';

// Initialize Google Fonts for the UMBRA typography system
const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    title: 'UMBRA | Movement Lab',
    description: 'A clinical movement lab utilizing Lagrangian mechanics and haptic dominance for profound internal transformation.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${fraunces.variable} antialiased selection:bg-electric-orange selection:text-umbra-navy`}>
        {children}
        </body>
        </html>
    );
}