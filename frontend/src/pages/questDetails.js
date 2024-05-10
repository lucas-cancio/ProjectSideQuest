import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Layout from "../components/Layout";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXMtY2FuY2lvIiwiYSI6ImNsdXE5NG55MTJoNGkyamxoeDF1dmZ1bzEifQ.ZxjM8XgIPOPdEGclWCi6ZQ';


function QuestDetailsPage() {

    let scroll = 
    `    From where the springs sing crystal clear,
    Set forth where whispers ride the air.
    
    Past the oak that holds the tales of old,
    Where stories whisper, yet remain untold.

    Beneath the gaze of the gator's pride,
    Where mossy paths through marshes glide.

    Through arches adorned with ivy's grace,
    Where memories linger, time's gentle embrace.

    Among the towers where knowledge gleams,
    In halls where wisdom's echo streams.

    Beyond the fields where orange hues ignite,
    Where melodies blend with the evening light.

    Amidst the bustle where the streets converge,
    Find solace beneath the mossy verge.

    Where dreams take flight in Spanish moss,
    In Gainesville's heart, there lies your cross.`

    return (
        <Layout isViewHeight100={true}>
            <div className="container-fluid custom-bg-dark">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-2 py-5">
                        <h1><strong> Dummy Quest Name</strong></h1>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly my-5 pb-3">
                        <div>
                            <strong>Difficulty:</strong> 4/10
                        </div>
                        <div>
                            <strong>Created by:</strong> Dummy Quest Creator
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column col-6 flex-grow-1 align-items-center">
                        <img className=""
                            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-87.0186,32.4055,14/500x300?access_token=pk.eyJ1IjoibHVjYXMtY2FuY2lvIiwiYSI6ImNsdXE5NG55MTJoNGkyamxoeDF1dmZ1bzEifQ.ZxjM8XgIPOPdEGclWCi6ZQ"
                            alt="Map of the Edmund Pettus Bridge in Selma, Alabama, with a black 'L' marker positioned in the middle of the bridge."
                        />
                    </div>
                    <div className="flex-column col-6 flex-grow-1">
                        <pre className="text-center">{scroll}</pre>
                    </div>
                </div>
            </div> 
        </Layout>
    );
};

export default QuestDetailsPage;