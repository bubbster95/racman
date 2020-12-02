service = () => {
    let filter = document.querySelector('.service-filter');
    let keys = Object.keys(serviceObj);
    let checkKeys = Object.keys(makesObj.makes)

    let buttons = document.createElement('DIV');
    buttons.className = 'type-buttons'
    filter.appendChild(buttons);

    let checkBoxes = document.createElement('DIV');
    checkBoxes.className = 'check-boxes';
    filter.appendChild(checkBoxes)

    keys.map(key => {
        let button = document.createElement('BUTTON');
        button.className = 'machine-type';
        button.innerHTML = key;
        button.id = key;
        button.addEventListener('click', (e)=>{toggleMake(e, key, checkKeys)});
        buttons.appendChild(button)
    })

    checkKeys.map(key => {
        let checkBox = document.createElement('DIV');
        checkBox.className = 'check-box';
        checkBox.innerHTML = makesObj.makes[key];
        checkBox.id = makesObj.makes[key];
        checkBoxes.appendChild(checkBox)
    })
}

toggleMake = (e, key, keys) => {
    let toggleOn = 'machine-type toggled';
    let toggleOff = 'machine-type';
    let check = 'check-box checked';
    let unCheck = 'check-box';

    let list = serviceObj[key]
    let fullList = makesObj.makes
    let buttons = document.getElementsByClassName('type-buttons')[0].children
    let buttonKeys = Object.keys(buttons)

    fullList.map(item => {
        let makes = document.getElementById(item);
        makes.className = unCheck;
    })

    buttonKeys.map(button => {
        buttons[button].className = toggleOff;
    })

    list.map(item => {
        let makes = document.getElementById(item);
        makes.className = check;
        e.target.className = toggleOn;
    })
}