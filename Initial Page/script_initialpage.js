const startButton = document.querySelector(".buttonStart");

startButton.addEventListener("click", function(e) {
    e.preventDefault();

    const userName = document.querySelector("#userName");

    const value = userName.value;

    console.log(userName);
});