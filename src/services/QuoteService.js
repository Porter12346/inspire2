import { api } from "./AxiosService.js"

class QuoteService {
    async getQuote() {
        const res = await api.get('api/quotes')
        const quote = res.data
        return quote
    }
}
export const quoteService = new QuoteService()