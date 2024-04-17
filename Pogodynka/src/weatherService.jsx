const API_KEY = "432a5fdc008725acc44ea2320af70a2e";
const CITY = "Gdańsk";
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Nie udało się pobrać danych pogodowych.");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Wystąpił błąd:", error);
  });
