import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Layout from "../components/Layout";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXMtY2FuY2lvIiwiYSI6ImNsdXE5NG55MTJoNGkyamxoeDF1dmZ1bzEifQ.ZxjM8XgIPOPdEGclWCi6ZQ';


function QuestSearchPage() {

    const mapContainer_1 = useRef(null);
    const map_1 = useRef(null);
    const [lng_1, setLng_1] = useState(-70.9);
    const [lat_1, setLat_1] = useState(42.35);
    const [zoom_1, setZoom_1] = useState(9);

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

        // dd quest start point markers
        //         {% for quest in quest_results %}
        //             new mapboxgl.Marker({
        //                 color: "#FF2233",
        //                 className: "quest_#{{quest.id}}_marker",
        //             })
        //                 .setLngLat([{{ quest.start_waypoint.longitude }}, {{ quest.start_waypoint.latitude }}])
        //                 .addTo(map);
        //         {% endfor %}        
      }, [map_1]);




    return (
        <Layout isViewHeight100={true}>
            <div className="container-fluid">
                <div className="container-fluid my-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1><strong>Quest Search Page</strong></h1>
                    </div>
                </div> 
                    
                <div className="container-fluid">
                    <div className="d-flex flex-row" style={{height: 70+"vh"}}>
                        <div className="d-flex flex-column flex-grow-1 col-4 justify-content-center align-items-center">
                            <h2 className="display-2"><strong>Quests Found</strong></h2>
                            <br />
                            <ul>
                                <li>
                                    <Link to="/quests/1">
                                        <h4> Quest name #1</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/quests/2">
                                        <h4> Quest name #2</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/quests/3">
                                        <h4> Quest name #3</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/quests/4">
                                        <h4> Quest name #4</h4>
                                    </Link>
                                </li>
                            </ul>
                            {/* {% for quest in quest_results %}
                                <a className="no-link-color" href="{% url 'quests:questDetails' quest.id%}">
                                    <h4> {{quest.name}}</h4>
                                </a>
                            {% endfor %} */}
                        </div>
                        <div className="d-flex flex-column flex-grow-1 col-8 mb-5 py-4 px-4 justify-content-center align-items-center rounded" style={{backgroundColor: "#c4a471"}}>
                            <div ref={mapContainer_1} className="py-4" style={{width: 100 + "%", height: 400 + "px"}} />
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    );
};

export default QuestSearchPage;