window.addEventListener('load', () => {
    let longitude
    let latitude
    let tempDescription = document.querySelector('.temperature-description')
    let tempdegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    let windSpeed = document.querySelector('.speed')
    let humidity = document.querySelector('.humid')
    let pressure = document.querySelector('.pressure')
    let iconSection = document.querySelector('.icon-section')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude
            latitude = position.coords.latitude

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d8920914d2e02f5d6962d4678bdc6c5a&units=metric`

            fetch(api)
                .then(data => {
                    return data.json()
                })
                .then(data => {
                    console.log(data)
                    let temperature = data.main
                    locationTimezone.textContent = data.name
                    tempdegree.textContent = temperature.temp
                    humidity.textContent = temperature.humidity
                    let info = data.weather
                    let icon = info[0].icon
                    tempDescription.textContent = info[0].description
                    windSpeed.textContent = data.wind.speed
                    pressure.textContent = temperature.pressure
                    let src = `https://openweathermap.org/img/wn/${icon}@2x.png`
                    var img = document.createElement("img")
                    img.src = src
                    iconSection.appendChild(img)
                })
        })
    }
    else {
        h1.textContent = 'The location is inaccessible'
    }
    function setIcons(icon, iconID) {
        const skycons = new skycons({color: white})
    }
})
