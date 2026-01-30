import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AiResumeBuilderPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-app-bg text-text-main flex flex-col">
            <header className="py-4 px-6 border-b border-border-main">
                <button onClick={() => navigate('/')} className="p-2 rounded-full hover:bg-secondary/10">
                    <ArrowLeft className="w-5 h-5" />
                </button>
            </header>

            <main className="flex-1 flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Coming Soon</h1>
                    <p className="text-lg text-text-muted mb-6">We're building an improved AI resume enhancer. Check back soon!</p>
                    <button onClick={() => navigate('/')} className="px-4 py-2 bg-primary text-white rounded-lg">Go Home</button>
                </div>
            </main>
        </div>
    );
}
