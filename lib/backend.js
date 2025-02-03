const { parse } = require('rss-to-json');

export const getMyPost = async () => {
    try{
        const response = await parse('https://medium.com/feed/@sankalpa2017');
    return response.items;
    }catch(e){
        console.log(e);
        return [];
    }
}