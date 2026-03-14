function Hero() {
    return (
        <section className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
            <p className="text-cyan-400 font-mono text-lg mb-4">Hi, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">Jonathan Pho</h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 mb-8">DevOps Engineer & Software Engineer</h2>
            <p className="text-slate-400 max-w-2xl mb-10 text-lg leading-relaxed">
                Specializing in cloud-native infrastructure, CI/CD automation, and scalable systems on AWS.
                Passionate about reliability, security, and leveraging AI to ship better software faster.
            </p>
            <div className="flex gap-4">
                <a
                    href="https://github.com/jonpho"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all font-mono text-sm rounded"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/jonpho"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all font-mono text-sm rounded font-semibold"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Hero;
