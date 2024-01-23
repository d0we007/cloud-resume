// JavaScript for the counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://rlvnfqn6ostxt7vf7adpwwda4i0jxmii.lambda-url.us-east-1.on.aws/"
        
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();

