import React from 'react'

export default function MemoryGameLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            backgroundImage: 'url(bg.jpg)',
        }} className='bg-gradient-to-r from-amber-200 to-yellow-500 font-mono h-screen'>
            {children}
        </ div>
    )
}
