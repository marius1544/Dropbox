const TOSmenuCheckboxVar = document.getElementById("TOSmenuCheckbox");
const submitTosBtn = document.getElementById("submitTOS");
const userNameInp = document.getElementById("usernameInp");

submitTosBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const usernameVar = userNameInp.value;

  let hasConsented = false;
  if (TOSmenuCheckboxVar.checked) {
    hasConsented = true;
  } else {
    hasConsented = false;
  }

  try {
    const response = await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameVar,
        consent: hasConsented,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Feil ved opprettelse av bruker:");
  }
});
