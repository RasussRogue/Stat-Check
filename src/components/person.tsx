import * as React from 'react';
// @ts-ignore
import {Button, Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {FC, useEffect, useState} from "react";

interface Person {
    results: [{
        name: {
            title: string,
            first: string,
            last: string,
        },
        gender: string,
    }],
    info: {
        seed: string
    }
}

type PersonProps = Readonly<{
    person:Person
}>


const Person : FC<PersonProps> = ({person}) => {
    return (
        <div>
            <ListItem button>
                <ListItemText
                    primary={person.results[0].name.last + ' ' + person.results[0].name.first + ', ' + person.results[0].gender}/>
            </ListItem>
        </div>
    );
}

export const Persons = () => {
    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        loadPerson();
    }, [])

    /*useEffect(() => {
        if(persons.length == 5) {
            console.log("flush")
            setPersons([]);
        }
    }, [persons])*/

    function loadPerson() {
        fetch(`https://randomuser.me/api/`, {
            method: 'GET',
        }).then(response => response.json())
            .then(response => {
                const person = response as Person
                const newPersons = persons.slice().concat(person)
                setPersons(newPersons);
            })
    }


    function handleClick(e: { preventDefault: () => void; }) {
        e.preventDefault()
        loadPerson()
    }


    const personsss = persons.map((person: Person) => <Person person={person}/>);
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs>
                <List component="nav" aria-label="secondary mailbox folders">
                    {personsss}
                </List>
            </Grid>
            <Grid item xs>
                <Button variant="contained" onClick={(e: { preventDefault: () => void; }) => handleClick(e)}>Générer
                    un être humain</Button>
            </Grid>
        </Grid>
    );

}
