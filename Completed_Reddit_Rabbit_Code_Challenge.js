
/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/**
Rabbits are known for their fast breeding, but how soon will they dominate the earth?

Starting with a small population of male and female rabbits we have to figure out how long it will take for them to outnumber humans 2:1.

Every month a fertile female will have 14 offspring (5 males and 9 females).

A female rabbit is fertile when it has reached the age of 4 months, they never stop being fertile.

Rabbits die at the age of 8 years (96 months).

Input Description:
You will be given a list of numbers as following:

Male_rabbits Female_rabbits Rabbits_needed_alive

The initial rabbits will always be 2 months old
Fertile females will always produce 14 offspring (5 male, 9 female)

Every month that passes things should be done in this order:

    Fertile female reproduce (so 7 year & 11 months old will reproduce)
    Rabbits age (except newborn) (and rabbits reaching 8 years will die, the 7 year & 11 months old will die)

**/
/**
NOTES:
-Create 2 Arrays of 96 months for the age of the rabbit genders (0-95)
-Month 0 is dependent on initial rabbit counts starting out
-Each consecutive month input is dependent on previous month
-Can be populated by iterating through previous month array looking at female numbers
-Male count could be found just using the number of females that gave birth the previous month
-Manipulate Array using .unshift() to add an element to the beginning of the array
-Functions .map() and .reduce() can be useful in iterating through array contents
-Use .pop() to remove and store an element off the end of an array
**/
function findMonth(maleRabbits,femaleRabbits,dominationPopulation)
{
//Note that arguments passed from 'prompt' are sent as strings
//and so must be converted if necessary
var maleCount = Number(maleRabbits);
var femaleCount = Number(femaleRabbits);
var popToReach = Number(dominationPopulation);
var rabbitLifeMonths = 96;
var malePop = 0;
var femalePop = 0;
var totalPop = 0;
var currentMonth = 0;
var totalDeadMales = 0;
var totalDeadFemales = 0;
var totalDead = 0;
var result;

//Create an Month Array that holds a number of values equal to the lifespan of the rabbit in months
function monthArray(array){
  var ageMonth = array;
  for (var i=0; i<rabbitLifeMonths; i+= 1)
    {
      ageMonth.push(0);
    }
  return ageMonth;
}

 //Initialize a Lifespan Array with the initial population of male rabbits
var maleArray =[];
maleArray = monthArray(maleArray);
maleArray[2] = maleCount;

 //Initialize a Lifespan Array with the initial population of female rabbits
var femaleArray =[];
femaleArray = monthArray(femaleArray);
femaleArray[2] = femaleCount;



//Each female that gives birth will populate male and female arrays with new values
//Reduce total Fertile Females to one value then find new male and female births
//Add new births to male and female arrays
//Remove any dead rabbits and store them in the respective dead counters (totalDeadGender)
function fertileFemales(){
  var fertileArray = [];
  for (var i=4; i<femaleArray.length; i+= 1)
    {
      fertileArray.push(femaleArray[i]);
    }
  var totalFertile  = fertileArray.reduce(function(previousVal,currentVal)
                         {return previousVal+currentVal;});
  var newMales = totalFertile * 5;
  var newFemales = totalFertile * 9;

  maleArray.unshift(newMales);
  var deadMales = maleArray.pop();
  totalDeadMales = totalDeadMales + deadMales;

  femaleArray.unshift(newFemales);
  var deadFemales = femaleArray.pop();
  totalDeadFemales = totalDeadFemales + deadFemales;

  totalDead = totalDeadMales + totalDeadFemales;

}

//A loop to execute the birthing function then add up the new population and increment the month counter
while (totalPop <= popToReach)
{
  fertileFemales();

malePop = maleArray.reduce(function(previousVal,currentVal)
                         {return previousVal+currentVal;});

femalePop = femaleArray.reduce(function(previousVal,currentVal)
                         {return previousVal+currentVal;});

totalPop = malePop + femalePop;
currentMonth = currentMonth + 1;
console.log(`Total population of ${totalPop} at ${currentMonth} months`);
}


  var output = "Domination population reached within " + currentMonth + " months with " + totalDead + " dead rabbits";
  console.log(output);

}

module.exports = findMonth;
