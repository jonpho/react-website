import React from 'react';
import headShot from "../images/headshot.jpg";

class IssuesList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h2 className="text-center">Issues</h2>
                        <h5 className="text-left">Support Our Growth by Attracting New Businesses</h5>
                        <p className="text-left">To foster our growth, we must attract new businesses while supporting
                            our existing ones. Our downtown has the potential to become a vibrant hub where residents
                            can gather and visitors are drawn to explore. It’s essential that we focus on attracting
                            the right businesses that will contribute to our city’s development and create a thriving
                            community for all.
                        </p>
                        <h5 className="text-left">Communications</h5>
                        <p className="text-left">We must prioritize effective communication with our residents,
                            ensuring they are informed about what’s happening in our city. Are we doing enough to keep
                            them updated? Are we utilizing the right channels to reach everyone? As someone in the tech
                            industry, I understand the significance of using the most effective communication methods.
                            Let’s enhance our efforts to keep our community engaged and informed.
                        </p>
                        <h5 className="text-left">Taxes</h5>
                        <p className="text-left">Are we doing everything possible to keep our taxes low? Since the
                            majority of our tax revenue comes from residents, it's crucial that we attract new
                            businesses to support our city. By fostering a vibrant business environment, we can help
                            alleviate the tax burden on our community and achieve a more balanced financial future.
                        </p>
                        <h5 className="text-left">Safety</h5>
                        <p className="text-left">Our city has a proud history of safety, and it’s vital that we maintain
                            that standard. We must actively support our police and fire departments, ensuring they have
                            the resources necessary to protect our community. Together, we can work to keep our city
                            secure for everyone.
                        </p>
                    </div>
                    <div className="col-4">
                        <img className="img-thumbnail" alt="profile" src={headShot}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default IssuesList;
