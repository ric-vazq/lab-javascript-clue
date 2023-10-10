// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Trixie',
        lastName: 'Mattel',
        occupation: 'Make-Up Mogul',
        age: 34,
        description: 'a living Barbie doll',
        image: '', 
        color: 'pink'
    },
    {
        firstName: 'Katya',
        lastName: 'Zamolodchikova',
        occupation: 'Gymnast',
        age: 41,
        description: 'famous Russion hooker',
        image: '',
        color: 'red'
    },
    {
        firstName: 'Violet',
        lastName: 'Chachki',
        occupation: 'Model',
        age: 31,
        description: 'winner of Season 7 and fashion top model',
        image: '',
        color: 'purple'
    },
    {
        firstName: 'Monet',
        lastName: 'XChange',
        occupation: 'TV Hostess',
        age: 33,
        description: 'the girl who gets the dollas',
        image: '',
        color: 'green'
    },
    {
        firstName: 'Alyssa',
        lastName: 'Edwards',
        occupation: 'Dance Coach',
        age: 43,
        description: 'a woman of integrity, grace, and energy',
        image: '',
        color: 'yellow'
    },
    {
        firstName: 'Bianca',
        lastName: 'Del Rio',
        occupation: 'Comedian',
        age: 48,
        description: 'a hateful bitch',
        image: '',
        color: 'blue'
    }
];

// Rooms Array

const roomsArray = [
    {
        name: 'Hall'
    },
    {
        name: 'Lounge'
    },
    {
        name: 'Dining Room'
    },
    {
        name: 'Ballroom'
    },
    {
        name: 'Kitchen'
    },
    {
        name: 'Conservatory'
    },
    {
        name: 'Billiard Room'
    },
    {
        name: 'Library'
    },
    {
        name: 'Study'
    },
    {
        name: 'Guest Bedroom'
    },
    {
        name: 'Master Bedroom'
    },
    {
        name: 'Wintergarden'
    },
    {
        name: 'Servants Quarters'
    },
    {
        name: 'Secret Passage'
    },
    {
        name: 'Music Room'
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Candlestick',
        weight: 300
    },
    {
        name: 'Dagger',
        weight: 450
    },
    {
        name: 'Revolver',
        weight: 250
    },
    {
        name: 'Lead Pipe',
        weight: 2000
    },
    {
        name: 'Wrench',
        weight: 415
    },
    {
        name: 'Rope',
        weight: 300
    },
    {
        name: 'Axe',
        weight: 1500
    },
    {
        name: 'Hairspray',
        weight: 350
    },
    {
        name: 'Nails',
        weight: 100
    }
];


// ITERATION 2
const getRandomInt = max => Math.floor(Math.random()*max);

function selectRandom(array) {
    if (array.length === 0) {
        return undefined;
    }
    else {
        return array[getRandomInt(array.length)];
    }
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
}

console.log(pickMystery());

// ITERATION 3

function revealMystery () {
    let mystery = pickMystery();
    let firstNameCaps = mystery.suspect.firstName.toUpperCase();
    let lastNameCaps = mystery.suspect.lastName.toUpperCase();
    let weaponCaps = mystery.weapon.name.toUpperCase();
    let roomCaps = mystery.room.name.toUpperCase();
    return `<${firstNameCaps}> <${lastNameCaps}> killed Mr. Boddy using the <${weaponCaps}> in the <${roomCaps}>!` 
}

console.log(revealMystery()); //MONET XCHANGE killed Mr. Boddy using the WRENCH in the BALLROOM!

