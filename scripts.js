let status = "AM";

// convert hours to proper format
const convertHours = (num) => {
    if(num > 12) {
        num = num % 12;
        status = "PM";
    } else {
        status = "AM";
    }
    return num;
}

// convert minutes to proper format
const convertMinutes = (num) => {
    if(num < 10) {
        num = 0 + num.toString();
    } else {
        num = num;
    }
    return num;
}

// convert seconds to proper format
const convertSeconds = (num) => {
    if(num < 10) {
        num = 0 + num.toString();
    } else {
        num = num;
    }
    return num;
}

// get the time
const getTime = ()=> {
    const date = new Date();
    const hours = convertHours(date.getHours());
    const minutes = convertMinutes(date.getMinutes());
    const seconds = convertSeconds(date.getSeconds());

    return `${hours}:${minutes}:${seconds} ${status}`;
}

const appendTime = () => {
    const clock = document.querySelector('.clock');
    const currentTime = getTime();

    clock.textContent = currentTime;
}



setInterval(()=>{
    appendTime();
},1000);

