export default {
  getUserPref() {
    if (localStorage) {
      const userPrefData = localStorage.getItem('userPref');
      const userPref = userPrefData ? JSON.parse(userPrefData) : {};
      return userPref;
    }
  },
  setUserPref(userPref) {
    if (userPref && userPref.hasOwnProperty('inCelsius')) {
      localStorage.setItem('userPref', JSON.stringify(userPref));
    } else {
      throw new Error('Invalid preferences in userPref param');
    }
  }
};
