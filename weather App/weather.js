class Weather {
    constructor() {
            this.city = city;
            this.appid = 'bd10046a88c7d5c3a2af42bba2e0df7e';
        }
        //fetch weather info from API
    async getWeather() {
        const responseData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);
        const resultData = await responseData.json();
        return resultData.responseData;
    }
}