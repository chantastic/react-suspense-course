# Build an App with React Suspense, Hooks, and Context

👋 Hi!

Welcome to this course on React Suspense.  
Here we'll cover the `Suspense` component and it's impact on component authoring, organization, and rendering.

If you have questions, hit me up on twitter — [@chantastic](https://twitter.com/chantastic) — or via email (in my [Github bio](https://github.com/chantastic/)).

## WARNING!!!

What we'll cover here is not "stable" React API.  
It will likely change.
In fact, many features that I used to teach have been removed and no replacement has been set.
I suspect that things will stabilize by React Conf 2019 on October 24th.

## Who is this for?

This is an advanced course in React.  
I assume that you've built applications in React.

You could absolutely follow this tutorial with no React experience.  
However, the patterns I'll demonstrate here won't feel necessary unless you've worked in a complex codebase.

The goal of this course isn't to teach React from scratch  
But demonstrate how thinking in Suspense will change your components and organizational structures.

## Why should you care?

Suspense is going to change everything about the way you interact with data.  
It also changes everything about the way you control visual transitions between waiting and loaded states.

Those capabilities come with some pretty drastic changes to the way React renders components and the way you will organize and compose components.

## What's the goal of this course?

My goal is that you walk into Suspense with some good practices under your belt.  
We'll start with an introduction to the basics of Suspense.  
I'll show you how I like to author views and organize components in an application that uses Suspense.  
We'll close with general component design and organization that I think will help you, regardless of Suspense.

## Installation and usage

This is a standard `create-react-app` application.

- Clone the repo
- CD into the project directory (`react-suspense-course` by default)
- Run `yarn` to install the deps
- Run `yarn start` to start a development server

## Course organization

- `/lessons` are all lessons live
- lessons are chronological
- each lesson has a `README.md` with a lesson description and assignment
- every lesson is the solution to the lesson before it
- `reference` is a completed application with everything in place

© 2019 Michael Chan

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
