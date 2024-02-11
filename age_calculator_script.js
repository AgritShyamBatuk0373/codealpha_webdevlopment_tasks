let disBlock = document.getElementById('disBlock');
let age = document.getElementById('age');
let calculatebtn = document.getElementById('calculatebtn');
let resetbtn = document.getElementById('resetbtn');
let dobInput = document.getElementById('dob');

disBlock.style.display = 'none';
let today = new Date();
alert();
function calculateAge() {
    disBlock.style.display = 'block';
    let dobVal = dobInput.value;

    let dob1 = new Date(dobVal);
    let year, month, day;

    day = (function() {
        if (today.getDate() > dob1.getDate()) {
            return today.getDate() - dob1.getDate() - 1;
        } else if (today.getDate() == dob1.getDate()) {
            return today.getDate() - dob1.getDate();
        } else {
            let calDate = new Date(dob1.getFullYear(), dob1.getMonth() + 1, 0);
            return (today.getDate() + calDate.getDate()) - dob1.getDate() - 1;
        }
    }());
    
    month = (function() {
        if (today.getDate() > dob1.getDate()) {
            if (today.getDate() >= dob1.getMonth()) {
                return today.getMonth() - dob1.getMonth();
            } else {
                if ((today.getDate() - 1) >= dob1.getMonth()) {
                    return (today.getDate() - 1) - dob1.getMonth();
                } else {
                    return (today.getDate() - 1) + 12 - dob1.getMonth();
                }
            }
        } else {
            if (today.getDate() >= dob1.getDate()) {
                return (today.getMonth() + 12) - dob1.getMonth();
            } else {
                return (today.getMonth() - 1) + 12 - dob1.getMonth();
            }
        }
    }());
    
    year = (function() {
        if (dob1.getMonth() == today.getMonth()) {
            if (dob1.getDate() > today.getDate()) {
                return (today.getFullYear() - 1) - dob1.getFullYear();
            } else {
                return today.getFullYear() - dob1.getFullYear();
            }
        } else {
            if (dob1.getMonth() > today.getMonth()) {
                return (today.getFullYear() - 1) - dob1.getFullYear();
            } else {
                return today.getFullYear() - dob1.getFullYear();
            }
        }
    }());
    
    age.innerHTML = "You are <br>" + year + " years, " + month + " months, " + day + " days.";
}

function resetForm() {
    disBlock.style.display = 'none';
    dobInput.value = '';
    age.innerHTML = '';
}

calculatebtn.onclick = calculateAge;
resetbtn.onclick = resetForm;
