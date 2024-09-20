Readme 

# Finish The Lyrics

This quiz is simple and fun.  

Users of this page will find the quiz enjoyable and hopefully a bit challenging. 

This site is targeted towards people who want's to play a fun music quiz where you need to finish the missing lyrics. 

![Responsice Mockup](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/mockup.png)

## Features 
#### Logo & Title
- On the left side is the logo that also links to the first page (index.html).
- In the middle is the title in a grey color with a light yellow background.

![Logo](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/finish.png)

#### Quiz 
- The main part of the page is the quiz. It shows a question and 4 possible answers. It's up to the user to choose which one they think is the correct answer.
- Once the user chooses an answer and clicks on it, the background of the answer turns into either green or red. 

![Quiz](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/quizredgreen.png)
![Score](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/score.png)

## Testing 
- I have tested that the website works in different browsers: Chrome, Safari and Firefox.
- I can confirm that the site is responsive and looks good on different standard sized devices. 
  The functions are also working. I tested this with Chrome devtools device toolbar.
- I have confirmed that the quiz works. The answer-buttons work and are changing color depending on if the answer is correct (green) or incorrect (red). 
## Bugs 
#### Solved Bugs
- I had one issue with html anchor tag:
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
## Validator Testing 
#### HTML
- No errors came up after the official W3C validator had gone through it.
#### CSS
- No errors were found after the official (jigsaw) validator had gone through it.
#### JS
- No errors were found in jshint
#### Accessibility
- I confirmed that the fonts and colors i've used are easy to read and are accessible, after using the lighthouse tool in Chrome.
![Accessibility](https://github.com/Felixiden1987/Quiz-Game/blob/main/assets/images/lighthouse.png)

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
[Greatstack](https://www.youtube.com/watch?v=PBcqGxrr9g8)
### Content 
- The text for the quiz is from a quiz i made years ago for midsummer.
### Media 
- Favicon and logo was taken from Google Fonts
