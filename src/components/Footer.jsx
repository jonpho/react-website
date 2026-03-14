function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-slate-500 font-mono text-sm">
                    Designed & Built by <span className="text-cyan-400">Jonathan Pho</span> · {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
