import { useRef, useEffect, useState } from "react";
import Layout from "../components/Layout";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXMtY2FuY2lvIiwiYSI6ImNsdXE5NG55MTJoNGkyamxoeDF1dmZ1bzEifQ.ZxjM8XgIPOPdEGclWCi6ZQ';


function ProfilePage() {

    const mapContainer_1 = useRef(null);
    const map_1 = useRef(null);
    const [lng_1, setLng_1] = useState(-70.9);
    const [lat_1, setLat_1] = useState(42.35);
    const [zoom_1, setZoom_1] = useState(9);
  
    const mapContainer_2 = useRef(null);
    const map_2 = useRef(null);
    const [lng_2, setLng_2] = useState(-70.9);
    const [lat_2, setLat_2] = useState(42.35);
    const [zoom_2, setZoom_2] = useState(9);

    useEffect(() => {
        if (map_1.current) return; // initialize map only once
        map_1.current = new mapboxgl.Map({
          container: mapContainer_1.current,
          style: 'mapbox://styles/lucas-cancio/cluubttgi006m01pa98c3ftog', // style URL
          center: [lng_1, lat_1],
          zoom: zoom_1
        });
        map_1.current.addControl(new mapboxgl.NavigationControl());
        map_1.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));
      }, [map_1]);

    useEffect(() => {
        if (map_2.current) return; // initialize map only once
        map_2.current = new mapboxgl.Map({
          container: mapContainer_2.current,
          style: 'mapbox://styles/lucas-cancio/cluubttgi006m01pa98c3ftog', // style URL
          center: [lng_2, lat_2],
          zoom: zoom_2
        });
        map_2.current.addControl(new mapboxgl.NavigationControl());
        map_2.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));
      }, [map_2]);

    return (
        <Layout>
            {/* <header>
                <h1>Profile Page</h1>
                <a href="/"> Anchor to Landing Page </a>
            </header> */}
            <div className="container-fluid custom-bg-dark">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row my-5 mx-4">
                        <div className="d-flex flex-column col-6 justify-content-center align-items-center">
                            <img className="profile-image p-5" src={require("../assets/images/hash_slinging_slasher.jpg")} alt=""/>
                        </div>
                        <div className="d-flex flex-column col-6 justify-content-center align-items-center">
                            <div className="my-4">
                                <h1><strong>Billy Bob</strong></h1>
                                {/* <h1><strong>{{user.first_name}} {{user.last_name}}</strong></h1><!--NAME--> */}
                            </div>
                            <div className="my-2">
                                <strong> Explorer XP: </strong> 45
                                {/* <strong> Explorer XP: </strong> {{user.profile.xp}} <!--Score--> */}
                            </div>
                            <div className="my-2">
                                <strong>Quests Completed: </strong> 
                                4
                                {/* {% if user.profile.quests_completed %}
                                {{user.profile.quests_completed.count}}
                                {% else %} 0 {% endif %} */}
                            </div>
                            <div className="my-2">
                                <strong>Quests Created: </strong> 
                                7
                                {/* {% if user.profile.quests_created_set %}
                                {{user.profile.quests_created_set.count}}
                                {% else %} 0 {% endif %} */}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row my-5">
                        <div className="d-flex flex-column col-6 align-items-center justify-content-center px-2">
                            <h3>Quests Completed: </h3>
                            {/* {% if user.profile.quests_completed.count > 0 %}
                                <ul>
                                    {% for quest_completed in user.profile.quests_completed.all %}
                                    <li>
                                        <a className="no-link-color" href="{% url 'quests:questDetails' 1%}">
                                            <p>{{quest_completed.name}}</p>
                                        </a>
                                    </li>
                                    {% endfor %}
                                </ul>
                            {% else %} */}
                                <h5 style={{color:"#4cba52"}}>You have not completed any quests.</h5>
                                <h5 style={{color:"#4cba52"}}>Find quest in your area using the
                                    <a href="/quests/search/">Quest Search Page</a>
                                </h5>
                            {/* {% endif %} */}
                        </div>
                        <div className="d-flex flex-column col-6 my-2 px-2">
                            <div ref={mapContainer_1} className="py-4" style={{width: 100 + "%", height: 400 + "px"}} />

                        </div>
                    </div>

                    <div className="d-flex flex-row my-5 mx-2 ">
                        <div className="d-flex flex-column col-6 my-2 py-2 px-2">
                            <div ref={mapContainer_2} className="py-4" style={{width: 100 + "%", height: 400 + "px"}} />
                        </div>
                        <div className="d-flex flex-column col-6 align-items-center justify-content-center px-2">
                            <h3>Quests Created: </h3>
                            {/* {% if user.profile.quests_created.count > 0 %}
                            <ul>
                                {% for quest_created in user.profile.quests_created.all %}
                                <li>
                                    <a className="no-link-color" href="{% url 'quests:questDetails' 1 %}">
                                        <h4 className="display-4">{{quest_created.name}}</h4>
                                    </a>
                                </li>
                                {% endfor %}
                            </ul>
                            {% else %} */}
                                <h5 style={{color:"#4cba52"}}>You have not created any quests.</h5>
                                <h5 style={{color:"#4cba52"}}>Create a quest 
                                    <a href="/quests/editor/">HERE</a>
                                </h5>
                            {/* {% endif%} */}
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    );
};

export default ProfilePage;

