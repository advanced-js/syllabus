# Discrete Mathematics syllabus

* **Course Code:** DISMATH 
* **Course Title:** Discrete Mathematics and its Applications
* **Instructor:** Melvin Cabatuan, [melvin.cabatuan@dlsu.edu.ph](mailto:melvin.cabatuan@dlsu.edu.ph)

## Course Description

This course covers elementary discrete mathematics for engineering. It focuses on definitions and proofs as well as practicable methods to provide students with a solid understanding of the material as it relates to their immediate field of study. Topics include propositional and predicate logic, set theory, number theory, methods of proof, combinatorial analysis, functions, relations, algorithms, graph theory, trees, and modeling computation.

## Prerequisite

* ENGALG1(H): College Algebra

## Course Overview

We will start with a review of fundamental concepts on logic, sets, numbers, proofs, functions, relations, and then dive into algorithms (with complexity analysis) and proceed with the course on the introduction to basic data structures such as graphs and trees. The course will be concluded with an introduction to abstract models of computation, i.e. finite-state machines. The focus will be on building a comprehensive foundation for computational problem-solving in engineering:

* Logic, Sets, and Functions
* Relations
* Methods of Proof
* Sequences, Series, Induction, and Recursion
* Counting Fundamentals and  Advanced Counting Techniques
* Algorithms and Complexity Analysis
* Elementary Graph Theory
    * Euler and Hamiltonian Paths
    * Planar Graphs
* Trees 
    * Tree Traversal
    * Spanning Trees
* Modeling Computation


## Homework/Projects

All assignments are listed within the [Course Outline](#course-outline).

### Workflow

If you're using GitHub Desktop, [these instructions](https://help.github.com/desktop/guides/contributing/) will help explain the Git/GitHub concepts. Here are the overall steps:

1. Fork the repository for the exercise/project (found under [github.com/DeLaSalleUniversity-Manila-DISMATH-t216](https://github.com/DeLaSalleUniversity-Manila-DISMATH-t216)).
1. Clone the repository to your computer.
1. Open the `index.html` file in a browser and open the Developer Tools.
1. Modify the files to complete your solution.
1. Refresh the `index.html` page to see the results, and repeat.
1. Make sure all of your code is committed.
1. Push/sync up to GitHub.
1. [Create a pull request](https://help.github.com/articles/creating-a-pull-request/) on the original repository. All assignments are due at the start of the following class, unless otherwise specified.
1. You can continue to push fixes and improvements until the close date (listed in Classes) – just add a comment in the pull request to let me know it's been updated.

When the pull request is created, you should see a message saying that "the Travis CI build is in progress" – this means that your solution is being automatically checked for syntax errors.  If this "build" ends up failing (which will show a red "X"), click through the "details" link and scroll to the bottom to see what the errors were.  Per the [requirements](#requirements) below, please fix the issues and push up the changes.

Note that your solution will also be live at `http://USERNAME.github.io/EXERCISE`.  For exercises with multiple levels/versions, leave a new comment in the pull request saying "Level X finished!" before pushing commits for the next level. "BONUS" levels are for extra credit.


## Course Outline

### Class 0

1. Introduction
    * Introduce discrete mathematics and its significance in engineering and the current information society.
    * Everyone introduce themselves
        * Name
        * What you "do"
        * What are your goals for the class?
   * Syllabus discussion: ex. what the class is going to cover?
   * Introduce the main references for this course (textbook and online resources)
   * Define discrete mathematics
   * Provide the rationale for the course
   * Discuss important insights about the course and learning in general
1. Ex. Logical puzzle: Knight and Knaves
   * Introduction to logical analysis

#### Homework

* Sign up for [Github](https://github.com) and email your username.
* Read [Discrete Mathematics and its Applications](http://highered.mheducation.com/sites/0073383090/information_center_view0/index.html).
* Download [CS103 materials](http://web.stanford.edu/class/cs103).
* 'Fun' movies:
   - [The Imitation Game](https://www.youtube.com/watch?v=S5CjKEFb-sM) 
   - [The Social Network](https://www.youtube.com/watch?v=2RB3edZyeYw)
   - [Is programming hard to learn?](https://www.youtube.com/watch?v=pvAsqPbz9Ro) (Video clip)


### Class 1

* What is a mathematical proof?
* What is a proposition?
* Logical connectives
* Truth tables of logical connectives
* Bitwise logical operations
* Proof by Truth Table
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)


#### Homework


* Read Chapter 1 of K. Rosen's [Discrete Mathematics and its Applications](http://highered.mheducation.com/sites/0073383090/information_center_view0/index.html). 
* Watch the recommended tutorial videos below.


### Class 2 & 3

* Proof by logical equivalences
* Predicate/Quantification logic
   - *Quantifier* expresses that some property is true for some (∃) or all (∀) choices that could be made.
* Rules of Inference
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

#### Homework

* Read 'Section 1.5 Nested Quantifiers' of K. Rosen's [Discrete Mathematics and its Applications](http://highered.mheducation.com/sites/0073383090/information_center_view0/index.html). 
* Read 'Section 1.6 Rules of Inference of K. Rosen's [Discrete Mathematics and its Applications](http://highered.mheducation.com/sites/0073383090/information_center_view0/index.html). 
* Determine whether this argument is valid.

> " *Superman were able and willing to prevent evil,
he would do so. If Superman were unable to prevent
evil, he would be impotent; if he were unwilling
to prevent evil, he would be malevolent. Superman
does not prevent evil. If Superman exists, he is neither
impotent nor malevolent. Therefore, Superman
does not exist*."

* Watch the tutorial session on conditionals: [Conditionals: Converse, Inverse, and Contrapositive](https://www.youtube.com/watch?v=p9VVi90n_48&index=10&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz). You should be able to distinguish Converse, Inverse, and Contrapositive forms. 


### Class 4

* Methods of Proof
* Review: A *proof* is an argument that demonstrates why a conclusion is true. Thus, a *mathematical proof* is an argument
that demonstrates why a mathematical statement is true.
* Direct Proof
* Proof by Contraposition (Indirect)
* Vacuous and Trivial Proof
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)


### Class 5

* Vacuous and Trivial Proof Review
* Homework Solution: "Superman does not exist!" Argument  
* Proof by Contradiction (Indirect)
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

### Class 6

* Proof by Equivalence
* Mathematical Induction
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)
* 

### Class 7

* Mathematical Induction
* Summation and Sequences (covered in ENGALG)
* Recursive definitions and Structural Induction
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

### Class 8 

* Recursive Algorithms
* Program Correctness
* Representation of Functions as Power series
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

### Interlude
* Brief Review
* Nested Quantifiers
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

### Class 9

* Sets and Set operations
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

### Quiz 1: February 19, 2016 (FRI) 1230-1430 HRS.; Venue: Section EK & EL at AG703; Section EQ at AG702
Coverage: Class 0 - Class 8

### Class 10
* Functions
* [Slide Presentation](https://docs.google.com/presentation/d/1OzJWPZaCS3Mugrj9mWqDz2k5C0vxi2xcRftrGBvdfho/edit?usp=sharing)

#### Homework

* Self-Study: Graph of Functions

### Class 11

* Introduction to Algorithms
- Finding the maximum
- Pseudocode
- Preconditions and Postconditions
- Properties of Algorithm
* [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismath-part2-2013)
* Or [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismathpart2)

### Class 12

* Searching Algorithms
- Linear Search
- Binary Search
* [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismath-part2-2013)
* Or [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismathpart2)

### Class 13

* Sorting Algorithms
- Bubble Sort
- Insertion Sort
* [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismath-part2-2013)
* Or [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismathpart2)

### Class 14

* Growth of Functions
* Algorithm Time Complexity
- Big-Omega and Big-Theta Notation
* [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismath-part2-2013)
* Or [Slide Presentation](http://www.slideshare.net/MelvinCabatuan1/dismathpart2)




## Departmental Quiz Shedule

* Quiz 1: February 19, 2016 (FRI) 1230-1430 HRS.; Venue: Section EK & EL at AG703; EQ at AG702
Coverage: Class 0 - Class 8

* Quiz 2: March 18, 2016 (FRI)  1230-1430 HRS. ; Venue: Venue: Section EK & EL at AG703; EQ at AG702
Coverage: Class 8 (Recursive Algorithms ONLY) - Class 14

* Quiz 3: April 1, 2016 (FRI) 1230-1430 HRS.   ; Venue: T.B.A.

Note: Any schedule conflict will be settled within the same date for the corresponding Quiz.


## Project Pairing Tips

* Three people is possible, but two works best
* Switch who's "driving" regularly

## Resources

### Required Reading

* [Discrete Mathematics and its Applications](http://highered.mheducation.com/sites/0073383090/information_center_view0/index.html). [ebook](http://www2.fiit.stuba.sk/~kvasnicka/Mathematics%20for%20Informatics/Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition.pdf)
* [Stanford, Mathematical Foundations of Computing](http://web.stanford.edu/class/cs103/)
* [MIT, Mathematics for Computer Science](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2005/index.htm)


### Interesting Reads:

* Laurie Abkemeier. Case Study: How I Got the Highest Grade in my Discrete Math Class (http://calnewport.com/blog/2008/11/25/case-study-how-i-got-the-highest-grade-in-my-discrete-math-class/, accessed February 17, 2016)
* David Patrick. Why Discrete Math Is Important. (http://artofproblemsolving.com/articles/discrete-math, accessed February 17, 2016)

### Recommended tutorial videos

* [Introduction to Logic](https://www.youtube.com/watch?v=paRt4R71d8s) - Definition, Connectives, and Compound Statements.
* [Truth tables of logical connectives](https://youtu.be/oKQrt6myHLQ?list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz) - Negation (NOT), Conjunction (AND), Disjunction (OR), Conditional (Implication), Biconditional (XNOR), and Exclusive-OR (XOR).     
* [Logical Equivalence and Proof by Truth Table](https://www.youtube.com/watch?v=UB9hPtB9dKA&index=8&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz)
* [Proof using Logic Laws](https://www.youtube.com/watch?v=_xjz99xHH8Q&index=9&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz) - Identity, Domination, Double Negation, DeMorgan's, Distributive, Absorption, Commutativity, Associativity, and Inverse laws.
* [Conditionals: Converse, Inverse, and Contrapositive](https://www.youtube.com/watch?v=p9VVi90n_48&index=10&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz) 
* [Predicate Logic/ Quantificational Logic with Negation](https://www.youtube.com/watch?v=XGeIynFIUHs&index=11&list=PLDDGPdw7e6Ag1EIznZ-m-qXu4XX3A0cIz) 


### Tools

* [MIT App Inventor](http://appinventor.mit.edu/explore/)
* sharing code snippets: [gist.github.com](https://gist.github.com/)
* asking questions: [Stack Overflow](http://stackoverflow.com/)

#### GitHub

* Git and GitHub
    * [Official GitHub Help](https://help.github.com/)
    * [Recommended resources](http://hackerhours.org/resources.html#github)
* GitHub Pages
    * [Official site](https://pages.github.com/)
    * [Thinkful guide](http://www.thinkful.com/learn/a-guide-to-using-github-pages/)


## Grading

* Quiz Equivalent (QE)   – 35%
* Finals Equivalent (FE) – 35%
* Project                - 25 %
* Assignments, class participation, etc. - 5 %
* Passing Grade          - 65 %

## Statements on Plagiarism

> "Plagiarism refers to the use of another's ideas, information, language, or writing, when done without proper acknowledgment of the original source." http://www.dlsu.edu.ph/library/webliography/subject/plagiarism.asp

> DLSU considers plagiarism a major offense subject to the following corrective measures and formative interventions:

* Probation for such time and under such conditions as the Student Discipline Formation Board (SDFB) or University Panel for Case Conference (UPCC) may determine <sup>1</sup>
* Suspension for such time and under such conditions as the SDFB or UPCC may determine.
* Dismissal 
* Expulsion

http://www.dlsu.edu.ph/offices/osa/_pdf/student-handbook.pdf 

<sup>1</sup> Conditions may include undergoing the Strengthening Attitudes through Values 
Enhancement & Development (SAVED) Program or Formation On Restructuring and 
Managing the Self (FORMS) Program; personal mentoring; rendering University service; 
attendance in relevant seminar/s or learning session/s; counseling; psychological and/or 
behavioral evaluation; drug testing, etc.

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" rel="dct:type">work</span> and all other materials under https://github.com/advanced-js are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

Original syllabus template source: https://github.com/advanced-js,  [Email: alf9@nyu.edu](mailto:alf9@nyu.edu) 
