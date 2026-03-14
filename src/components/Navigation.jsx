import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-cyan-400 font-bold text-xl font-mono">
                        Jonathan Pho
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/issues" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Issues
                        </Link>
                        <a href="https://www.facebook.com/JonathanPhoForCityCouncil" target="_blank" rel="noreferrer"
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/in/jonpho" target="_blank" rel="noreferrer"
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            LinkedIn
                        </a>
                        <a href="https://github.com/jonpho" target="_blank" rel="noreferrer"
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            GitHub
                        </a>
                    </div>

                    <button
                        className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col space-y-4">
                    <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
                    <Link to="/issues" className="text-slate-300 hover:text-cyan-400 transition-colors" onClick={() => setMobileOpen(false)}>Issues</Link>
                    <a href="https://www.facebook.com/JonathanPhoForCityCouncil" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">Facebook</a>
                    <a href="https://www.linkedin.com/in/jonpho" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/jonpho" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">GitHub</a>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
