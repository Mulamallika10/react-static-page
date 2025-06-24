import React from 'react';
import {useState} from 'react';
import Header from '../components/Header';
import BannerMen from '../components/BannerMen';
import MCategories from '../components/Categories/MCategories';
import BannerWomen from '../components/BannerWomen';
import {Gents,Ladies,Mwatches,Wwatches} from '../data';
import WCategories from '../components/Categories/WCategories';
import Footer from '../components/Footer';
import BannerMenWatch from '../components/BannerMenWatch';
import MenWatches from '../components/Watches/MenWatches';
import WomenWatches from '../components/Watches/WomenWatches';

// import SignIn from '../components/SignIn';


const Mainpage=()=> {
    // const [gentsFashion,setGentsFashion]=useState(Gents)
    // const [ladiesFashion,setLadiesFashion]=useState(Ladies)
    const [watches,setWatches]=useState(Mwatches);
  return (
    <div className='MainPage'>
      <Header/>
      <BannerMen/>
      <MCategories gentsObj={Gents}/>
      <BannerWomen/>
      <WCategories womenObj={Ladies}/>
      <BannerMenWatch/>
      <MenWatches mwobj={watches}/>
      <WomenWatches wobj={Wwatches}/>
      <Footer/>
      
    </div>
  );
}
export default Mainpage;
