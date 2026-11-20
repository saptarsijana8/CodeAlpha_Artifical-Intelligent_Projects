from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_URL = "https://api.mymemory.translated.net/get"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():
    try:
        data = request.get_json() or {}
        text = data.get("text", "").strip()
        source = data.get("source", "")
        target = data.get("target", "")

        # Check empty input
        if not text:
            return jsonify({"error": "Please enter some text."}), 400

        # Check language selection
        if not source or not target:
            return jsonify({"error": "Please select both languages."}), 400

        if source == target:
            return jsonify({"error": "Please select different languages."}), 400

        # Send request to MyMemory API
        params = {
            "q": text,
            "langpair": f"{source}|{target}"
        }

        response = requests.get(API_URL, params=params, timeout=10)
        res_data = response.json()

        response_data = res_data.get("responseData", {})
        translated_text = response_data.get("translatedText")

        if not translated_text:
            error_message = res_data.get("responseDetails", "Translation failed.")
            return jsonify({"error": error_message}), 400

        return jsonify({"translated_text": translated_text})

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Network error: {str(e)}"}), 502
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
