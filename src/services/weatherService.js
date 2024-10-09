import { api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await api.get('api/weather')
        const temp = res.data.main.temp
        const tempF = Math.floor((temp - 273.15) * 9/5 + 32)
        return tempF
    }
}
export const weatherService = new WeatherService()