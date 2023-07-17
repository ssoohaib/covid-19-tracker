
# Covid-19 Tracker

The COVID-19 Tracker is a React web application designed to display daily data on worldwide COVID-19 cases, deaths, and recoveries. It provides real-time updates and allows users to view data for any specific country.

The project aims to provide users with a comprehensive overview of the global impact of the COVID-19 pandemic. By visualizing the data, users can stay informed about the current situation, track the progression of the virus, and make data-driven decisions.



## Features

- **Worldwide Data:** The app displays the latest statistics on COVID-19 cases, deaths, and recoveries worldwide.
- **Country-specific Data:** Users can search for any country and view its specific COVID-19 data, including cases, deaths, and recoveries.
- **Map Visualization:** The app includes a map that displays a visual representation of COVID-19 cases spread across the globe. Users can see the distribution of cases in different countries.
- **Line Graph:** A line graph is included to display the data from the previous 120 days, allowing users to observe trends and patterns in COVID-19 cases over time.
- **Table View:** The application features a table that shows the total cases for each country in descending order. This allows users to compare the severity of the outbreak in different countries.
- **Real-time Updates:** The application fetches data from [disease.sh](https://disease.sh/) and updates the information in real-time, ensuring accuracy and reliability.
- **Responsive Design:** The app is designed to be responsive, ensuring that it works seamlessly across different devices and screen sizes.



## Installation

Install covid-19-tracker with npm

```bash
  git clone https://github.com/ssoohaib/covid-19-tracker.git
```

```bash
  cd covid-19-tracker
```

```bash
  npm install
```

```bash
  npm run
```
## Technologies
- React
- Chart.js
- Leaflet
## Dependencies


```javascript
"@emotion/react": "^11.11.1",
"@emotion/styled": "^11.11.0",
"@mui/material": "^5.13.6",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"chart.js": "^4.3.0",
"leaflet": "^1.9.4",
"numeral": "^2.0.6",
"react": "^18.2.0",
"react-chartjs-2": "^5.2.0",
"react-dom": "^18.2.0",
"react-leaflet": "^4.2.1",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
```


## Screenshots

#### Cases
![cases](https://images5.alphacoders.com/422/422909.jpg)

#### Deaths
![deaths](https://images5.alphacoders.com/422/422909.jpg)

#### Recovered
![recovered](https://images5.alphacoders.com/422/422909.jpg)
## API Reference

#### [disease.sh](https://disease.sh/) - Open Disease Data API

#### Get totals for a specific country
```http
  GET https://disease.sh/v3/covid-19/countries/${country}?strict=true
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required:** Country's name to fetch. |

#### Get global totals
```http
  GET https://disease.sh/v3/covid-19/all
```

#### Get totals for a all country
```http
  GET https://disease.sh/v3/covid-19/countries
```

#### Get last 120 days totals
```http
  GET https://disease.sh/v3/covid-19/historical/all?lastdays=120
```




## Contributions

Contributions are always welcome!  
If you've fixed a bug or implemented a cool new feature that you would like to share, please feel free to open a pull request here.


## License

```
MIT License

Copyright (c) 2023.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```



