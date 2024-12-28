var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Profile Picture detailed
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Creation of Resume Output
        var resumeOutput = "\n            <h2>Resume</h2><br/><br/>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n            <p><strong>Name:</strong> <span id=\"editname\" class=\"\"editable\"> ").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"editemail\" class=\"\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"editphone\" class=\"\"editable\">").concat(phone, "</span></p>            \n            <h3>Education</h3>\n            <p><span id=\"editeducation\" class=\"\"editable\">").concat(education, "</span></p>\n            <h3>Experience</h3>\n            <p><span id=\"editexperience\" class=\"\"editable\">").concat(experience, "</span></p>\n            <h3>Skill</h3>\n            <p><span id=\"editnameskill\" class=\"\"editable\">").concat(skill, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "Span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
