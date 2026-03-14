const issues = [
    {
        title: "Support Our Growth by Attracting New Businesses",
        body: "To foster our growth, we must attract new businesses while supporting our existing ones. Our downtown has the potential to become a vibrant hub where residents can gather and visitors are drawn to explore. It's essential that we focus on attracting the right businesses that will contribute to our city's development and create a thriving community for all.",
    },
    {
        title: "Communications",
        body: "We must prioritize effective communication with our residents, ensuring they are informed about what's happening in our city. Are we doing enough to keep them updated? Are we utilizing the right channels to reach everyone? As someone in the tech industry, I understand the significance of using the most effective communication methods. Let's enhance our efforts to keep our community engaged and informed.",
    },
    {
        title: "Taxes",
        body: "Are we doing everything possible to keep our taxes low? Since the majority of our tax revenue comes from residents, it's crucial that we attract new businesses to support our city. By fostering a vibrant business environment, we can help alleviate the tax burden on our community and achieve a more balanced financial future.",
    },
    {
        title: "Safety",
        body: "Our city has a proud history of safety, and it's vital that we maintain that standard. We must actively support our police and fire departments, ensuring they have the resources necessary to protect our community. Together, we can work to keep our city secure for everyone.",
    },
];

function IssuesList() {
    return (
        <section className="bg-slate-900 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2 text-center">
                    <span className="text-cyan-400 font-mono text-xl block mb-2">Issues</span>
                    Platform & Priorities
                </h2>
                <p className="text-slate-400 text-center mb-12">
                    Key issues I'm focused on for the Jordan community.
                </p>
                <div className="space-y-6">
                    {issues.map((issue, i) => (
                        <div
                            key={i}
                            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
                        >
                            <h3 className="text-white font-semibold text-lg mb-3 flex items-start gap-3">
                                <span className="text-cyan-400 font-mono text-sm mt-1 shrink-0">
                                    {String(i + 1).padStart(2, '0')}.
                                </span>
                                {issue.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed pl-8">{issue.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IssuesList;
