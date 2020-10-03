import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./weather";
import { Alert } from 'react-native';

const API_KEY = "b884ffde0bc3d065bef4d34ddc54c774";

export default class extends React.Component{
  state = {
    isLoading: true,
  };
  getWeather = async(lat, lon) => {
    const {data: {main: {temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    this.setState({isLoading: false, condition: weather[0].main, temp})
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();  
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So Sad");
    }
  
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}></Weather>;
  }
}