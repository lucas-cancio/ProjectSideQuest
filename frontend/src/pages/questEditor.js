import Layout from "../components/Layout";

import "../assets/styles/questEditorStyles.css";

function QuestEditorPage() {
    return (
        <Layout isViewHeight100={true}>
            <div className="container-fluid m-0 p-0 bg-dark text-light">
                <div className="d-flex flex-column col-12 ">
                    <div className="d-flex flex-row m-3 justify-content-center align-items-center">
                        <div className="d-flex flex-column flex-grow-1 align-items-center">
                            <h1 className="page-title"><strong>Create Your Own Quest</strong></h1>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-center my-4">
                        <div className="category-wrapper d-flex flex-column col-9 justify-content-center align-items-center" >
                            <button data-bs-toggle="collapse" data-bs-target="#generalQuestInfoCollapsible" className="category-title-wrapper d-flex flex-row" type="button">
                                <div className="category-title d-flex flex-column col-12 align-items-center p-2">
                                    <h3> Edit General Quest Information </h3>
                                </div>
                            </button>
                            <div id="generalQuestInfoCollapsible" className="collapse">
                                <div className="d-flex flex-row p-2" style={{width:100+"%"}}>
                                    <div className="d-flex flex-column col-12 align-items-center flex-grow-1">
                                        <div className="input-row d-flex flex-row justify-content-around my-4">
                                            <div className="d-flex flex-column flex-grow-1">
                                                <label className="mx-2" for="formQuestTitle">Quest Title</label>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1">
                                                <input type="text" name="formQuestTitle" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCountry">Country</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCountry" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestState">State</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestState" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCity">City</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCity" />
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-center my-4">
                        <div className="category-wrapper d-flex flex-column col-9 justify-content-center align-items-center" >
                            <button data-bs-toggle="collapse" data-bs-target="#questMapCollapsible" className="category-title-wrapper d-flex flex-row" type="button">
                                <div className="category-title d-flex flex-column col-12 align-items-center p-2">
                                    <h3> Edit Quest Map  </h3>
                                </div>
                            </button>
                            <div id="questMapCollapsible" className="collapse">
                                <div className="d-flex flex-row p-2" style={{width:100+"%"}}>
                                    <div className="d-flex flex-column col-12 align-items-center flex-grow-1">
                                        <div className="input-row d-flex flex-row justify-content-around my-4">
                                            <div className="d-flex flex-column flex-grow-1">
                                                <label className="mx-2" for="formQuestTitle">Quest Title</label>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1">
                                                <input type="text" name="formQuestTitle" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCountry">Country</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCountry" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestState">State</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestState" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCity">City</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCity" />
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-center my-4">
                        <div className="category-wrapper d-flex flex-column col-9 justify-content-center align-items-center" >
                            <button data-bs-toggle="collapse" data-bs-target="#questScrollCollapsible" className="category-title-wrapper d-flex flex-row" type="button">
                                <div className="category-title d-flex flex-column col-12 align-items-center p-2">
                                    <h3> Edit Quest Scroll </h3>
                                </div>
                            </button>
                            <div id="questScrollCollapsible" className="collapse">
                                <div className="d-flex flex-row p-2" style={{width:100+"%"}}>
                                    <div className="d-flex flex-column col-12 align-items-center flex-grow-1">
                                        <div className="input-row d-flex flex-row justify-content-around my-4">
                                            <div className="d-flex flex-column flex-grow-1">
                                                <label className="mx-2" for="formQuestTitle">Quest Title</label>
                                            </div>
                                            <div className="d-flex flex-column flex-grow-1">
                                                <input type="text" name="formQuestTitle" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCountry">Country</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCountry" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestState">State</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestState" />
                                            </div>
                                        </div>
                                        <div className="input-row d-flex flex-row my-1">
                                            <div className="d-flex flex-column">
                                                <label className="mx-1" for="formQuestCity">City</label>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <input type="text" name="formQuestCity" />
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* {% if not user.is_authenticated %}
                <div className="center-text" style="color: #F00">
                    <h4>Create an account and sign in to make your own quests. </h4>
                </div>
            {% endif %} */}
        </Layout>
    );
};

export default QuestEditorPage;
