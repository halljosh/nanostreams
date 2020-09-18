import React from 'react';

const FAQ = () => {
    return (
        <div className = "faq">
            <h1>faq:</h1>
            <ul>
                <li>
                    <em>what is nanostream?</em><br />
                    nanostream is a minimal video streaming app meant to focus on the pure experience of live streaming without the barrage of visual noise, advertisements, comments, etc. nanostream is creator agnostic, meaning there are no "channels" as such -- just a feed of currently active streams.
                </li>
                <li>
                    <em>who made nanostream?</em><br />
                    nanostream was developed and is currently maintained by <a href="https://www.halljo.sh/">josh hall</a> as a side project.
                </li>
                <li>
                    <em>how does nanostream work?</em><br />
                    nanostream is a React app that currently works locally with <a href="https://github.com/typicode/json-server">json server</a> to maintain stream info on the backend and <a href="https://www.npmjs.com/package/node-media-server">node media server</a> to handle streaming video. we are currently working towards a more stable / fast / remote backend solution, but you can see a demo of the streaming in action <a href = "https://youtu.be/9spVrYz_Pd4">here</a>.
                </li>
                <li>
                    <em>how do I start streaming?</em><br />
                    there are several approaches to starting with video streaming, but arguably the best is to start by downloading <a href="https://obsproject.com/">OBS</a>.   you can check out a tutorial on how to setup OBS <a href="https://www.youtube.com/watch?v=BxHYnL5CTJ0">here</a>, though your mileage may vary depending on your computer's OS.
                </li>
            </ul>
        </div>
    );
};

export default FAQ;