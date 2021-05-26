# Stat Check

[Lien du Trello](https://trello.com/b/uc8WwvZB/stat-check)

## Goal
This project is a way for me to practice and perfect my React programming skills. It is a learning tool that allows me to experiment and try various things out when it comes to front-end development. 

It also allows me to discover new technologies and learn to master them, all based around a theme that personnaly interests me : video games, and particularly League of Legends. 

Lastly, I will use this opportunity to improve my overall organization, my planning skills and my time management skills while practicing the Agile method.

## Tools used

|  Software |  Version |  Link |
|---|---|---|
| Axios | 0.21.1  |  https://axios-http.com/docs/intro/ |
| Material-UI | 4.11.2  |  https://material-ui.com/ |
| MDI (Material Design Icons |5.9.55|https://materialdesignicons.com/|
| React |17.0.1|https://fr.reactjs.org/|
| React Router |5.2.0|https://reactrouter.com/web/guides/quick-start|
| Typescript |4.1.5|https://www.typescriptlang.org/docs/|
| Webpack |5.21.2| https://webpack.js.org/concepts/ |
| Webpack Dev Server|3.11.2|https://webpack.js.org/configuration/dev-server/|

## Choices

I went for the use of **React Hooks** instead of class based components due to their general ease of execution concerning states (useState and useEffect in particular making it much simpler to program). Furthermore, being in a phase of learning React, I would rather start with a more efficient and powerful method of development without getting used to class-based component first, as it will almost force me to un-learn certain habits once I would switch to hooks.

I choose to use **Material-UI** for its ease of setup and utilisation, which allows me to learn fundamentals of design, ergonomy and user-friendly development. Through it I will learn to set up styles, choose colors and components that go well together, which adds a new type of knowledge besides regular React front-end development.

I also decided to go for **Typescript** over native Javascript, as it adds another layer of readability of the code. Thanks for example to the compiler catching erros before they show up at runtime, and also being an overall better suited tool for teamwork, it makes sense to me that I may as well practice it over pure Javascript.

An other important point is that the Riot DataDragon API can be troublesome to manipulate at times, and the use of Typescript interfaces makes it much easier to deal with.

In addition, as I have the background of a OOP developer (I mostly studied programming through Java) I thus feel more familiar with the concepts that Typescripts brings (static type definition etc..)

I decided to use **Webpack** as I will be using external assets and various type of files throughout my development, so Webpack helps a lot by creating a dependancy graph of my files and allowing me to simply use "require" ro request a file, for example. This way, Webpack takes care of that aspect automatically, as well as offering a clearer config method (through the webpack.config.js file).

I also decided solely use **external APIs** (Riot Games DataDragon for example) as my goal for this project is not to set up my own backend (which I could), but rather to focus on learning front-end development.

For the color choice, I based myself off of [**this article**](https://www.smashingmagazine.com/2016/04/web-developer-guide-color/), which I found both helpful and simple to apply. I ended up with the following colors for my app :

| Color      | Hexa        |
| ---        | ---         |
| Primary    | **#17172E** |
| Secondary  | **#3273FA** |
| Dark gray  | **#434449** |
| Light gray | **#EAEBF0** |


## Commands to run

```bash
npm run watch
(to start webpack)

npm run serve 
(to start the webpack server)
``` 





