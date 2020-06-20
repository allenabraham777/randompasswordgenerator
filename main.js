function generate() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*@&$#.";
  const length = 16;
  let password = "";
  for (let i = 0, j = characters.length; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * j));
  }
  document.getElementById("password").innerText = password;
}