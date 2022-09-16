import React from 'react';
import Card from './Card';
import hot_1_mv from '../images/hot_1_mv.jpg'
import hot_2_mv from '../images/hot_2_mv.jpg'
import hot_3_mv from '../images/hot_3_mv.jpg'

const CardList = ({ robots }) => {
  return (
    <div className = "mt0" style = {{marginLleft: 'auto', marginRight: 'auto', alignItems: 'center'}}>
      
        <Card source={hot_1_mv} par = "Kempinsky Hotel"/>
        <Card source={hot_2_mv} par = "Les Bergues"/>
        <Card source={hot_3_mv} par = "Hotel Presient Wilson"/>
        
      
    </div>
  );
}

export default CardList;