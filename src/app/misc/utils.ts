import {Champion, Data} from "../components/model/models";

export function cleanDescription(description: string) {
    //This cleans the argument of any content in <tags>. Thanks Riot, I hate regexes.
    //Example : changes "This <div>is now<br> clean" to "This is now clean"
    return description.replace(/<[^>]*>/g, '')
}

export function cleanCooldown(cooldowns:Number[]) {
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