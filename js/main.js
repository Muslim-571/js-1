let elForm = document.querySelector('.hero__form'),
    elInput = document.querySelector('.hero__input'),
    elFooot = document.querySelector('.hero__text-foot'),
    elBike = document.querySelector('.hero__text-bike'),
    elCar = document.querySelector('.hero__text-car'),
    elPlane = document.querySelector('.hero__text-plane'),
    ON_FOOT = 3.6,
    BY_BIKE = 20.1,
    BY_CAR = 70,
    BY_PLANE = 800;
elForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let mainInput = elInput.value.trim();

    function caculateDistance(speed, distance) {
        let hours = Math.floor(speed / distance);
        let minutes = Math.floor(((speed / distance) - hours) * 60);
        let seconds = Math.floor(((((speed / distance) - hours) * 60) - minutes) * 60);
        return `${hours}hours ${minutes}minutes ${seconds}seconds`
    }
    console.log(caculateDistance(mainInput, ON_FOOT));
    console.log(caculateDistance(mainInput, BY_BIKE));
    console.log(caculateDistance(mainInput, BY_CAR));
    console.log(caculateDistance(mainInput, BY_PLANE));
    elFooot.textContent = (caculateDistance(mainInput, ON_FOOT))
    elBike.textContent = (caculateDistance(mainInput, BY_BIKE))
    elCar.textContent = (caculateDistance(mainInput, BY_CAR))
    elPlane.textContent = (caculateDistance(mainInput, BY_PLANE))
})