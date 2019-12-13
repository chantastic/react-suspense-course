# Build an App with React Suspense

Welcome!

We're going to have a great time exploring React's experimental Concurrent Mode.  
Concurrent Mode is an exciting leap forward in user interface development.  
It allows us to describe user interface transitions in beautiful detail.

Apps aren't static.  
They move — responding to user input as they dart back and forth to the internet for data. Concurrent Mode and Suspense give us a language for those movements.

In this workshop we talk project setup, finding help, and what to expect from this very exciting — very experimental — feature.

This course is narrowly focused on Concurrent Mode and Suspense.  
We will not cover adjacent topics like styling or code organization.

## On Egghead

This course is available to egghead.io members or as a standalone course for \$99.

[Buy the course or membership here](https://egghead.io/courses/build-an-app-with-react-suspense?af=1x80ad)

## Contact

If you have questions, hit me up on twitter — [@chantastic](https://twitter.com/chantastic) — or via email (in my [Github bio](https://github.com/chantastic/)).

## WARNING!!!

What we'll cover here is not "stable" React API.  
It will likely change.

## Who is this for?

This is an advanced React course.  
I assume that you've built applications in React.

You could absolutely follow this tutorial with no React experience.  
However, the patterns I'll demonstrate here won't feel necessary unless you've worked in a complex codebase.

The goal of this course isn't to teach React from scratch  
But to showcase this glimpse of the future we have from React.

## Why should you care?

Suspense will change the way you interact with data.  
It also changes the way you control visual transitions between pending and loaded states.

## What's the goal of this course?

My goal is that you walk into Suspense with a good understanding of the underlying principles.  
We'll start with an introduction to the basics of Suspense.  
We'll close with general component design and organization that I think will help you, regardless of Suspense.

## Installation and usage

This is a standard `create-react-app` application.

- Clone the repo
- CD into the project directory (`react-suspense-course` by default)
- Run `yarn` to install the deps
- Run `yarn start` to start a development server

## Course organization

- `src/index` is the main app
  - Change lessons by changing the imported directory
- `src/lessons/` are all the workshop lessons
  - lessons are chronological
  - each lesson has a `README.md` with a lesson description and assignment
  - the solution to each lesson is the next lesson
- `complete` is the completed application with everything in place

© 2019 Michael Chan

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
