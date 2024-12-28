document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement; 


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skill') as HTMLTextAreaElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;

// Profile Picture detailed
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



        // Creation of Resume Output
        const resumeOutput = `
            <h2>Resume</h2><br/><br/>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}

            <p><strong>Name:</strong> <span id="editname" class=""editable"> ${name}</span></p>
            <p><strong>Email:</strong> <span id="editemail" class=""editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id="editphone" class=""editable">${phone}</span></p>            
            <h3>Education</h3>
            <p><span id="editeducation" class=""editable">${education}</span></p>
            <h3>Experience</h3>
            <p><span id="editexperience" class=""editable">${experience}</span></p>
            <h3>Skill</h3>
            <p><span id="editnameskill" class=""editable">${skill}</span></p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

function makeEditable (){
    const editableElement = document.querySelectorAll(`.editable`)
    editableElement.forEach(element => {
        element.addEventListener(`click` , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";


            //replace content

            if(currentElement.tagName === "P" || currentElement.tagName === `Span`){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')


           input.addEventListener('blur',function(){
            currentElement.textContent = input.value
            currentElement.style.display = 'inline'
            input.remove()
           })



                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}