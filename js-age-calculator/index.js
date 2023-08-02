const button = document.getElementById('btnCalculate');
const birthDate = document.getElementById('birthDate');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const birthdayValue = birthDate.value;
    if (birthdayValue === "") {
        alert('Please enter a valid birth date');
    } else {
        const age = getAge(birthdayValue);
        result.innerText = "You age is " + age;
    }
});

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || month == 0 && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}