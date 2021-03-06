import { ApiService } from './apiService'

export class SlackService {
    /**
     * ้ไฟกใใ
     * @param api 
     * @param payload 
     */
    static sendMessage(api: string, payload: string) {
        const response = ApiService.postApi(api, payload)

        if (response.getResponseCode() !== 200) {
            Logger.log('Request failed ' + response.getResponseCode())
        }

        return true
    }
}
