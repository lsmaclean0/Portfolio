import React from 'react';
import man from '../images/man.png';
import cv from '../images/cv.png';
import projects from '../images/coding.png';

export default function Home() {
    return(
    <div className="App">
      <div class="App-header">
        <div class="col" id="icon">
          <img class="col align-self-start" src={man}></img>
          <h1 class="col align-self-start">About</h1>
        </div>
        <div class="col" id="icon">
            <img class="col align-self-start" src={cv}></img>
            <h1 class="col align-self-start">Resume</h1>
        </div>
        <div class="col" id="icon">
            <img class="col align-self-start" src={projects}></img>
            <h1 class="col align-self-start">Projects</h1>
        </div>
      </div>
    </div>
    )
}