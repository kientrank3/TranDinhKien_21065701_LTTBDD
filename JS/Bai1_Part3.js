const printForecast = arr => {
    const forecastStrings = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);

    console.log('... ' + forecastStrings.join(' ... ') + ' ...');
};

const data1 = [17, 21, 23];
printForecast(data1); // Output: ... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ...

const data2 = [12, 5, -5, 0, 4];
printForecast(data2);