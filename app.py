from flask import Flask, render_template, request, send_file
import pdfkit
from io import BytesIO

app = Flask(__name__)

# Down wkhtmltopdf, set path in Environment Variable
#Set wkhtmltopdf configuration
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
        
       


        
           

        #This controls Education
        educations = []
        education_count = len([key for key in request.form.keys() if key.startswith('education_')])
        
        for i in range(1, education_count + 1):
            education = request.form[f'education_{i}']
            edu_location = request.form[f'edu_location_{i}']
            edu_study = request.form[f'edu_study_{i}']
            edu_degree = request.form[f'edu_degree_{i}']
            edu_duration = request.form[f'edu_duration_{i}']
            edu_cgpa = request.form[f'edu_cgpa_{i}']

            educations.append({'title': education, 'location': edu_location, 'study': edu_study, 'degree': edu_degree, 'duration': edu_duration, 'cgpa': edu_cgpa})

        #This controls Experience
        experiences = []
        experience_count = len([key for key in request.form.keys() if key.startswith('experience_')])
        
        for i in range(1, experience_count + 1):
            experience = request.form[f'experience_{i}']
            exp_position = request.form[f'exp_position_{i}']
            exp_location = request.form[f'exp_location_{i}']
            exp_duration = request.form[f'exp_duration_{i}']
            exp_details = request.form.get(f'exp_details_{i}').split('.')

            experiences.append({'title': experience, 'details': exp_details, 'position': exp_position, 'location': exp_location, 'duration': exp_duration})

        #This controls Certifications
        certifications = []
        certification_count = len([key for key in request.form.keys() if key.startswith('certification_')])
        
        for i in range(1, certification_count + 1):
            certification = request.form[f'certification_{i}']
            cert_details = request.form[f'cert_details_{i}']
            issuer_details = request.form[f'issuer_details_{i}']

            certifications.append({'title': certification, 'details': cert_details, 'issuer': issuer_details})

        #This controls Profile links
        profiles = []
        profile_count = len([key for key in request.form.keys() if key.startswith('profile_') and not key.startswith('profile_address_')])
        
        for i in range(1, profile_count + 1):
            profile_name_key = f'profile_{i}'
            profile_address_key = f'profile_address_{i}'

            if profile_name_key in request.form and profile_address_key in request.form:
                profile_name = request.form[profile_name_key]
                profile_address = request.form[profile_address_key]

                profiles.append({'title': profile_name, 'details': profile_address})
            
         # Collect skills
        skills = []
        skill_count = len([key for key in request.form.keys() if key.startswith('skill_')])

        for i in range(1, skill_count + 1):
            skill_name_key = f'skill_{i}'  # This captures the skill category
            skill_select_key = f'skill_select_{i}'  # This captures the list of skills

            if skill_name_key in request.form and skill_select_key in request.form:
                skill_name = request.form[skill_name_key]
                skill_select = request.form[skill_select_key]

                skills.append({'title': skill_name, 'lang': skill_select.split(',')})  # Split skills by comma

        #This controls Education
        projects = []
        project_count = len([key for key in request.form.keys() if key.startswith('project_')])
        
        for i in range(1, project_count + 1):
            project_key = f'project_{i}'
            project_link_key = f'project_link_{i}'
            project_skillsKey = f'project_skills_{i}'
            project_details_key = f'project_details_{i}'

            if project_key in request.form and project_link_key in request.form and project_skillsKey in request.form and project_details_key in request.form:
                project = request.form[project_key]
                project_link = request.form[project_link_key]
                project_skills = request.form[project_skillsKey]
                project_details = request.form[project_details_key]            

                projects.append({'title': project, 'link': project_link, 'skills': project_skills, 'details': project_details})

            

          

        # Render the resume HTML
        rendered = render_template('resume.html', name=name, email=email, phone=phone, location=location, profiles=profiles, educations=educations, experiences=experiences, skills=skills, projects=projects, certifications=certifications)

        # Generate PDF from the rendered HTML
        pdf = pdfkit.from_string(rendered, False, configuration=config)

        # Return PDF file
        return send_file(BytesIO(pdf), as_attachment=True, download_name=f'{name}_resume.pdf', mimetype='application/pdf')

    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
