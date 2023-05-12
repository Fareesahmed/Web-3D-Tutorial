import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        <h1>Web3D Experiments</h1>
        <a href="https://discord.gg/5rTCdzpKnj" style={{color:"#aaf"}}><h2>Web3D Discord Channel</h2></a>
      </header>
      <main>
        <figure>
          <a href='/ship'>
            <img
                src="/img/ship.jpg"
                alt="Sunset over the ocean"
            />
          </a>
          <figcaption>Ship from the Expanse TV show. Features: Environment Box, Animations.</figcaption>
        </figure>
        <figure>
            <a href='/courtyard'>
                <img
                    src="./img/courtyard.jpg"
                    alt="Mountain landscape"
                />
            </a>
          <figcaption>Low Poly Chinese Courtyard, Features: Instances, Material changes, Clouds, Camera moves</figcaption>
        </figure>
      </main>
    </>
  );
};

export default Home;
