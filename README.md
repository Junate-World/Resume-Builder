# Professional Resume Builder

A Flask-based web application that allows users to dynamically create and generate professional resumes in PDF format.

## Features

- **Dynamic Experience Section**: Users can add or remove multiple job experiences.
- **Responsive Form**: Input fields for personal details, education, experience, skills, projects, and certifications.
- **PDF Generation**: Generates a professional PDF resume using `pdfkit` and `wkhtmltopdf`.

## Technologies Used

- **Flask**: Web framework to create the application.
- **pdfkit**: Python wrapper to generate PDFs.
- **wkhtmltopdf**: Tool to convert HTML to PDF.
- **Jinja2**: Templating engine for rendering HTML.

## Prerequisites

Make sure you have the following installed:

- **Python 3.x**
- **pip** (Python package manager)
- **wkhtmltopdf**:
    - For Windows: Download from [here](https://wkhtmltopdf.org/downloads.html) and add the path to your system environment variables.
    - For macOS: Install using Homebrew:
      ```bash
      brew install wkhtmltopdf
      ```
    - For Linux (Debian/Ubuntu):
      ```bash
      sudo apt-get install wkhtmltopdf
      ```

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/resume-builder.git
    cd resume-builder
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment**:
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

4. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

5. **Run the Flask application**:
    ```bash
    python app.py
    ```

6. **Access the application**:
    Open your browser and navigate to `http://127.0.0.1:5000/`.

## Project Structure

```bash
resume_builder/
│
├── app.py                    # Main Flask application
├── templates/
│   ├── form.html              # HTML form for input
│   ├── resume.html            # HTML template for generating the PDF resume
├── static/                    # Static files (CSS, JS, images)
│   ├── styles.css             # CSS for styling the form and resume
├── requirements.txt           # Python dependencies
├── README.md                  # Project documentation
└── .gitignore                 # Files and directories to ignore in Git
#   R e s u m e - B u i l d e r  
 