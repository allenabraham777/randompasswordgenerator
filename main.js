const generate = (length = 16) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*@&$#.";
  let password = "";
  for(let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  document.getElementById("password").innerText = password;
}