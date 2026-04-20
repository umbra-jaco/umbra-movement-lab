// App.jsx
import React from 'react';
import NavBar from './NavBar';
import GridOverlay from './GridOverlay';

function App() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-700 selection:text-white relative">
            <GridOverlay />
            <NavBar />

            {/* Main Content Area */}
            <main className="pt-24 px-6 max-w-7xl mx-auto relative z-10">
                {/* Future components will be slotted here */}
                <div className="mt-32">
                    <p className="font-mono text-zinc-600 text-sm">System initialized. Awaiting parameters...</p>
                </div>
            </main>
        </div>
    );
}

export default App;