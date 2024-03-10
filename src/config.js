const weatherAPI = "e7881779c3fa4b0983d104826230107";

export function WeatherLink(city) {
    return 'http://api.weatherapi.com/v1/forecast.json?key=' + weatherAPI + '&q=' + city + '&days=3&aqi=no&alerts=no';
}

export function AutoComplLink(char) {
    return 'http://api.weatherapi.com/v1/search.json?key=' + weatherAPI + '&q=' + char;
}

export const gifAPIv1 = "LIVDSRZULELA"

export function GifLink(condition) {
    return 'https://g.tenor.com/v1/search?q=' + condition + '&key=' + gifAPIv1 + '&limit=50';
}
