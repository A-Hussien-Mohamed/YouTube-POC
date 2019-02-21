# YouTube-POC

YouTube is a website for getting videos that user whould need in form of seperate videos or channels.

## Prerequisites

[Angular CLI] version 7.1.0.
[npm package manager] version 6.4.1 
[IDM ] ex: visual studio , studio code , etc...

## Installing

Run `npm install` for installing the packges the project need.
Run `npm serve` for building the project.

## Project Architecture

Project Architecture is divided to Main Component `App-Component` and three child Components `video-Component` , `videoDetails-Component` and `channel-Component` and two services Components `Api-service` and `data-service`.

[Api-Service] is Responsible for the Http requests through httpClient.
[App-data-service] is Responsible for the data transition between The Components.

## Communications 

Projects Components are Send/Recieve Data through `data-service`.

## Libraries Used

 `bootstrap` version 4.1.3 is used for desigining the Application style through embedded classes.
 `Jquery` version 3.3.1 is used for the animation of design components.
 `font-awesome` version 5.5.0 used for the icons in the application.
 `ng2-slim-loading-bar` version 4.0.0 used for the sliding bar in the uppar part of the website.

## Why Those Liberaries

`bootstrap` because its Customizable , Widely used ,Open source , Flexible , Flexible , Consistent , Responsiveness
`font-awesome` because its ranked 1st world wide , powerful icons , satisfying project needs
