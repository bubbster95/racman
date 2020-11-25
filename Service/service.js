service = () => {
    let filter = document.querySelector('.service-filter');
    console.log(filter)
    let keys = Object.keys(serviceObj);

    keys.map(key => {
        let button = document.createElement('BUTTON');
        button.className = 'machine-type';
        button.innerHTML = key
        button.id = key;
        button.addEventListener('click', ()=>{toggleMake(filter, key, keys)});
        filter.appendChild(button)
    })
}

toggleMake = (filter, key, keys) => {
    let toggleOn = 'machine-makes toggled';
    let toggleOff = 'machine-makes';

    keys.map(thisKey =>  {
        if (document.getElementById(thisKey + '-makes')) {
            let makes = document.getElementById(thisKey + '-makes');
            makes.className = toggleOff;
    }})

    if (document.getElementById(key + '-makes')) {
        let makes = document.getElementById(key + '-makes');
        makes.className = toggleOn;
    } else {
        let machine = document.getElementById(key);
        let next = machine.nextSibling;
        let textInputs = serviceObj[key].reduce((makes, nextMake) => {
            return makes + ', ' + nextMake;
        })

        let makes = document.createElement('DIV');
        makes.innerHTML = textInputs;
        makes.className = toggleOn;
        makes.id = key + '-makes';
        filter.insertBefore(makes, next)
    }
    let makesHeight = document.getElementById(key + '-makes').offsetTop;
    window.scrollTo(0, makesHeight - (window.innerHeight * .5));
}