const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { name, email, message } = event.target;

  const endpoint =
    "https://rhexabcwstvmurw6cti75wqyi40vwayi.lambda-url.us-east-1.on.aws/";
  
  const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) throw new Error("Error in fetch");
    const responseData = await response.json();
    document.getElementById("result-text").innerText =
      "Email sent successfully!";
  } catch (error) {
    document.getElementById("result-text").innerText =
      "An unknown error occurred.";
  }
});