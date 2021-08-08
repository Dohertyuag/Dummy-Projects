var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i = 0; i <= names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();   //Taking the i^th name, lower-casing it's
                                                        //first letter and asigning it to firstLetter
  if (firstLetter == 'j') {                             // or if (firstLetter === j)
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}
