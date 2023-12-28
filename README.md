# Beat Saitama! - Memory Card Game

![Beat Saitama Responsive Mock-up](assets/images/readme-images/mock-up.JPG)

Try and beat Saitama in this One Punch Man themed memory card game where the user's aim is to find all matching picture cards in as little time as possiple.

Link to [live site](https://kay-ddggxh.github.io/CI-PP2_memory-card-game/)

## Index - Table of Contents

- [Design](#design)
    - [Wireframes](#wireframes)
    - [Font and Colours](#font-and-colour-choices)

- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#possible-future-features)

- [UX](#ux)
    - [Site Goals](#site-goals)
    - [User Stories](#user-stories)

- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Browser Testing](#browser-testing)
    - [Manual Testing](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)

- [Deployment](#deployment)

- [Credits](#credits)
    - [Media](#media)
    - [Code](#code)
    - [Content](#content)

## Design

This game was designed with simple, intuitive functionality in mind. All features are self-explanetory and the game itself is rather common, thus the rules are well known and not discussed in to much detail on the actual site. Even without initial understanding of the game, the user is able to quickly figure out how to play it by trying out the site's different features.

It is assumed that anybody coming across this game, i.e. searching for a One Punch Man card game is already aware of the protagonist the game is based on. For those who aren't, a link to the OPM wiki is found in a brief description of the character Saitama.

### Wireframes

The first [wireframes in Figma](https://www.figma.com/file/ZL7CYHIYrd1EM1fCKRbv8f/Untitled?node-id=0%3A1) show a very simple layout of the most essential features, aiming for a minimum viable product.

![Wireframes](assets/images/readme-images/wireframes.JPG)

### Font and Colour choices

**Fonts:** Fonts were chosen to match the style of the One Punch Man manga as closely as possible. The original fonts could not be sourced unfortunately.

**Colours:** The main colour scheme follows the design of the anime, maintaining a dark mood based on the main red colour found in Saitama's (One Punch Man protagonist) cape, gloves and boots.

## Features

The site contains all necessary features of a simple, functioning memory card game.

### Existing Features

- **Modal with Start Game Button**
    - Displays when site first loads
    - Enables the user to enter a player name
    - Game works even without entering a player name

    ![modal](assets/images/readme-images/modal.JPG)

- **Heading**
    - Displays name of the site and sub-heading
    - Located at the top of the site

    ![header](assets/images/readme-images/heading.JPG)

- **Sound Toggle**
    - Located at the top right of the site
    - Enables user to play and pause OPM theme tune
    - Button changes according to play or pause functionality

    ![play button](assets/images/readme-images/sound-play.JPG) ![pause button](assets/images/readme-images/sound-pause.JPG)

- **Theme Introduction**
    - Located below the heading
    - Provides very brief introduction to the game's character Saitama from the manga and anime One Punch Man
    - Provides link to OPM wiki page for more detailed information

    ![intro section](assets/images/readme-images/OPM-info.JPG)

- **Game Rules**
    - Located between OPM info and game area
    - Informs the user in rudimentary terms of how to play the game
    - Informs the user of how the score is calculated

    ![game rules](assets/images/readme-images/rules.JPG)

- **Game Area**
    - The main feature of the site
    - A grid of 12 cards (6 matching pairs), depicting various scenes featuring Saitama 
    - Cards appear face down at the start of the game
    - On click, cards are turned face up. Matching pairs remain face up. Non-matching cards get flipped back face down.

    ![game area](assets/images/readme-images/game-area.JPG)

- **Timer and Moves Counter**
    - On large screens to the right of the game area
    - Above game area on small screens
    - Timer starts as soon as user clicks Start Game button or restart button
    - Timer stops when game is completed
    - Moves counter increments by 1 every time the user clicks on a card

    ![timer and moves counter](assets/images/readme-images/time-moves.JPG)

- **Score Area**
    - displays current score, calculated after each completion of the game
    - stores and displays best score of every session

    ![score area](assets/images/readme-images/score-area.JPG)

- **Name Display**
    - The player's name as entered in the modal's input field is displayed in the heading of the score area
    - Should the user not enter a player name, the heading will default to "Your Scores"

    ![player name](assets/images/readme-images/name-display.JPG)

- **Restart Button**
    - Appears below the score area when the game is completed
    - On click, resets the timer, move counter and current score counter to 0
    
    ![restart button](assets/images/readme-images/restart-btn.JPG)

- **Footer**
    - Located at the bottom of the site
    - Contains social media icons which link to site creater's Twitter and LinkedIn profile, as well as the open-source GitHub repo of the site

    ![footer](assets/images/readme-images/footer.JPG)


### Possible Future Features

- **Varying levels of difficulty**
    - Enable the user to choose between different levels of difficulty
    - The higher the skill level, the more cards in the grid

- **Manga/Anime toggle**
    - Enable the user to choose a theme
    - Anime theme: the cards will depict coloured scenes from the OPM anime show
    - Manga theme: the cards will depict b/w scenes from the manga

- **Sound effects**
    - Enables the user to toggle sound effects for flipping the cards and completing the game

## UX

### Site Goals

The goal of the site is to provide the fan community of One Punch Man with an entertaining yet not too complicated game, featuring images of the anime series.

The game is intended to be played over the course of a few minutes. It does not take up too much of the user's time either by playing or learning the rules and functionality.

### User Stories

**As a site visitor I want to:**

- be able to enter a player name that then displays on the site
- get a quick and thorough overview of the sites features and functionalities
- find a short and snappy blurb about the site's theme
- see a link to a site providing me with more detailed information about the site's theme
- find a visually appealing design that connects me with the theme of One Punch Man
- be able to listen a short audio track that emphasises the One Punch Man theme (and puts me in a good mood because the tune is epic!)
- read a brief and simple description of the game rules and score calculation
- be able to play the game with simple click interaction
- see the time that has elapsed while playing the game
- see a move counter recording the amount of clicks I perform
- see my current score calculated after completing one round of the game
- see my highest score displayed while playing more rounds
- be able to restart the game without reloading the page
- be able to find the site's creator on social media and GitHub

**As the site administrator I want to:**

- be able to make modifications to the game (see [future features](#possible-future-features))
- provide the user with social media contacts
- offer the user the chance to explore the code for the site


## Testing

### Validator Testing

- HTML ([W3C validator](https://validator.w3.org/))

    ![HTML validator result](assets/images/readme-images/HTML-validator-result.JPG)
    - **Error** : Bad value `dialog` for attribute `method` on element `form`

        In order to close the modal upon form submission, the value of `dialog` is actually required for the form element's `method` attribute in this case. 

        Refer to [this tutorial](https://www.youtube.com/watch?v=TAB_v6yBXIE&t=300s) for further explanation.

        The `dialog` HTML element and `::backdrop` property have only recently (15/03/2022) gained support from Safari and are now supported by all major browsers.

    - **Warning** *Section lacks heading*:

        A heading that appears visually for on the site above the game area would not suit the general layout and design.
        
        **Solution**: In order to improve accessibility, an `aria-label` attribute was added to the section.

- CSS [Jigsaw](https://jigsaw.w3.org/css-validator/)

    ![CSS validator result](assets/images/readme-images/CSS-validator-result.JPG)

    - **Value Error** : background-repeat `none` is not a background-repeat value : `none`

        **Solution** : change background-repeat value to `no-repeat`

    - **Value Error** : margin-top Too many values or values are not recognized : `0.5em 1em 0 1em`

        **Solution** : remove `margin` property for `.score-heading` element on line 392 altogether - unnecessary!

- JavaScript [JSHint](https://jshint.com/)

    No significant issues.

- Accessibility ([axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd))

    - 1 critical issue: form elements needs labels
        
        **Solution** : remove `p` element from modal and transfer its content to `label` element

    - Colour contrast for 18 elements needs reviewing. However, it's passable. 

- Performance, Accessibility, SEO, Best Practices (Lighthouse Chrome DevTools)

    ![Lighthouse rating](assets/images/readme-images/lighthouse-result.JPG)

- Browser Support ([CanIUse](https://caniuse.com/))

    - `gap` property for Flexbox: according to caniuse.com this property has a global support of 89.28%
    - `dialog` HTML element: according to caniuse.com this property has a global support of 87.75% and is supported in all major browsers


### Browser Testing

**Layout:** Testing layout and appearance of site for consistency throughout browsers.

**Functionality:** 
- Testing complete functionality of the game. This includes:
    - Modal function (take player name and start game button)
    - Soundtrack play/pause
    - Game function 
    - Timer
    - Move Counter
    - Score display
    - Best score display

- Ensuring all links, navigation and form submit functions as expected throughout browsers.

| Browser     | Layout      | Functionality |
| :---------: | :----------:| :-----------: |
| Chrome      | ✔          | ✔             |
| Edge        | ✔          | ✔             |
| Firefox     | ✔          | ✔             |
| Safari      | ✔          | ✔             |
| IE          |deprecated by Microsoft, not tested|

### Manual Testing

| Feature     | Expect      | Action        | Result |
| :---------: | :----------:| :-----------: | :-----:|
| **Player name input**   | When entering a player name, the name appears in the score area heading after commencing the game   | Enter player name and click "Start Game" button | Game commences and player name is displayed in score area |
| **Player name input where input value is null**   | When not entering a player name, the default value of "Your" appears in the score area heading after commencing the game   | Enter no player name and click "Start Game" button | Game commences and "Your score" is displayed in score area |
| **Start Game Button**  | When clicked, the modal will close and the game starts with running timer and move counter  | Clicked Start Game button | Modal closes, timer starts and game can be played while number of moves are counted and displayed |
| **Soundtrack player** | When the ▶ icon is clicked, audio starts to play and ⏸ icon displays. When the ⏸ icon is clicked, audio pauses and ▶ icon displays  | Click ▶ icon / Click ⏸ icon |  Audio plays and ⏸ icon displays. Audio pauses and ▶ icon displays |
| **Wiki link** | When clicked, links to the One Punch Man wiki page in a new tab |  Click on link | OPM wiki page opens in new tab |
| **Card flip** | When card is clicked, card flips over and shows image | Click card | Card flips and shows image |
| **Card match** | Matching card pairs remain face up | Click cards until matching pair found | Matching pair remains face up |
| **Card no-match** | Non-matching cards will flip back after 1.5 seconds | Click on non-matching cards | After 1.5 seconds, cards flip back face down |
| **Timer** | Timer will start running on start of game / finish running on game completion | Start game / Complete game | Timer starts running / Timer stops running |
| **Move counter** | Mover counter will imcrement by 1 each time a card is clicked | Click cards | Move counter increments by 1 each time |
| **Score display** | Will show current score of most recent completed game (calculated through number of moves and time elapsed) | Complete game | Score displays - higher score shows the lower the number of moves and the less time elapsed |
| **Best Score display** | Will show highest score achieved in one session | Complete several games with different scores | Best score displays highest score of current session |
| **Game completion** | On finding all matching cards restart button will appear on top of game area | Complete game - find all matching cards | Restart button appears |
| **Restart button** | When clicked, will reset timer, move counter and current score to 0 and start game again while retaining best score | Click restart button | Game starts again; timer, move counter start from 0; current score shows 0; best score displays highest score of current session |
| **Social link icons** | Social link icons open relevant websites in new tab when clicked| Click all individual icons | All respective sites open in new tab |


### Testing User Stories

| Expectation (As a user, I want to...)  | Result (As a user, I...)    |
| :---------------------------------: | :------------------------------:|
| Be able to enter a player name that then displays on the site | can enter a player name at the start of the game and see it displayed in the score area |
| Get a quick and thorough overview of the sites features and functionalities | can find my way around the site easily and quickly with all areas being layed out intuitively |
| Find a short and snappy blurb about the site's theme | can read a few lines about site's theme without spending too much time on it |
| See a link to a site providing me with more detailed information about the site's theme | can see and click on a link that takes me to the One Punch Man Wiki in a new tab |
| Find a visually appealing design that connects me with the theme of One Punch Man | see a red and yellow colour scheme and fonts that are reminiscent of the One Punch Man anime |
| Be able to listen a short audio track that emphasises the One Punch Man theme (and puts me in a good mood because the tune is epic!) | can play and pause the One Punch Man theme tune that reminds me of the anime (and makes me feel amazing and strong!) |
| Read a brief and simple description of the game rules and score calculation | can read the game rules above the game area in very little time |
| Be able to play the game with simple click interactions | play the game by simply clicking on the cards in the game area |
| See the time that has elapsed while playing the game | see a running timer either above or to the right of the game area during the whole duration of one round |
| See a move counter recording the amount of clicks I perform | see the move counter increment by 1 each time I click on a card |
| See my current score calculated after completing one round of the game | see the score of my current round displayed after completing it |
| See my highest score displayed while playing more rounds | can see my highest achieved score in the score area throughout the duration of my session |
| Be able to restart the game without reloading the page | can click the restart button after completing a round and play the game again while retaining my highest score |
| Be able to find the site's creator on social media and GitHub | can click on the social media icons in the footer and which link me the site creator's respective accounts in new tabs |


### Fixed bugs

To view past fixed bugs, see [Validator Testing](#validator-testing)

### Unfixed bugs

No unfixed bugs to date.

## Deployment

This site was deployed via GitHub pages using the following steps:
- From the GitHub repository, navigate to **Settings**
- In the left-hand navigation section select **Pages**
- From the source section drop-down menu change Branch from **none** to **main** and click the **Save**
- After several minutes the website is live and will be automatically refreshed with each Git push command.

The link to the live site is: https://kathrin-ddggxh.github.io/CI-PP2_memory-card-game/ 

To run locally:
- Log into GitHub and click on repository to download ([CI-PP2_memory-card-game](https://github.com/Kathrin-ddggxh/CI-PP2_memory-card-game))
- Select **Code** and click "Download the Zip file.
- Once download is completed, extract ZIP file and use in your local environment.

Alternatively you can **Clone** or **Fork** this repository into your GitHub account.

## Credits

### Media

**Images:**

- *angry:* https://onepunchman.fandom.com/wiki/Saitama_vs._Mosquito?file=Pissedtama_Anime.png
- *bargain-sale*: https://onepunchman.fandom.com/wiki/Saitama_vs._Subterranean_King?file=Saitama_when_knowing_he_will_miss_a_bargain_sale.png#Battle
- *card-back*: https://www.logolynx.com/topic/one+punch+man
- *confused-look*: https://winteriscoming.net/2022/06/14/fast-furious-director-making-live-action-one-punch-man-movie/
- *earth*: https://onepunchman.fandom.com/wiki/Saitama_vs._Mosquito?file=Saitama_watching_the_Earth_from_the_Moon.png
- *naked*: https://onepunchman.fandom.com/wiki/Saitama_vs._Mosquito?file=Naked_saitama.png
- *punch-face*: https://www.giantfreakinrobot.com/ent/one-punch-man-justin-lin.html
- *background*: https://wall.alphacoders.com/tag/4k-saitama-%28one%E2%80%93punch-man%29-wallpapers 
- *favicon*: https://read1.mangaonepunch.com/

**Audio**

- *soundtrack:* https://www.youtube.com/watch?v=rW7OB_HDCGQ&ab_channel=THESAMO

### Code

#### Functionality

- [Memory Card Game](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)

- [Timer functionality](https://daily-dev-tips.com/posts/vanilla-javascript-timer/)

- [Modal](https://www.youtube.com/watch?v=TAB_v6yBXIE&ab_channel=KevinPowell)

- [Soundtrack toggle](https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)

- [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

- [Flex order property](https://marina-ferreira.github.io/tutorials/css/flexbox/#order)

- [JavaScript setTimeout() method](https://www.w3schools.com/jsref/met_win_settimeout.asp)

- [JavaScript destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


#### Styling effects and animations
- [CSS perspective property](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [CSS transform-style Property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)
- [Text colour gradient](https://css-tricks.com/snippets/css/gradient-text/)

### Content
**Fonts** 

*Bangers:* [Google fonts](https://fonts.google.com/)

*wild_world:* [Abdullah Mosad](https://befonts.com/wild-world-font.html) (License: Free for Commercial Use); converted into web font kit with [Fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator) 


**Icons** 

All icons were taken from [Font Awesome](https://fontawesome.com/icons)
