export const defaultChampion = {
    id: "Aatrox",
    name: 'Aatrox',
    title: 'the Destroyer',
    blurb: 'Placeholder',
    image: {
        full:"Aatrox.png"
    },
    stats: {
        hp:580,
        mp:0,
        movespeed:345,
        armor:38,
        attackdamage:60,
        crit:0,
        spellblock:32,
        attackspeed:0.651
    },

    passive: {
        name:"Deathbringer Stance",
        description:"Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health. ",
        image: {
            full:"Aatrox_Passive.png"
        }
    },

    spells:
        [{name:"The Darkin Blade",
        description:"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
        image: {
            full:"AatroxQ.png"
        }},
        {name:"Infernal Chains",
            description:"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
            image: {
                full:"AatroxW.png"
            }},
        {name:"Umbral Dash",
            description:"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
            image: {
                full:"AatroxE.png"
            }},
        {name:"World Ender",
            description:"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.",
            image: {
                full:"AatroxR.png"
            }}]
}

