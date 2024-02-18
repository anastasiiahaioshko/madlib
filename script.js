let questions = 6;
let questionsLeft = ' [' + questions + ' questions left]';

let name = prompt('Please type your first name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let adjective = prompt('Please type an adjective:' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let beverage = prompt('Please type a name of your favorite beverage:' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let planet = prompt('Please type a name of your favorite fast-food place:' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let condiment = prompt('Please type a name of your favorite condiment:' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let food = prompt('Please type a name of your favorite food:' + questionsLeft);

alert('All done. Ready for the message?');

let sentence = "<h2>Once upon a time, in the vast expanse of the cosmos, Captain Jackson embarked on a mission to rescue the galaxy's last remaining space llama,  " + name;
sentence += '. Armed with a trusty ' + adjective;
sentence += ' laser blaster and fueled by ' + beverage; 
sentence+= ', Captain Jackson set course for the mysterious planet  ' + planet; 
sentence+= '. Along the way, he encountered a band of mischievous space pirates led by the notorious Captain Marbel. In a daring space battle, Captain Jackson outsmarted the pirates using his quick wit and a jar of ' + condiment; 
sentence+= '. Finally reaching the planet, he discovered that the space llama was actually a disguise for a group of intergalactic ferrets on a quest for the perfect ' + food; 
sentence+= '. With a hearty laugh, Captain Jackson joined forces with the ferrets and embarked on an unforgettable journey through the stars'+
  '.</h2>';
document.write(sentence);
