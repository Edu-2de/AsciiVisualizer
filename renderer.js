const figlet = require('figlet');

window.onload = () => {
  const input = document.getElementById('user-text');
  const btn = document.getElementById('generate-btn');
  const output = document.getElementById('ascii-output');

  btn.onclick = () => {
    const text = input.value.trim();
    if (!text) {
      output.textContent = "Please enter some text!";
      return;
    }
    figlet(text, (err, data) => {
      if (err || !data) {
        output.textContent = "Error generating ASCII art.";
        return;
      }
      output.textContent = data;
    });
  };
};