export interface Data {
    data:any
}

export interface Champion {
    id:string
    name:string,
    title:string,
    blurb:string
    image: {
        full:string
    }
    stats: {
        hp:Number,
        mp:Number,
        movespeed:Number,
        armor:Number,
        attackdamage:Number,
        crit:Number,
        spellblock:Number,
        attackspeed:Number
    }
    passive: {
        name:string,
        description:string,
        image: {
            full:string
        }
    }
    spells:Passive[]
}

interface Passive {
    name:string,
    description:string,
    image: {
        full:string
    }
}