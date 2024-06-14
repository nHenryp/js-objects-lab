const montage ={
    gameFace: 'j',
    readyForThis: true,
    victorySound: 'cannon',
   
}
console.log(montage.victorySound)








const homeTown ={
    name: 'Narmer',
    population: 4000,
    country: {
        name: 'England',
        population: 200,
    }
}
console.log(homeTown.name, homeTown.population)
console.log(homeTown.country.population)



const characters = [
  {name:'Rick', movie:'Rick & Morty'},
    {name:'mufasa', movie:'The Lion King'},
   {name:'Frodo', movie:'Lords of the rings'}]
    console.log(characters[0].name)
    
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
       const message = 'I am' + character.name + 'from'+ character.movie + '-';
        console.log(message);
     }




    const monkey = {
        name: 'bubbles',
        species: 'Capuchin',
        foodEaten: ['banana', 'berries', 'spiders'],
        
      eatSomething: function(food) {
            this.foodEaten.push(food);

        },
        introduce: function() {
            
            const lastFood = this.foodsEaten[this.foodsEaten.length - 1];
            
            return `Hi! I am ${this.name} the ${this.species}. The last thing I ate was ${lastFood}.`;
        }
    };
        


      
    

      monkey.eatSomething('seeds')
      


    
    console.log(monkey.introduce)
    
  


 const laboratory = {
    monster: {},
       experiment(partName, partValue) {
        this.monster[partName] = partValue;

    }

}

laboratory.experiment('arms', 'eight');


console.log(laboratory.monster);








/*


just trying them out 
const team = {
    player: {},
    startingLine(name, number){
        this.player[name] = number;
    }

}

team.startingLine('saka', 'seven');


console.log(team.player);



const person = {
    personal: {},
    info(name, location){
      this.personal[name] = location;

    }


}
person.info('narmer', 'london');
console.log(person.info);*/