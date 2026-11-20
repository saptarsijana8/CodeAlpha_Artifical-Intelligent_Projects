# 🌐 Language Translation Tool

### Translate Anything, Anywhere.

A simple, interactive, and responsive **Language Translation Web Application** developed using Python Flask, HTML, CSS, and JavaScript. This application allows users to translate text between multiple languages using the MyMemory Translation API.

The project provides an easy-to-use interface with additional features such as copying translated text, swapping languages, clearing text, and listening to translated content using Text-to-Speech.

Developed as **Task 1 – Language Translation Tool** as part of the CodeAlpha Internship Program.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Supported Languages](#-supported-languages)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Installation and Setup](#-installation-and-setup)
- [Running the Application](#-running-the-application)
- [API Information](#-api-information)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [Acknowledgement](#-acknowledgement)

---

## 📖 About the Project

The Language Translation Tool is a web-based application designed to make communication across different languages easier.

Users can enter text, choose the original language and the desired target language, and receive translated text through an external translation API.

The application uses **Flask as the backend framework** to process translation requests and communicate with the MyMemory Translation API. The frontend is developed using HTML, CSS, and JavaScript to provide a clean and responsive user experience.

In addition to basic translation, the application includes Copy Text and Text-to-Speech functionality, making it more convenient and interactive.

The main focus of this project is to demonstrate the practical integration of frontend technologies, Python backend development, and an external API.

---

## 🎯 Project Objectives

- Develop a functional language translation web application.
- Provide an easy interface for entering and translating text.
- Allow users to select source and target languages.
- Integrate a real translation API for processing requests.
- Display translated results clearly.
- Implement additional usability features such as Copy Text and Text-to-Speech.
- Understand how frontend and backend technologies communicate.
- Practice API integration and error handling using Python Flask.

---

## ✨ Features

### 1. 🌍 Multiple Language Translation
- Translate text between multiple supported languages.
- Select source and target languages through dropdown menus.
- Get translated results using the MyMemory Translation API.

### 2. ✍️ Text Input
- Simple and spacious text input area.
- Enter the text that needs translation.
- Character counter to track the input length.

### 3. 🔄 Swap Languages
- Quickly switch the source and target languages.
- Convenient when translating in the opposite direction.

### 4. 📋 Copy Translated Text
- Copy the translated result with a single click.
- Uses the browser Clipboard API.
- Makes it easy to reuse translated content.

### 5. 🔊 Text-to-Speech
- Listen to the translated text directly in the browser.
- Uses the built-in Web Speech API.
- Supports language-specific speech settings when suitable browser voices are available.

### 6. ⏹ Stop Speech
- Stop the currently playing speech whenever required.

### 7. 🧹 Clear Text
- Clear the input and translated output.
- Reset the text area for a new translation.

### 8. ⚠️ Error Handling
- Displays a message when the input is empty.
- Handles translation API errors.
- Provides feedback when the translation service is unavailable.
- Handles connection timeouts.

### 9. 📱 Responsive Design
- Clean and modern user interface.
- Works across desktop, tablet, and mobile screen sizes.
- Simple navigation and easy-to-use controls.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Web application framework |
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend interactions |
| MyMemory API | Text translation |
| Requests | Sending HTTP requests to the translation API |
| Web Speech API | Text-to-Speech functionality |
| Clipboard API | Copying translated text |

---

## 🌐 Supported Languages

The application provides language selection options including:

- English
- Hindi
- French
- Spanish
- German
- Italian
- Japanese
- Chinese
- Arabic
- Bengali
- Tamil
- Telugu
- Marathi
- Portuguese
- Russian

*Translation availability and quality depend on the external API.*

---

## 📂 Project Structure

The project is organized into separate folders for backend logic, frontend templates, and static resources.

```text
task-1/
│
├── app.py                  # Flask backend
│
├── requirements.txt        # Python dependencies
│
├── README.md               # Project documentation
│
├── templates/
│   └── index.html          # Main application interface
│
└── static/
    ├── style.css           # Application styling
    │
    └── script.js           # Frontend functionality
```

### File Description

- **app.py:** Handles application routing, receives translation requests, communicates with the MyMemory API, and returns translated results.
- **requirements.txt:** Contains the Python packages required to run the application.
- **index.html:** Defines the main user interface, including language selectors, input fields, and translation output.
- **style.css:** Controls the layout, colors, typography, and responsive design.
- **script.js:** Handles translation requests, language swapping, copying text, clearing fields, and Text-to-Speech functionality.
- **README.md:** Provides project information, installation instructions, and usage documentation.

---

## ⚙️ How It Works

The application follows a simple frontend-backend-API communication process.

**Step 1 – User Input**

The user enters the text they want to translate.

**Step 2 – Language Selection**

The user selects the source language and target language.

**Step 3 – Frontend Request**

JavaScript sends the entered text and selected language codes to the Flask backend using the Fetch API.

**Step 4 – Backend Processing**

Flask receives the request, validates the input, and prepares the translation API request.

**Step 5 – API Integration**

The backend sends an HTTP GET request to the MyMemory Translation API with the text and language pair.

**Step 6 – Translation Response**

The API processes the request and returns the translated text in JSON format.

**Step 7 – Display Result**

Flask sends the translated result back to the frontend, where JavaScript displays it in the output section.

**Step 8 – Additional Actions**

Users can copy the translated text, listen to it, stop speech playback, or clear the text fields.

---

## 🚀 Getting Started

Follow these instructions to download and run the project on your local machine.

### Prerequisites

Make sure you have installed:

- Python 3.9 or above
- Git
- Visual Studio Code (recommended)
- A modern web browser
- An active internet connection

### 1. Clone the Repository

Open your terminal or VS Code terminal and execute:

```bash
git clone https://github.com/saptarsijana8/CodeAlpha_Artifical-Intelligent_Projects.git
```

### 2. Navigate to the Project Folder

```bash
cd CodeAlpha_Artifical-Intelligent_Projects/task-1
```

### 3. Create a Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate the environment.

**For Windows:**

```bash
venv\Scripts\activate
```

**For macOS/Linux:**

```bash
source venv/bin/activate
```

### 4. Install Dependencies

Install all required Python packages:

```bash
pip install -r requirements.txt
```

### 5. Run the Application

Start the Flask development server:

```bash
python app.py
```

### 6. Open in Browser

Once the server starts successfully, open:

```text
http://127.0.0.1:5000
```

The Language Translation Tool is now ready to use!

---

## 🔌 API Information

This project uses the **MyMemory Translation API** to translate text between different languages.

**API Provider:** MyMemory

**API Documentation:** https://mymemory.translated.net/doc/spec.php

**API Endpoint:**

```text
https://api.mymemory.translated.net/get
```

### Parameters Used

| Parameter | Description |
|---|---|
| q | Text that needs to be translated |
| langpair | Source and target language codes |

### Example

```text
q=Hello World
langpair=en|hi
```

The API returns a JSON response containing the translated text, which is extracted by the Flask backend and displayed on the webpage.

**Note:** The MyMemory API has usage limits and requires an internet connection. Translation results depend on the availability and quality of the external service.

---

## 🔮 Future Improvements

Some features that can be considered for future versions include:

- Automatic source language detection.
- Translation history.
- Support for additional languages.
- Download translated text as a file.
- Voice input using speech recognition.
- Improved text-to-speech voice selection.
- Dark mode.
- Improved translation error handling and API alternatives.

---

## 👨‍💻 Author

**Saptarsi Jana**

- GitHub: [@saptarsijana8](https://github.com/saptarsijana8)
- Repository: [CodeAlpha Artificial Intelligence Projects](https://github.com/saptarsijana8/CodeAlpha_Artifical-Intelligent_Projects)

---

## 🙏 Acknowledgement

I would like to express my gratitude to **CodeAlpha** for providing the opportunity to work on practical development tasks and improve my technical skills.

This project helped me gain hands-on experience with Python Flask, frontend development, API integration, JavaScript, and building responsive web applications.

---

<p align="center">
  <b>🌐 Language Translation Tool</b>
  <br>
  Breaking Language Barriers, One Translation at a Time.
  <br><br>
  ⭐ If you find this project useful, consider giving the repository a star!
</p>