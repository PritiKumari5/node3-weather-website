const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a39042fe15ba4178fbe0f66b23873edd&query=' + lat + ', ' + lon;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect forecast services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. The current temperature is ' + body.current.temperature + ', but feelslike ' + body.current.feelslike + ' with ' + body.current.humidity + '% humidity.')
        }
    })
}

module.exports = forecast