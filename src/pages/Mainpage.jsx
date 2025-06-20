import React from 'react';
import {useState} from 'react';
import Header from '../components/Header';
import BannerMen from '../components/BannerMen';
import MCategories from '../components/Categories/MCategories';
import BannerWomen from '../components/BannerWomen';
import {Gents,Ladies} from '../data';
import WCategories from '../components/Categories/WCategories';
import Footer from '../components/Footer';
// import SignIn from '../components/SignIn';


const Mainpage=()=> {
    const [gentsFashion,setGentsFashion]=useState(Gents)
    const [ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div className='MainPage'>
      <Header/>
      <BannerMen/>
      <MCategories gentsObj={gentsFashion}/>
      <BannerWomen/>
      <WCategories womenObj={ladiesFashion}/>
      <Footer/>
      
    </div>
  );
}
export default Mainpage;
