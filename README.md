# Advanced JavaScript

* **Course:** [INFO1-CE9766001, NYU SCPS, Summer 2012](http://www.scps.nyu.edu/course-detail/INFO1-CE9766/20122/advanced-javascript)
* **Location:** [7 East 12th Street](https://maps.google.com/maps?q=7+East+12th+St,+NYC&hl=en&sll=40.734389,-73.993746&sspn=0.011479,0.016844&gl=us&hnear=7+E+12th+St,+New+York,+10003&t=m&z=16), room 229
* **Schedule:** Sat., June 2nd and 9th 2012,  9-6pm (2 sessions)
* **Instructor:** Aidan Feldman, alf9@nyu.edu
* **Office Hours:** Thursdays 6-8pm, [Vineapple, 71 Pineapple St, Brooklyn](https://maps.google.com/maps?q=Vineapple,+71+Pineapple+Street,+Brooklyn,+NY&hl=en&sll=40.720162,-73.999817&sspn=0.011563,0.020492&oq=vine&hq=Vineapple,&hnear=71+Pineapple+St,+Brooklyn,+Kings,+New+York+11201&t=m&z=16&iwloc=A) during [Hacker Hours](http://hackerhours.org/) - or by appointment
* **Prerequisites:** [INFO1-CE9755 (JavaScript)](http://www.scps.nyu.edu/course-detail/INFO1-CE9755/20122/javascript), or intermediate knowledge of HTML and JavaScript

## Course Description

Learn best practices in JavaScript in this intensive, two-day course. Topics include data encapsulation, closures, binding, inheritance, and name spacing. Discover some of the lesser-known, yet useful, features of the language, such as how to debug JavaScript problems on different browsers and improve performance. Create interactive webpages using third-party JavaScript libraries.

## Course Overview

We will dive into the nuances of JavaScript, how prototypal inheritance compares to classical inheritance, and how this can be used to build dynamic and complex web applications.  Modern tools like jQuery and BackboneJS will be discussed, but students will learn the building blocks of these frameworks and after this course be able to understand what is happening under the hood.  The focus will be on client-side development, though much applies to server-side systems like NodeJS, as well.  Topics covered include:

* Encapsulation, Closures and Scope
* Classical vs. Prototypal Inheritance
* The Event Loop
* AJAX and JSONP
* Creating Backbone-like models from scratch
* Test- and Pseudocode-Driven Development

Topics will be demonstrated through live-code examples, available at http://afeld.github.com/advanced_js.  Additional exercises will completed in-class.

## Assignment

As homework, you are going to re-create the game Text Twist.  The original (http://games.yahoo.com/console/tx) is an old-school Java applet... we want to bring it into this decade and port to JavaScript.  Spend a bit of time playing it to get the feel (warning: addictive).  The requirements:

* two sets of letters (get a single set working first)
* which set is used for each game (random vs. strict ordering): coder’s choice
* letters from set displayed in random order at the start of each game
* should be trivial to add additional sets
* game should be playable with keyboard only (you might try jQuery [keypress](http://api.jquery.com/keypress/)/[keydown](http://api.jquery.com/keydown/))
* display a player’s progress within a game, either similar to the Yahoo implementation (empty boxes on the left), or in a different creative way
* a countdown showing the time remaining (time limit up to you)
* a way to reset the game when it ends
* use the Contructor (a.k.a. Object-Oriented) and Module patterns
* commented, well-structured code

Bonus points:

* additional sets of letters
* automated tests
* “twist” functionality (reshuffling the letters mid-game)
* animations (using JavaScript or CSS3)
* variations or enhancements to the gameplay (please provide a written explanation of the expected behavior)

You are welcome to publish on the web (think of your own name), but **please email files/folder/.zip of all necessary files to instructor (alf9@nyu.edu) by the start of the second session.**  You will also have the option to demo your game to the class.

## Resources

### Required Reading

* http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
* http://bonsaiden.github.com/JavaScript-Garden/

### Recommended Reading

* http://ejohn.org/apps/learn/
* [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) by Douglas Crockford
* [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) by Stoyan Stephanov
* http://addyosmani.com/resources/essentialjsdesignpatterns/book/
* http://slides.html5rocks.com/

### Tools/Reference

* [JSLint.com](http://jslint.com) / [JSHint.com](http://jshint.com)
* [Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/docs/overview) / [Firebug](http://getfirebug.com/)
* [Mozilla Developer Network](https://developer.mozilla.org/en/JavaScript) and [Learn JavaScript](https://developer.mozilla.org/en-US/learn/javascript)
* [w3schools.com](http://www.w3schools.com/jsref/default.asp)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do) by David Flanagan

## Grading

* Class Participation – 30%
* Homework – 40%
* Quiz – 30%

## Statements on Plagarism

### SCPS

> New York University takes plagiarism very seriously and regards it as a form of fraud.  The definition of plagiarism that has been adopted by the School of Continuing and Professional Studies is as follows: "Plagiarism is presenting someone else's work as though it were one's own.  More specifically, plagiarism is to present as one's own words quoted without quotation marks from another writer; a paraphrased passage from another writer’s work; or facts or ideas gathered, organized, and reported by someone else, orally and/or in writing.  Since plagiarism is a matter of fact, not of the student's intention, it is crucial that acknowledgement of the sources be accurate and complete.  Even where there is not a conscious intention to deceive, the failure to make appropriate acknowledgement constitutes plagiarism.  Penalties for plagiarism range from failure for a paper or course to dismissal from the University.

### Instructor

Reuse and building upon ideas or code are major parts of modern software development.  As a professional programmer you will never write anything from scratch.  Please respect the terms of use and/or license, and if you reimplement or duplicate an algorithm or code from elsewhere, credit the original source with an inline comment.

------------------------------------

## Using this repo

[NodeJS](http://nodejs.org) is required (tested w/ Node v0.6.18).  To run the `examples/`:

    $ node run_tests.js

To run an individual exercise:

    $ node run_tests.js examples/FILENAME.js

To build the examples as HTML:

    $ node build.js

To build this README as a PDF:

    $ gem install gimli
    $ gimli
    # outputs README.pdf
