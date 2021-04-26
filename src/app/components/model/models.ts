export interface Data {
    data: any
}

export interface Champion {
    id: string
    name: string,
    title: string,
    blurb: string
    image: {
        full: string
    }
    stats: {
        hp: number,
        hpperlevel: number,
        mp: number,
        mpperlevel: number,
        movespeed: number,
        armor: number,
        armorperlevel: number
        attackdamage: number,
        attackdamageperlevel: number,
        crit: number,
        critperlevel: number,
        spellblock: number,
        spellblockperlevel: number,
        attackspeed: number,
        attackspeedperlevel: number
    }
    passive: {
        name: string,
        description: string,
        image: {
            full: string
        }
    }
    spells: Spell[]
}

interface Spell {
    name: string,
    description: string,
    image: {
        full: string
    }
    cooldown:number[]
}