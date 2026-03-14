import headShot from '../images/headshot.jpg';

function About() {
    return (
        <section className="bg-slate-800 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    <span className="text-cyan-400 font-mono text-xl block mb-2">01.</span>
                    About Me
                </h2>
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            I'm a seasoned software engineer with over a decade of experience automating and maintaining
                            cloud-native backend infrastructure. I specialize in Terraform, Kubernetes, and AWS —
                            building and scaling CI/CD pipelines with GitHub Actions, implementing Infrastructure as Code
                            practices, and containerizing applications with Docker to support reliable software delivery.
                        </p>
                        <p>
                            My background spans DevOps, full-stack development, and QA automation across both startups
                            and established companies. I'm proficient in Python, Bash, Ruby, and JavaScript, with deep
                            experience in monitoring and observability using CloudWatch and Datadog, on-call incident
                            response, and Linux server administration end-to-end.
                        </p>
                        <p>
                            I actively leverage AI-assisted tools to enhance productivity and stay at the forefront of
                            modern engineering practices. Whether I'm hardening cloud security with AWS IAM and WAF,
                            architecting automation frameworks, or mentoring engineering teams, I'm driven to build
                            systems that are scalable, secure, and built to last.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <img
                                src={headShot}
                                alt="Jonathan Pho"
                                className="relative z-10 w-64 h-64 object-cover object-top rounded-lg"
                            />
                            <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg translate-x-3 translate-y-3 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


