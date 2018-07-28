const findMonth = require('./Completed_Reddit_Rabbit_Code_Challenge.js');

const prompt = require('prompt');

console.log(`Rabbits are known for their fast breeding, but how soon will they dominate the earth?

Starting with a small population of male and female rabbits
we have to figure out how long it will take for them to outnumber humans 2:1.

Every month a fertile female will have 14 offspring (5 males and 9 females).

A female rabbit is fertile when it has reached the age of 4 months, they never stop being fertile.

Rabbits die at the age of 8 years (96 months).

Input Description:
This tool will prompt you for 3 values:

-maleRabbits (The initial population of male rabbits)
-femaleRabbits (The initial population of female rabbits)
-dominationPopulation (The target population we are looking to reach)

The initial rabbits will always be 2 months old
Fertile females will always produce 14 offspring (5 male, 9 female)

Every month that passes things should be done in this order:

Fertile females reproduce (so 7 year & 11 months old will reproduce)
Rabbits age (except newborn) (and rabbits reaching 8 years will die, the 7 year & 11 months old will die)

The output will be the time it takes to reach the 'domination' Population

`);

prompt.start();

prompt.get(['maleRabbits','femaleRabbits','dominationPopulation'], function(err,result) {
  debugger;
  if (err){
    console.log(err);
    return;
  }
  console.log('Command line input received.');
  findMonth(result.maleRabbits,result.femaleRabbits,result.dominationPopulation);

  console.log('Thanks for using our tool!');

})