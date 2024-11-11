//This code runs synchronously

function showData()
{
    console.log("showData function finished");
}

//This code runs asynchronously. It can be set aside to allow anything else that is synchronous to be interpreted
async function getRandomFact()
{
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();
    console.log(data.text);
}

async function getTodaysFact()
{
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
    const data = await response.json();
    console.log(data.text);
}

getRandomFact();
getTodaysFact();

