/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import getPosses from '../utils/getPosses';

export default function PosseProfile({posseName}) {
  const [posseData, setPosseData] = useState({});
  console.log(posseData);

  const searchForClickedPosse = async (allPosses) => {
    console.log('in serached for click posses: ', allPosses);
    console.log('we are searching for this posse', posseName);
    let searchedPosse = {};

    allPosses.forEach(posse => {
      if (posse.name === posseName) {
        searchedPosse = posse;
      }
    });
    console.log('final posse ', searchedPosse);
    setPosseData(searchedPosse);
  };
  
  const getAllPosseData = async () => {
    let allPosses = [];
    getPosses()
      .then(res => {
        allPosses = res.data.results;
        searchForClickedPosse(allPosses);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getAllPosseData();
  }, []);

  return(
    <div>
      <Nav />
      <p 
        style={{display: 'flex', alignSelf: 'center', justifySelf: 'center', margin: '12vh'}}
      >Posse profile screen</p>
    </div>
  );
}