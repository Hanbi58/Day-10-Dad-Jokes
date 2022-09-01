const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  jokeEl.innerText = data.joke;
}
// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerText = data.joke;
//     });
// }
