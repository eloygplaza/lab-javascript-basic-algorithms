console.log("Eloy, are your ready for this challenge?");

// Iteration 1: Names and Input
const hacker1 = "Eloy Garcia Plaza";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Juan Sebastian Elcano";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`);
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
console.log("Nombre del conductor: (con espacios en cada caracter)");
console.log(hacker1.toUpperCase().split("").join(" "));

console.log("El nombre de navigator: (imprimir al reves)");
console.log(hacker2.split("").reverse().join(""));

console.log("Lexicographic order:");
hacker1.split("").sort() > hacker2.split("").sort()
  ? console.log(hacker1)
  : console.log(hacker2);

// Bonus 1
const latinText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut pulvinar ex. Nam a mauris tincidunt, varius libero vitae, finibus tortor. Suspendisse aliquam aliquet metus, at malesuada tortor cursus in. Cras id mattis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu iaculis elit, ut aliquam tellus. Fusce vitae lobortis justo. Nulla a mauris eget enim mattis finibus. Phasellus rutrum eu libero ac ultricies. Integer ultricies a sapien sed fringilla. Nulla ullamcorper, eros at porttitor cursus, orci enim euismod magna, eu ullamcorper mi nibh non ipsum. Fusce vel nibh id magna elementum hendrerit. Vestibulum id dolor a arcu aliquet vulputate. Nam faucibus rutrum mauris elementum consequat. Ut a urna viverra, egestas neque eu, pulvinar sapien. Integer ut nulla ac erat varius lacinia. Aliquam maximus ornare lorem, at ullamcorper tortor maximus eu. Pellentesque a imperdiet massa, vitae aliquet sapien. Vivamus a sagittis enim, non pellentesque magna. Cras pellentesque mauris odio, ac imperdiet sem aliquam vel. Donec lorem sem, ornare at fermentum nec, eleifend id lorem. Sed venenatis dui turpis, sed varius nisi blandit sed. Proin dapibus urna ex, ac scelerisque ligula sagittis non. Aenean faucibus, enim eget volutpat vulputate, enim nulla auctor ex, id elementum leo arcu et eros. Integer in ultrices elit, consectetur sodales orci. Vivamus sodales, massa sit amet hendrerit aliquam, enim nibh sagittis dui, in gravida ligula sapien eu libero. Integer dignissim elementum ligula et pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel dapibus arcu. Sed commodo eleifend mi pharetra commodo. Duis tincidunt velit eu urna blandit, euismod facilisis nibh sodales. Mauris enim quam, blandit sit amet interdum ut, efficitur ut libero. Etiam pellentesque vulputate placerat. Aenean non nibh a velit bibendum ullamcorper id eget ex. Curabitur eget cursus ante, ac blandit risus. Vestibulum mauris nisi, malesuada at pellentesque sed, interdum sit amet odio. Etiam ac pharetra felis. Maecenas lacus dolor, dapibus a mattis at, aliquam maximus velit. Cras sollicitudin velit in lacus consectetur, vitae suscipit eros porta. Nullam maximus luctus metus a sollicitudin. Proin at posuere ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.";
const numWords = latinText.split(" ").length;
console.log(`Los tres parafos tienen en total ${numWords} palabras`);

// Bonus 2
const palindromo = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];

palindromo.forEach((e) => {
  e
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll("'", "") ==
  e
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll("!", "")
    .replaceAll("?", "")
    .replaceAll("'", "")
    .split("")
    .reverse()
    .join("")
    ? console.log(`Si, -${e}- es palindromo`)
    : console.log(`No, -${e}- no es palindromo`);
});
