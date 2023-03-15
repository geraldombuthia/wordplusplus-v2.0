# Word++ v2.0

This is an upgraded version of the first iteration of the Word++ Application.
Uses a Public API to find words, provide their definitions, synonyms, antonyms, pronounciatons etc.

This app is hosted on Netlify and can be accessed at [wordplusplus.netlify.app](https://wordplusplus.netlify.app)

## Objectives

* Teach new vocabularies using **Word of the day** type of feature.
* Provide a means to find definitions of words
* Provide a means to hear pronunciations of words.
* Generate random quotes froma free API.
* Provide a bookmarking interfacing for viewing later
* Provide a sharing tool to other social media  apps such as Whatsapp, Facebook, Twitter,   etc.
* Provide a local storage mechanism for bookmarked books.
* Develop an application that passes the lighthouse tests especially in performance. ...
***
*Future Objectives once the above are met. This will be more of a backend integrative process*
* Provide a synonym and antonyms game to play
* introduce user registration and login to play
* Introduce an online score board.
* Introduce an online voice chat to allow socializing.

## Personal Motivation

This project will serve the purpose of allowing me to practise working with React and gain an in-depth understanding of what it takes to build fast, stable and optimixed React applications. A grasp of the fundamentals of UI/UX will also be earned.

## Architecture and State management

The above named functionalities will require a better state management  other than *usestate*(). *Redux* will  be made use of at a later stage when most of the functionality has been achieved. Currently however, the simple state management provided by React will suffice.

*Separation of concerns* as a principle will be utilised in the development. Modularization will be utilised in the form of components and separate function files. This is in the hope of improving readability and development.

## Optimization and testing
The application is tested against Lighthouse application load metrics to ensure it is upto per wth requirements for a better user Experience. Optiizations were made to ensure the following results on Lighthouse for mobile loading.

![Lighthouse scores](/LighthouseTest.png)

Improvements will be made to improve this reading.

## Third Party APIs and content

The development of this project relies heavily on the following third party APIs. ...
* [Free Dictionary API](https://dictionaryapi.dev)
* [Free Quotes API](https://type.fit/api/quotes)
* [FreePik Vectors and Stock Photos](https://www.freepik.com)

## Targeted End User
This app is targetted for curious individuals with a desire to improve their vocabulary.

## Dates
**Start Date** - 31 January 2023
**End Date**   - Under Active development