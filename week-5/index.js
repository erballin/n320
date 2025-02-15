async function getApiData() {
  console.log("Getting API Data");

  try {
    const apiFetchResp = await fetch(`https://adigimon-api.vercel.app/api/digimon`);
    console.log("API Response:", apiFetchResp);

    const apiJsonResp = await apiFetchResp.json();
    console.log("API JSON:", apiJsonResp[0]);
  } catch (err) {
    console.log("API Error:", err);
  }

  console.log("API Done");
}

function getSlowResource(timerAmount) {
  return new Promise(function (resolve, reject) {
    if (timerAmount > 2000) {
      reject("I am not waiting for that!");
    } else {
      setTimeout(() => {
        resolve("Hurray!!");
      }, timerAmount);
    }
  });
}
getApiData();

function run() {
  console.log("Attempt Resource Load");
  getSlowResource(300)
    .then((resp) => {
      console.log("Resource Loaded:", resp);
    })
    .catch((err) => {
      console.log("Resource Load Unsuccessful:", err);
    });
}

run();
