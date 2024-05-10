import Layout from "../components/Layout";
// import '../assets/styles/landingStyles.css';


function LandingPage() {
    return (
        <Layout>
            <div className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container px-5">
                        <h1 className="masthead-heading mb-0">SideQuest </h1>
                        <h3 className="masthead-subheading mb-0">Explore like never before</h3>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                    </div>
                </div>
            </div>
            {/* <!-- Content section 1--> */}
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={require("../assets/images/OldMapAsia.jpg")} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <a className="no-link-color" href="/quests/search/">
                                    <h2 className="display-4">Search for nearby quests...</h2>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Content section 2--> */}
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={require("../assets/images/RuinedChurch.jpg")} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <a className="no-link-color" href="/quests/editor/">
                                    <h2 className="display-4">Create and publish your own quests</h2>
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Content section 3--> */}
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={require("../assets/images/CityOverlook.jpg")} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Explore in a new way</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Footer--> */}
            {/* <footer className="py-5 bg-black">
                <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your Website 2024</p></div>
            </footer> */}
        </Layout>
    );
};

export default LandingPage;