class Hero { //clasa Parinte
    constructor(name, hp){  // hp =healthypoint
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false; //eroul va avea 3 copii si acestia vor avea proprietati
    }

    attacked(damage) {
        if (this.canFly) { // daca exista proprietatea canFly =>this.canFly = true;
            let chance = Math.random(); // chance reprez. o variabila pt. a adauga dinamicitate jocului, poate sa aiba valori intre 0 si 1
            if (chance > 0.5) { // sanse foarte mari
                console.log(this.name + " flew away."); // eroul zboara si evita damage-ul (damage = 0)
                damage = 0;
            }
        }

        if (this.shield) {
            damage *= 0.8;// damage-ul scade cu 0.2 
            console.log(this.name + " defends with a shield.");
        }

        this.hp -= damage; //this.hp = this.hp - damage;
        console.log(this.name + " has been attacked. Hp reduced by " + damage + " Hp remening: " + this.hp + ".");            
        }
    }

    class Dwarf extends Hero {
        constructor(name, hp){
            super(name, hp);
            this.shield = true;
        }

        attack(otherHero){
            let damage = 10;
            console.log(this.name + " attacked with damage " + damage + ".");
            otherHero.attacked(damage);

        }
    }

    class Sprite extends Hero {
        constructor(name, hp){
            super(name, hp);
            this.canFly = true;
        }

        attack(otherHero) {
            let damage = 15;
            console.log(this.name + " attacked with damage " + damage + ".");
            otherHero.attacked(damage);
        }
    }

    class Dragon extends Hero {
        constructor(name, hp) {
            super(name, hp);
            this.canFly = true;
            this.shield = true;
        }

        attack(otherHero) {
            let damage = 5;
            console.log(this.name + " attacked with damage " + damage + ".");
            otherHero.attacked(damage);
        }
    }

    class Fight {
        constructor(hero1, hero2) {
            this.hero1 = hero1;
            this.hero2 = hero2;
            this.turn = 0;
        }

        performAttack() {
            if(this.turn === 0) {
                this.hero1.attack(this.hero2);
            } else{
                this.hero2.attack(this.hero1);
            }
        }

        changeTurn() {
            this.turn = 1 - this.turn; 
        }

        findWinner(){
            let winner = ' ';
            if(this.hero1.hp > 0) {
                winner = this.hero1.name + " won with " + this.hero1.hp + " hp left."
                console.log(winner);
                return winner;
            } else if (this.hero2.hp > 0) {
                winner = this.hero2.name + " won with " + this.hero2.hp + " hp left."
                console.log(winner);
                return winner;
            } else {
                winner = "No heroes left alive!"
                console.log(winner);
                return winner;
            }
        }

        go() {
            do {
                this.performAttack();
                this.changeTurn();
            } while(this.hero1.hp > 0 && this.hero2.hp > 0);
            
            this.findWinner();
        }
    }

    let dwarf = new Dwarf("Marcel", 50);
    let sprite = new Sprite('Gigel', 40);
    let dragon = new Dragon('Vasile', 60);

    let epicFight = new Fight(dwarf, dragon);
    epicFight.go();
