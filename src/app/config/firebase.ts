import firebase from "firebase";
import Firestore = firebase.firestore.Firestore;
import DocumentData = firebase.firestore.DocumentData;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {Matchup} from "../components/model/models";
import {sortMatchups} from "../misc/utils";

export const firebaseConfig = {
    apiKey: "AIzaSyChTbm_iajCJCjWFExk-2_ClDAE8sSo1Ak",
    authDomain: "stat-check.firebaseapp.com",
    projectId: "stat-check",
    storageBucket: "stat-check.appspot.com",
    messagingSenderId: "1015627603282",
    appId: "1:1015627603282:web:9758effb4e995c494aae8b",
    measurementId: "G-0YELMR7ECT"
}

const matchupSample = {
    champion: "Aatrox",
    opponent: "Renekton",
    tips : ["Taking tankier Conqueror runes is recommended.", "Try to stop him mid dash with your Q to deny his combo."],
    votes: [10, 0, 0, 0, 0]
}

function addSample(db: Firestore) {
    db.collection("matchups").doc(matchupSample.champion + matchupSample.opponent).set(matchupSample)
        .then(() => {
            console.log("Document succesfully written");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export function setupFirestore() {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    //Following line is used to add data to Firestore from here.
    //addSample(db)
    return firebase.firestore()
}

export function dataToOpponents(querySnapshot:QuerySnapshot<DocumentData>) {
    const array: Matchup[] = []
    querySnapshot.forEach(doc => {
        array.push(doc.data() as Matchup)
    });
    return sortMatchups(array)
}



