import { bgImage } from "@/models/bgImage.js"
import { api } from "./AxiosService.js"

class ImageService {
    async getBackgroundImage() {
        const res = await api.get('/api/images')
        const image = new bgImage(res.data)
        return image;
    }
}
export const imageService = new ImageService();