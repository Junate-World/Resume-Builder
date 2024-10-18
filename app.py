from flask import Flask, render_template, request, send_file
import pdfkit
from io import BytesIO

app = Flask(__name__)

# Set wkhtmltopdf configuration
path_to_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
config = pdfkit.configuration(wkhtmltopdf=path_to_wkhtmltopdf)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Collect form data
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        location = request.form['location']
        github = request.form['github']
        linkedin = request.form['linkedin']
        portfolio = request.form['portfolio']
        education = request.form['education']
        edu_details = request.form['edu_details']
        experience = request.form['experience']
        exp_details = request.form['exp_details']
        skills = request.form.getlist('skills')  # Collect multiple skills
        projects = request.form.getlist('projects')  # Collect multiple projects
        certifications = request.form['certifications']
        cert_details = request.form['cert_details']
        cert_issuer = request.form['cert_issuer']

        # Render the resume HTML
        rendered = render_template('resume.html', name=name, email=email, phone=phone, location=location,
                                   github=github, linkedin=linkedin, portfolio=portfolio,
                                   education=education, edu_details=edu_details, experience=experience, exp_details=exp_details,
                                   skills=skills, projects=projects, certifications=certifications, cert_details=cert_details, cert_issuer=cert_issuer)

        # Generate PDF from the rendered HTML
        pdf = pdfkit.from_string(rendered, False, configuration=config)

        # Return PDF file
        return send_file(BytesIO(pdf), as_attachment=True, download_name=f'{name}_resume.pdf', mimetype='application/pdf')

    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
