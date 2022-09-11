// api variable
const dd_api_classes_url = 'https://www.dnd5eapi.co/api/classes/';

// fetch api
getCard();

async function getCard() {
    try {
        const res = await fetch(dd_api_classes_url);
        const data = await res.json();
        const names = data.results;

        // forEach to print all classes in card element
        names.forEach(name => {
            // images taken from nerdist
            const card = ` 
                <div class="card" style="width: 18rem;">
                    <img src="./images/${name.index}.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${name.name}</h5>
                        <p id=${name.index}-text class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/classes/${name.index}.html" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
            const cardRow = document.getElementById('cardContainer__row');
            const div = document.createElement('div');
            cardRow.appendChild(div);
            div.className = 'col';
            div.innerHTML = card;
        });
        barText();
        bardText();
        cleText();
        druText();
        figText();
        monText();
        palText();
        ranText();
        rogText();
        sorText();
        warText();
        wizText();
    }
    catch (err) {
        console.log(err);
    }
}



// add text to cards
function barText() {
    const barbarian = document.querySelector("#barbarian-text");
    barbarian.innerHTML = 'For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.';
}

function bardText() {
    const bard = document.querySelector("#bard-text");
    bard.innerHTML = 'Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.';
}

function cleText() {
    const cleric = document.querySelector("#cleric-text");
    cleric.innerHTML = 'Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.';
}

function druText() {
    const druid = document.querySelector("#druid-text");
    druid.innerHTML = "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury.They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.";
}

function figText() {
    const fighter = document.querySelector("#fighter-text");
    fighter.innerHTML = "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.";
}

function monText() {
    const monk = document.querySelector("#monk-text");
    monk.innerHTML = "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.";
}

function palText() {
    const paladin = document.querySelector("#paladin-text");
    paladin.innerHTML = "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.";
}

function ranText() {
    const ranger = document.querySelector("#ranger-text");
    ranger.innerHTML = "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.";
}

function rogText() {
    const rogue = document.querySelector("#rogue-text");
    rogue.innerHTML = "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.";
}

function sorText() {
    const sorcerer = document.querySelector("#sorcerer-text");
    sorcerer.innerHTML = "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.";
}

function warText() {
    const warlock = document.querySelector("#warlock-text");
    warlock.innerHTML = "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular";
}

function wizText() {
    const wizard = document.querySelector("#wizard-text");
    wizard.innerHTML = "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.";
}