import './globals.css';

export const metadata = {
    title: 'UMBRA | Movement Lab',
    description: 'A clinical movement lab utilizing Lagrangian mechanics and haptic dominance for profound internal transformation.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className="antialiased bg-umbra-navy text-cloud-dancer">
        {children}
        </body>
        </html>
    );
}