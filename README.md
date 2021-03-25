# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Caroline McCain**

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Medium Difficulty Mode - Gives a Longer Sequence of Clues
- [X] Hard Difficulty Mode - Gives a Longer Sequence of Clues + a 5th Button

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](assets/lsgameeasy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.   
For the HTML colors: https://www.w3schools.com/cssref/css_colors.asp
For the pattern builder function: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)   
I encountered some challenges with linking the HTML and JavaScript code. I've never coded in JavaScript before, so I wasn't sure what to expect. I read the directions and the linked sources carefully to get a better understanding. I realized that this was like something I worked on in my software development class. In that class, we created an Android application, and linked it to a Java codebase. I still ran into problems at first, because my buttons weren't showing up and weren't a color other than grey. I realized that I had some discrepancies in naming and some other formatting issues that happened because I rushed into things. To overcome these challenges, I had to start over, and keep careful track of names. Once I did this, I was able to get all the buttons to work correctly. Another challenge I encountered was with the guess function. I wasn't sure what conditions to start with for my conditional. I used the flow chart provided to write comments on what needed to happen, and then wrote the code from there. These challenges represent the two things that challenge me the most with programming: small details and knowing where to start. To deal with them, I use the strategies I talked about above. I slow down and make sure to use precise names when starting a project, and use a similar naming pattern throughout. I also start with comments whenever possible, and work incrementally to write the code.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)   
I have a lot of questions about how websites are designed, specifically in terms of layout and visual appeal. I would love to be able to create websites that are dynamic, interactive, and accessible. The design factors for this program are quite simple, and I would say that this app isn't fully accessible. One way it could be made more accessible is by adding keyboard interactivity, but that's something I do not know how to do. I also think that the design isn't very visually appealing, which I know takes a lot of precision with CSS. I think I have a good feel for the JavaScript and the logic required for that part of the development. I want to learn and practice more with the user interface and interaction side of development. Technology is useless if it isn't easy or appealing to interact with. I know that technology can make life easier and better, and I know I want to work in a career where I can use my technical knowledge to improve my community. This means that design is crucial, and is something I want to know more about. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)   
There are two major areas where this project could be improved if I had more time: code organization and design. There are places where to code could be streamlined, like the start functions. I quickly duplicated them and switched a few variables, which is redundant. Better design would involve one start function that takes different parameters. I also think that the logical flow in the JavaScript could be improved. For example, that the win and lose functions should come after the guess function. Additionally, I usually thoroughly comment my code. With this project, I only commented in the guess funciton because that had the most difficult logic that I wrote more of by myself. As I mentioned in the last question, I also think that the visual design could be improved. I would spend more time researching design techniques and CSS. I would want to have a more cohesive color scheme for the four and five buttons, as well as ensure that all the sounds are a major chord. Adding the ability to use the keyboard to play would make the game more intuitive.



## License

    Copyright Caroline McCain

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.