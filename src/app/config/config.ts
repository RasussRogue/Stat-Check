const urlConfig = {
    url: "https://ddragon.leagueoflegends.com/cdn/",
    version: "11.8.1/",
    lang: "data/en_US/",
    champion: "champion/",
    img: "img/",
    passive: "passive/",
    spell: "spell/",
    json: ".json",
}

export function getUrlChampionList() {
    return urlConfig.url + urlConfig.version + urlConfig.lang + "champion" +urlConfig.json
}

export function getUrlChampion(champion:string) {
    return urlConfig.url + urlConfig.version + urlConfig.lang + urlConfig.champion + champion + urlConfig.json
}

export function getUrlChampionAvatar(champion:string) {
    return urlConfig.url + urlConfig.version + urlConfig.img + urlConfig.champion + champion
}

export function getUrlPassive(passive:string) {
    return urlConfig.url + urlConfig.version + urlConfig.img + urlConfig.passive + passive
}

export function getUrlSpell(spell:string) {
    return urlConfig.url + urlConfig.version + urlConfig.img + urlConfig.spell + spell
}




