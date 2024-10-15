# Finish The Lyrics

Welcome to this uncomplicated and fun music quiz.  

I hope this page will bring you a enjoyable and hopefully a bit challenging, fun quiz! 

This site is targeted towards people who wants to relax and play a fun music quiz, and I hope it will be useful for people to de-stress. 

The quiz is about finishing the missing lyrics from popular songs. 

![Responsice Mockup](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/mockup.png)

## Features 
#### Logo & Title
- On the left side is the logo that also links to the first page (index.html).
- In the middle is the title in a grey color with a light yellow background.
- To the right side of the title is a icon of a music note.

![Logo](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/landingpage.png)

#### Quiz 
- The main part of the page is the quiz. It shows a question and 4 possible answers. It's up to the user to choose which one they think is the correct answer.
- When the quiz is started by clicking the start quiz button, a countdown timer of 20 seconds starts.
- The goal is to choose an answer before the time runs out.
- Once the user chooses an answer and clicks on it, the background of the answer turns into either green or red and the timer stops.
- Or in this case (image below), the user has selected the incorrect answer in red, but the correct answer is also displayed in green.
- When all questions are answered, the user will see how many correct answers the user got.  
![Quiz](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/incorrect.png)

## Features left to implement
- When there is time i would like to make the questions in the quiz to be showing randomly from the array.
- A scoreboard that increases the score for correct and incorrect answers while the user is playing.
- A small picture of the artist for that specific question to give a hint of the song.
- A audio sample of the question with the missing lyrics from the question muted. 
## Testing 
### Testing site responsiveness
- I can confirm that the site is responsive and looks good on different standard sized devices. 
  The functions are also working. I tested this with Chrome devtools device toolbar.
- I have tested that the website works in different browsers: Chrome, Safari and Firefox.
### Testing validation
- Html: No errors came up after the official W3C validator had gone through it. ![Html](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/html-checker.png)
- CSS: No errors were found after the official (jigsaw) validator had gone through it. ![CSS](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/css-checker.png)
- JavaScript: No errors were found in jshint, only warnings that refers to versions before ES6. []()

### Manual test cases

#### Start quiz button: 
- The expected outcome when clicked: Start the quiz and show a question with 4 possible answers and with the timer counting down from 20 seconds.
- Tested by clicking on the start quiz button.
- Result: The quiz starts and shows a question with 4 possible answers and the timer starts counting down from 20.
#### Answer buttons
- The expected outcome when clicked: Turn the background-color of the answer clicked into either red or green and to stop the countdown timer.
- Tested by choosing an answer and clicking on it. 
- Result: The answer was wrong and the background-color turned red for the answer i chosed. The correct answers background-color turned green.
#### Next button
- The expected outcome when clicked: Show next question.
- Tested by clicking on the button.
- Result: Shows a new question.
#### Try again button 
- The expected outcome when clicked: Bring the user back to the start of the quiz
- Tested by clicking on the button.
- Result: Brings the user back to the first page view and showing the start quiz button again.
#### Logo 
- The expected feature: Bring the user back to the first page view.
- Tested by clicking on the logo.
- Result: Brings the user back to the first page view and showing the start quiz button again.
### Test accessability
- I confirmed that the fonts and colors i've used are easy to read and are accessible, after using the lighthouse tool in Chrome.
![Lighthouse](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/lighthouse.png)

## Bugs 
#### Solved Bugs
- When i tested the html in W3C validator, i had one issue with this anchor tag:
- ```
  <a href="index.html" aria-label="Take user back to first page"><h1 class="heading">

                <!-- Logo -->
                 <img class="logo" src="assets/images/quiz_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="logo"></a>
  Finish The Lyrics</h1>
  ```
- It turns out it was violating the nesting rules, so I nested it inside the h1 class instead, and added a music icon on the right side of the title.
- Problem solved.
- ```
  <h1 class="heading">
            <a href="index.html" aria-label="Take user back to first page">

                <!-- Quiz Logo -->
                <img class="logo" src="assets/images/quiz_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="logo"></a>
            Finish The Lyrics <i class="fa-solid fa-music"></i>
        </h1>
  ``` 

## Deployment 

 
#### This site was deployed to Github pages. The steps are as follow:
- In the GitHub repository, navigate to the settings tab.
- Find Pages on the left side menu, in the Branch-section, select the Main Branch and press save.
- Once the Main branch is selected, the page provides the link to the completed website.

#### Here is a live link 
[Finish The Lyrics](https://felixiden1987.github.io/Quiz-Game/)

## Credits 

### Javascript 
- The code for the quiz was taken off of this youtube-channel 
[Greatstack](https://www.youtube.com/watch?v=PBcqGxrr9g8).
- It had the basic quiz i wanted to make, and it was a great guide to follow and learn from when having limited time.
- I have since received results on the project, altered the code and added more functions:
- A "start quiz" button that allows the user to be familiar with the page before starting the timed quiz. 
- A 20 second timer for every question, with the function of picking a incorrect answer if the time runs out.
- A redirect function to the "try again" button to bring the user back to the first page view.
### Content 
- The text for the quiz is from a music-quiz i made years ago for midsummer.
### Media 
- Favicon and logo was taken from Google Fonts - [Quiz](https://fonts.google.com/icons?icon.query=quiz&icon.size=24&icon.color=%235f6368)
- Music note was taken from FontAwesome - [Font Awesome](https://fontawesome.com/icons/music?f=classic&s=solid)
