import React from "react";
import avatar1 from './avatar1.png';

let leaderboard = () => {
    return(
        <div class="container">
            <h1>Leaderboard</h1>

{/*            <!-- <img src="podium.jpg" alt="Podium" class="podium"/>

    <!-- Add the dynamic podium to the top of the page*/}
            <div class="podium">
                <div class="third-place"></div>
                    <span class="label-3rd">3rd</span>
                    <span class="label-2nd">2nd</span>
                    <span class="label-1st">1st</span>
                <div class="first-place"></div>
                <div class="second-place"></div>
            </div>
            <ul class="player_list">
                <li 
                class="player">

                <br></br>
                    <img src={avatar1} alt="Player 1 Avatar"/>
                    <span class="name">Player 1</span>
                    <span class="score"> Score: 610</span>  
                    <span class="rank">4th</span>
                </li>

                {/* Add more player entries as needed*/}

                <br></br>

                <li class="player">
                    <img src={avatar1} alt="Player 2 Avatar"/>
                    <span class="name">Player 2</span>
                    <span class="score">Score: 458</span>
                    <span class="rank">5th</span>

                </li>

                <br></br>

                <li class="player">
                    <img src={avatar1} alt="Player 3 Avatar"/>
                    <span class="name">Player 3</span>
                    <span class="score">Score: 229</span>
                    <span class="rank"> 6th</span>

                </li>

                <br></br>

                <li class="player">
                    <img src={avatar1} alt="Player 4 Avatar"/>
                    <span class="name">Player 4</span>
                    <span class="score">Score: 171</span>
                    <span class="rank">7th</span>

                </li>
                <br></br>
            </ul>

            <h2>Friends</h2>
            <ul class="friends-list">
                <li class="friend">Friend 1</li>
                {/*Add more friend entries as needed*/}
            </ul>

            <button type="button">See All Friends →</button>
        </div>
    );
}

export default leaderboard;