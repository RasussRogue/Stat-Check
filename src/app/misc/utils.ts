import {Champion, Data} from "../components/model/models";

export function cleanDescription(description: string) {
    //This cleans the argument of any content in <tags>. Thanks Riot, I hate regexes.
    //Example : changes "This <div>is now<br> clean" to "This is now clean"
    return description.replace(/<[^>]*>/g, '')
}

export function cleanCooldown(cooldowns: Number[]) {
    //This displays the cooldowns of an ability and replaces all the , with /
    //Example : changes "4,5,8,3" to "4/5/8/3"
    return cooldowns.toString().replace(/[ ]*,[ ]*|[ ]+/g, '/')
}

export function extractChampionList(data: Data) {
    return Object.values(data.data) as Champion[]
}

export function extractChampion(data: Data) {
    return Object.values(data.data)[0] as Champion
}

export function computeStat(base: number, growth: number, level: number) {
    //Takes the base stat, growth value and level of a champion and returns the calculated stat at this level
    const growthComputed = growth * (0.65 + 0.035 * level)
    return Math.round(base + growthComputed * (level - 1) * (0.7025 + 0.0175 * (level - 1)))
}

export function getChampionByName(champions: Champion[], name: string) {
    //Takes a champion's name and a list of champions and returns the champion with the same "name" value from the list.
    const result = champions.filter((element) => element.name === name)
    return result[0]
}