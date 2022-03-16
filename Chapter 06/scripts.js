// !Adding Character Experience
function character() {
    const aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,
        xp: 0,

        // Return the character description
        describe() {
            return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} XP points`;
        },
    };

    // TODO: create the character object here

    // Aurora is harmed by an arrow
    aurora.health -= 20;

    // Aurora equips a strength necklace
    aurora.strength += 10;

    // Aurora learn a new skill
    aurora.xp += 15;

    console.log(aurora.describe());
}

// character();

// !Modeling a dog
function dogObject() {
    // TODO: create the dog object here
    let fang = {
        dName: "Fang",
        dSpecies: "Boarhound",
        dSize: 75,

        describe() {
            return `${this.dName} is a ${this.dSpecies} dog measuring ${this.dSize}`;
        },

        bark(barkAt) {
            return `Look, a ${barkAt}! ${this.dName} barks: ${this.barkSound()}`;
        },

        barkSound() {
            return `Grrr! Grrr!`
        }
    }

    console.log(fang.describe());
    console.log(fang.bark('cat'));
}

// dogObject();

// !Modeling a Circle
function modelCircle() {
    const r = Number(prompt("Enter the circle radius:"));

    // TODO: create the circle object here
    let circle = {
        circumference() {
            return 2 * Math.PI * r;
        },

        area() {
            return Math.PI * (r**2);
        }
    }

    console.log(`Its circumference is ${circle.circumference()}`);
    console.log(`Its area is ${circle.area()}`);
}

// modelCircle();

function bankAccount() {
    let bank = {
        name: 'Alex',
        balance: 0,

        credit(x) {
            return this.balance += x;
        },

        debit(x) {
            return this.balance -= x;
        },

        describe() {
            return `owner: ${this.name}, balance ${this.balance}`;
        }
    }

    console.log(bank.describe());
    bank.credit(250);
    console.log(bank.describe());
    bank.debit(80);
    console.log(bank.describe());
}

// bankAccount();