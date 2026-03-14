import Navigation from "../components/Navigation";
import IssuesList from "../components/IssuesList";
import Footer from "../components/Footer";

function Issues() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <Navigation />
            <div className="pt-16">
                <IssuesList />
            </div>
            <Footer />
        </div>
    );
}

export default Issues;
