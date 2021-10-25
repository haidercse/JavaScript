// fetch city from IP
async function getCity() {
    const city = await fetch('https://ipapi.co/103.217.111.186/json/');
    const data = await city.json();
    return data.city;

}

getCity().then((data) => {
    document.getElementById("w-location").textContent = `${data}`;
})