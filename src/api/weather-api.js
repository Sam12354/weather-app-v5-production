const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const getAll = async () => {
    const city = 'London';
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);

    if (!response.ok) {
        console.error('Weather API error:', response.statusText);
        return [];
        // Return an empty array on error to prevent .map() from breaking in components that expect an array.
    }

    const data = await response.json();
    // console.log(data);

    const weekMappedArray = []
    const seenDates = [];

    for (const item of data.list) {
        const day = new Date(item.dt * 1000).toLocaleDateString('en-US');

        // multiply by 1000 because the dt value from the API is a UNIX timestamp in seconds, but JavaScript’s Date object expects milliseconds — so dt * 1000 converts it correctly

        if (!seenDates.includes(day)) {
            seenDates.push(day);
            weekMappedArray.push({
                dt: item.dt,
                temp: { day: item.main.temp },
                weather: [{ icon: item.weather[0].icon, description: item.weather[0].description }]
            });
        }
    }

    return weekMappedArray
};
