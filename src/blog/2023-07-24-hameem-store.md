---
title: 'Hameem BJJ: A fullstack React ecommerce project.'
description: 'A short piece detailing my experience building a fullstack React ecommerce website.'
author: Hasnain Shafiq
date: 2023-07-24
tags: ["post", "featured"]
image: /assets/img/HAMEEM-min.jpg
imageAlt: The 'Hameem' logo.
---
#### **Contents**

* **Intro** **[\#](#intro)**
* **The Process** **[\#](#the-process)**
  * **Getting Started** **[\#](#getting-started)**
  * **React Router** **[\#](#react-router)**
  * **Firestore DB & Authentication** **[\#](#firestore)**
  * **React Context** **[\#](#react-context)**
  * **Designing the UI** **[\#](#designing-the-UI)**
* **Conclusion** **[\#](#conclusion)**

#### **Intro** <a href="#intro" id="intro"> **\#** </a>

For the past couple months, I have been working on my most challenging project to date: an ecommerce store built with React. Even though I have been following along with a [comprehensive course](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) by Andrei Neagoie and Yihua Zhang, building the site has been a steep learning curve. I’ve had to familiarise myself not only with React-related concepts such as the importance of immutability, react hooks, and useContext, but I have also had to get to grips with using the Firestore database and authentication tools, and setting up routing with react-router.

In this piece, I want to discuss the process from start to the present moment and share lessons I learned along the way.

#### **The Process** <a href="#the-process" id="the-process"> **\#** </a>

#### **Getting Started** <a href="#getting-started" id="getting-started"> **\#** </a>

Before starting the course, I brainstormed a few ideas regarding what sort of store I would like to build. Eventually, I settled on making a mock store for my local jiu-jitsu gym. After viewing the product that would be produced by the end of the course, I realised that, unless I built something personal to me, I would have a hard time seeing the course through to the end. Simply put, as a frontend developer, I wasn’t too keen on the design of the instructor’s finished product. As a result, I challenged myself to design a UI for my jiu-jitsu ecommerce website which is visually appealing and consistent in its design. 

#### **React Router**  <a href="#react-router" id="react-router"> **\#** </a>

Having decided upon the theme of the website, I began working through the course. Early on, I was exposed to react-router and used it to build the routes for the different pages. I struggled a bit at this point because I was using a later version of react-router compared to the instructor. After installing react-router, I followed the tutorial to set up basic routing using createBrowserRouter to create an array of routes.

However, when I returned to the course, I saw that the instructor had used JSX `<Routes>` and `<Route>` elements. Another difference was that in his `index.js`, the instructor had wrapped the `<App />` component within a `<BrowserRouter>` component, whereas the method demonstrated in the react-router tutorial replaced the `<App />` component in `main.jsx` with a `<RouterProvider />` component. 

I was between two minds: I could make my life easy and rollback my react-router to the same version as the instructor’s or I could continue as it was and try to troubleshoot any problems as and when they cropped up. After confirming that my website was working as it should, I decided on the latter and continued on with the course. Thankfully, I didn’t run into any major issues.

#### **Firestore DB & Authentication**  <a href="#firestore" id="firestore"> **\#** </a>

This was perhaps the most arduous part of the development process. It made me realise that, even though I can work with databases to get the job done, I’m not a database kind of person. Learning about how to set up and create collections and documents with Firestore and how to set up an auth-flow for Google sign-in was a long and dry process. Although I didn’t enjoy this part of the course, I was happy knowing that I had understood the process of how to use the firebase utilities within different parts of my project to enable registration and authentication, as well as how to leverage firestore functions to save docs to the database. 

#### **React Context**  <a href="#react-context" id="react-context"> **\#** </a>

After designing the UI, I enjoyed working with React Context the most. I liked being able to create the state as well as writing the logic for state-updating functions in one file which could then be imported into the relevant components and used to update the state of that particular part of the app. For example, I make use of a cart context, where I track which items are in the cart. If there are no items, the cart shows a short message which says that the cart is empty. However, when an item is added, the cart begins displaying the products and a button which takes you to the checkout page. I understand that react context has its pros and cons, so I look forward to learning about proper state-management libraries like redux and redux-toolkit. 

#### **Designing the UI**  <a href="#designing-the-UI" id="designing-the-UI"> **\#** </a>

Before I delve into the design process, I would like to acknowledge that I am not a UI/UX designer. I would describe myself as a frontend developer with an openness to further exploring UI/UX design. 

Designing the UI was an iterative process and something which I often returned to (and still return to - I have a long way to go until the website is complete!). When I was stressed out because my code wasn’t working as intended or I was struggling to fix a bug, I would see what improvements I could instead make to the UI. 

I began the design process by creating a moodboard of design inspirations gathered from numerous sites like Dribble, Behance, and Lapa.ninja. After gathering an adequate number of pages, I began commenting on what I liked about each page. After that, I began to make a ‘frankenstein wireframe’ for the homepage - I stitched together the different pages starting with the hero section all the way to the footer to create a complete homepage design. With my comments attached to each page, I had a much clearer idea in mind of the colour scheme, font styles, and overall theme of my website. 

Then, I began fleshing out my design. I messed around with the colour scheme and fonts until I settled on a design I felt represented the brand theme I was aiming to achieve. Along the way, I also researched UI design principles and came across the 4-point grid system. This has helped me immensely in maintaining a consistent design throughout the site. Essentially, elements are spaced out in increments of four, so elements closer together may be separated by 4px while an unrelated section is separated by a margin of 8px, for example. Not only has it helped me with my current project, it has also helped me identify inconsistencies within previous projects where I was using margins of varying sizes.

Although I am happy with how my site currently looks, I ran into a few hiccups along the way. Namely, I downloaded a custom font which was bold and added more personality to my site. However, I realised too late that custom fonts have to be loaded differently to Google fonts - with Google fonts you simply copy and paste the generated link and use the fonts as you wish. 

I only realised this when I deployed the site for the first time - I saw that a base sans font had been loaded in place of the custom font I had displayed on my localhost. Since I was in a rush to have an MVP deployed, I found a similar Google font and used that instead. However, I intend to return to it later so that I can actually load the font which I had initially decided upon. 

#### **Conclusion** <a href="#conclusion" id="conclusion"> **\#** </a>

I have benefitted greatly from working on this project. It has been a golden opportunity to sharpen up my React skills in addition to getting to grips with new technologies. I have also thoroughly enjoyed designing and implementing the UI for the site. Although the site is now live, I still have a long way to go until the site is complete and fully furnished. I hope it’s not too long before I type up my next article about my experience creating a fully-fledged React ecommerce store. 