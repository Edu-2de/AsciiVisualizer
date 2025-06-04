const Jimp = require('jimp');

window.onload = () => {
  const input = document.getElementById('image-upload');
  const output = document.getElementById('ascii-image-output');
  const asciiChars = '@%#*+=-:. ';

  input.onchange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      output.textContent = "Nenhum arquivo selecionado.";
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const buffer = Buffer.from(e.target.result);
        const image = await Jimp.read(buffer);

        const asciiWidth = 90;
        image.resize(asciiWidth, Jimp.AUTO).greyscale();

        let ascii = '';
        for (let y = 0; y < image.bitmap.height; y++) {
          for (let x = 0; x < image.bitmap.width; x++) {
            const pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
            const brightness = pixel.r;
            const charIdx = Math.floor((brightness / 255) * (asciiChars.length - 1));
            ascii += asciiChars[charIdx];
          }
          ascii += '\n';
        }
        output.textContent = ascii;
      } catch (err) {
        output.textContent = "Erro ao processar imagem: " + (err && err.message ? err.message : err);
      }
    };
    reader.onerror = (err) => {
      output.textContent = "Erro ao ler arquivo: " + (err && err.message ? err.message : err);
    };
    reader.readAsArrayBuffer(file);
  };
};