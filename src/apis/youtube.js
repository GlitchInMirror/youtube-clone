
import axios from 'axios';
const KEY = 'AIzaSyB_bpDGkT4ewIPNGxntcYtB0gF2mScKU-U'
export default axios.create({

    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }

})