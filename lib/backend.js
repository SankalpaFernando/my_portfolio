const { parse } = require('rss-to-json');
const axios = require('axios');

export const getMyPost = async () => {
    try{
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sankalpafernando2017');
        console.log(response.data);
        return response.data.items;
    }catch(e){
        console.log(e);
        return [];
    }
}