# asciiVisualizer

asciiVisualizer is a cross-platform desktop application that transforms images and text into ASCII art. With a simple and user-friendly interface, you can upload an image or type any phrase and instantly see it represented as ASCII characters. Powered by JavaScript and Electron, asciiVisualizer brings classic ASCII art into the modern era—right on your desktop.

## Features

- **Convert images to ASCII art:** Upload any image (JPG, PNG, etc.) and visualize its ASCII representation.
- **Text to ASCII banners:** Type any phrase and generate stylized ASCII text (banner style).
- **Preview and export:** View your ASCII art in the app, and copy or export the result to a file.
- **Customizable:** Adjust output size, character set, and contrast for personalized results.
- **Intuitive interface:** Simple drag-and-drop or file picker for images, and a text box for text banners.
- **Cross-platform:** Works on Windows, macOS, and Linux.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

### Clone the repository

```bash
git clone https://github.com/yourusername/asciiVisualizer.git
cd asciiVisualizer
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

## Usage

1. **Image to ASCII:**
    - Click the "Upload Image" button or drag an image file into the window.
    - Adjust settings as desired (width, brightness, charset).
    - The ASCII art will appear in the main window.
    - Copy or export the ASCII result if you wish.

2. **Text to ASCII:**
    - Select the "Text" tab or area.
    - Type your text in the input box.
    - Choose a style/font if available.
    - The ASCII banner will display instantly.
    - Copy or export as needed.

## Project Structure

```
asciiVisualizer/
├── main.js          # Electron main process
├── package.json
├── index.html       # UI layout
├── renderer.js      # Frontend logic
├── ascii.js         # ASCII art conversion logic
├── assets/          # Icons, example images
└── README.md
```

## Technologies Used

- [Electron](https://www.electronjs.org/) — for building desktop apps with JavaScript.
- [Node.js](https://nodejs.org/) — runtime environment.
- [Pillow](https://pypi.org/project/Pillow/) (for reference; not used directly in JS) — image manipulation, if using Python scripts.
- [figlet.js](https://www.npmjs.com/package/figlet) — for stylized text banners.
- [Jimp](https://www.npmjs.com/package/jimp) or [sharp](https://www.npmjs.com/package/sharp) — for image processing in Node.js.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Author

[Your Name](https://github.com/yourusername)

---

Enjoy turning your images and words into creative ASCII art!