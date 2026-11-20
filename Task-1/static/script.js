const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const source = document.getElementById("source");
const target = document.getElementById("target");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const status = document.getElementById("status");
const charCount = document.getElementById("charCount");


// Update character count
inputText.addEventListener("input", function () {
    charCount.textContent = `${inputText.value.length} / 5000`;
});


// Translate text
translateBtn.addEventListener("click", async function () {

    const text = inputText.value.trim();

    if (!text) {
        status.textContent = "Please enter some text.";
        return;
    }

    if (source.value === target.value) {
        status.textContent = "Please select different languages.";
        return;
    }

    translateBtn.disabled = true;
    translateBtn.textContent = "Translating...";
    status.textContent = "Please wait...";

    outputText.textContent = "";

    try {

        const response = await fetch("/translate", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                source: source.value,
                target: target.value
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Translation failed.");
        }

        outputText.textContent = data.translated_text;
        status.textContent = "Translation completed successfully!";

    } catch (error) {

        outputText.textContent = "Translation unavailable.";
        status.textContent = error.message;

    } finally {

        translateBtn.disabled = false;
        translateBtn.textContent = "Translate Text →";

    }

});


// Swap languages
swapBtn.addEventListener("click", function () {

    const temp = source.value;

    source.value = target.value;
    target.value = temp;

    const translated = outputText.textContent;

    if (translated !== "Your translation will appear here..." &&
        translated !== "Translation unavailable.") {

        inputText.value = translated;
        outputText.textContent = "Your translation will appear here...";
        charCount.textContent = `${inputText.value.length} / 5000`;
    }

    status.textContent = "";

});


// Clear input and output
clearBtn.addEventListener("click", function () {

    inputText.value = "";
    outputText.textContent = "Your translation will appear here...";

    charCount.textContent = "0 / 5000";
    status.textContent = "";

});


// Copy translated text
copyBtn.addEventListener("click", async function () {

    const text = outputText.textContent;

    if (!text || text === "Your translation will appear here..." ||
        text === "Translation unavailable.") {

        status.textContent = "Nothing to copy.";
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        status.textContent = "Translation copied!";
    } catch (error) {
        status.textContent = "Unable to copy text.";
    }

});


// Text-to-Speech functionality

const speakBtn = document.getElementById("speakBtn");
const stopBtn = document.getElementById("stopBtn");

speakBtn.addEventListener("click", function () {

    const text = outputText.textContent;

    if (!text ||
        text === "Your translation will appear here..." ||
        text === "Translation unavailable.") {

        status.textContent = "Please translate some text first.";
        return;
    }

    // Stop previous speech
    window.speechSynthesis.cancel();

    // Create speech
    const speech = new SpeechSynthesisUtterance(text);

    // Set language according to target language
    speech.lang = target.value;

    speech.rate = 1;
    speech.pitch = 1;

    // Speak translated text
    window.speechSynthesis.speak(speech);

    status.textContent = "Playing translated speech...";
});


// Stop speaking
stopBtn.addEventListener("click", function () {

    window.speechSynthesis.cancel();

    status.textContent = "Speech stopped.";

});
