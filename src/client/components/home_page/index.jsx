import React, { Component } from 'react';
import Restaurant from '../restaurant';
import RestaurantSelectButtons from '../restaurant_select_buttons';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Restaurant name='Burma Superstar' rating='5 Stars' location='Alameda' cost='$$'  />
        <RestaurantSelectButtons />
      </div>
    );
  }
}
