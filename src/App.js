import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "e891d92988f04fb1aa4acb2d6f19a97d";
class App extends React.Component {
  getWeather= async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
}
render(){
  return(
    <div>
    <Titles/>
    <Form getWeather={this.getWeather}/>
    <Weather/>
    </div>
  );
}
}
export default App