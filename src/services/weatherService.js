const API_KEY = '23f84a7ed3bef67a51a44d47ea5a393d';
const API_CALL = 'https://api.openweathermap.org/data/2.5/weather?q=';

export default {
  async getLocationData(location) {
    function getIcon(icon) {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    function getDataObject(data) {
      const { main, description, icon } = data.weather[0];
      const { country } = data.sys;
      const { name, main: weatherInfo } = data;

      return {
        name,
        country,
        main,
        description,
        iconUrl: getIcon(icon),
        weatherInfo
      };
    }

    try {
      const res = await fetch(`${API_CALL}${location}&appid=${API_KEY}`);
      const data = await res.json();

      return getDataObject(data);
    } catch (err) {
      return null;
    }
  }
};
