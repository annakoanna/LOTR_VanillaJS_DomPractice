console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

    function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')      

	// 1. create a section tag with an id of middle-earth
	    
		let middleEarth = document.createElement("section");
		//newSection.setAttribute("id", "middle-earth");
		middleEarth.id ='middle-earth';

	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++) {
		
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	let newArt = document.createElement("article");

	//   2b. gives each land article an `id` tag of the corresponding land name
    newArt.setAttribute("id", lands[i]);
	//   2c. includes an h1 with the name of the land inside each land article

	let h1 = document.createElement("h1");
	h1.innerText = lands[i];
	//landArticle.innerText(lands[1])
	newArt.appendChild(h1);


	//   2d. appends each land to the middle-earth section
	middleEarth.appendChild(newArt)
	};
	// 3. append the section to the body of the DOM.
	document.body.append(middleEarth);
	
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

    function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const shire = document.getElementById("The-Shire")
    let hobbitList = document.createElement("ul");
     hobbitList.className = "hobbits";
   
//hobbits.setAttribute.class = "hobbit";
	// give each hobbit a class of `hobbit`
	for(let i = 0; i < hobbits.length; i++) {
		let hobbitLi = document.createElement("li")
		hobbitLi.classList.add("hobbit")
		hobbitLi.textContent = hobbits[i];
		console.log(hobbits[i])
		hobbitList.appendChild(hobbitLi)
	}
      
	    //hobbitList.setAttribute.class = "hobbit";
	//console.log(hobbits)
	
	shire.appendChild(hobbitList)
	
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read:  

// ============
// Chapter 3
// ============

    function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
    
    let hobbitList = document.querySelector("ul");
    let frodo = hobbitList.children[0]
	// create a div with an id of `'the-ring'`
    let  ring = document.createElement("div")
    ring.setAttribute = ("id", "the-ring")
	// give the div a class of `'magic-imbued-jewelry'`
	ring.className = "magic-imbued-jewelry"
	//hobbitList[0].appendChild(theRing)
	frodo.appendChild(ring)
	//console.log(hobbitList)
	//console.log(hobbitList.children)


	// add the ring as a child of `Frodo`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById("Mordor")
    let newList = document.createElement("ul");
     //baddiesMo.className = "baddy";
   
	// give each of the baddies a class of "baddy"

	   for(let i = 0; i < baddies.length; i++) {
		let yoy = document.createElement("li")
		//yoy.classList.add("baddy")
		yoy.textContent = baddies[i];
		//console.log(baddies[i])
		newList.appendChild(yoy)
	}
	// remember to append them to Mordor
	  mordor.appendChild(newList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
let riv = document.getElementById("Rivendell")
let asid = document.createElement("aside")
let buddyList = document.createElement("ul")
for(let i = 0; i <buddies.length; i++) {
	let budd = document.createElement("li")
	budd.textContent= buddies[i]
	buddyList.appendChild(budd)
	asid.appendChild(buddyList)
}
	// put an `unordered list` of the `'buddies'` in the aside
riv.appendChild(asid)
	// insert your aside as a child element of `rivendell`
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
let riv = document.getElementById("Rivendell")
let hobbitList = document.querySelector("ul");

riv.appendChild(hobbitList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
let riv = document.getElementById("Rivendell")

	let strider = riv.querySelectorAll("li")[3]
	//const hobbits = shire.querySelector("ul")
	strider.textContent = "Aragon";
	const shire = document.getElementById("The-Shire")
	let hobbitList = shire.querySelector("ul")
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')

	

	const shire = document.getElementById("The-Shire")
	let riv = document.getElementById("Rivendell")

	let theFellowship = document.createElement("div")
	theFellowship.setAttribute("id", "the-fellowship")
	riv.appendChild(theFellowship);
	let hobbitList = document.createElement("ul")
	console.log(hobbitList)
	for (let i = 0; i < hobbits.length; i++) {
		let hobbitLi = document.createElement("li");
		hobbitLi.innerText = hobbits[i];
		hobbitList.appendChild(hobbitLi);
	}
	for (let i = 0; i < buddies.length; i++) {
		let hobbitLi = document.createElement("li");
		hobbitLi.innerText = buddies[i];
		hobbitList.appendChild(hobbitLi);
	}
	alert("hobbits and buddies have joined your party!");
	console.log(theFellowship)
	console.log(hobbitList)
	theFellowship.appendChild(hobbitList);
	console.log(riv)
}
	
	
	//create a new div called `'the-fellowship'` within `rivendell`
	
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
	


// COMMIT YOUR WORK
// The commit message should read: 
// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	
	// apply the following style to the element, make the // background 'white', add a grey border
	let riv = document.getElementById("Rivendell");
   let gandalf = riv.querySelector("aside ul li");


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

   function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	alert("the horn of gondor has been blown");
	let theFellowship = document.getElementById("the-fellowship");
    theFellowship.removeChild(theFellowship.lastChild);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============


function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let theFellowship = document.getElementById("the-fellowship");
	theFellowship.removeChild(theFellowship.firstChild);
	theFellowship.removeChild(theFellowship.firstChild);
	let mordor = document.getElementById("Mordor");
	let mordorList = mordor.querySelector("ul");
	
	let frodo = document.createElement("li")
	frodo.textContent = "Frodo Baggins";
	mordorList.appendChild(frodo);
	
	let sam = document.createElement("li")
	sam.textContent = `Samwise "Sam" Gamgee`;
	mordorList.appendChild(sam);
	// add a div with an id of `'mount-doom'` to `Mordor`
	let mountDoom = document.createElement("div");
	mountDoom.setAttribute("id", "mount-doom");
	mordor.appendChild(mountDoom);
	}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============


function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	let mordor = document.getElementById("Mordor");
	let gollum = document.createElement("div");
	gollum.setAttribute("id", "gollum");
	mordor.appendChild(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	let riv = document.getElementById("Rivendell");
	let frodo = riv.querySelector(".hobbits li");
	let ring = frodo.querySelector("#the-ring");
	frodo.removeChild(ring);
	gollum.appendChild(ring);
	// Move Gollum into Mount Doom
	let mountDoom = document.getElementById("mount-doom");
	mordor.removeChild(gollum);
	mountDoom.appendChild(gollum);
	}
	


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

   function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	let mountDoom = document.getElementById("mount-doom");
	mountDoom.removeChild(mountDoom.firstChild);
	// Move all the `hobbits` back to `the shire`
	let riv = document.getElementById("Rivendell");
	let hobbits = riv.querySelector(".hobbits");
	riv.removeChild(hobbits);
	
	let theShire = document.getElementById("The-Shire");
	theShire.appendChild(hobbits);
	
	}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
