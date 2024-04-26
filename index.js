class Character {
    static MAX_HEALTH() {
        return 100;
    }
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name) {
        this.name = name;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["hat", "sunglasses"],
//         },
//     },
// };

class Adventurer extends Character {
    static MAX_HEALTH() {
        super.MAX_HEALTH();
    }
    constructor(name, role) {
        super(name);

        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, inventory, type) {
        super(name, inventory);
        this.type = type;
    }
}
// Adventurers
const robin = new Adventurer("Robin");
const leo = new Companion("Leo");
const frank = new Companion("Frank");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = leo;
leo.companion = frank;
leo.type = "Cat";
frank.type = "Flea";
frank.inventory = ["small hat", "sunglasses"];

console.log(robin);

for (a in robin.inventory) {
    console.log(
        `${robin.name}'s inventory item ${parseInt(a) + 1}: ${
            robin.inventory[a]
        }`
    );
}
