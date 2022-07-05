---
title: My Reflection Diary App
description: 'A brief overview of my latest project: A full CRUD reflection diary app which uses RESTful routes.'
author: Hasnain Shafiq
date: 2022-07-05
tags: ["post", "featured"]
image: /assets/img/reflections-app-blog-cover.jpg
imageAlt: The Reflections application logo.
---
#### **Contents**

* **Intro** **[\#](#intro)**
* **The build process** **[\#](#the-build-process)**
* **Next steps**  **[\#](#next-steps)**

#### **Intro** <a href="#intro" id="intro"> **\#** </a>

Hello! It has been a while since my last blog post which was about my weather API application. Since then, I have finished my degree and I enjoyed a short break from coding. However, I am back and have another project to share with you. My latest project is a reflection diary app, inspired by Presently. At the moment, the minimal viable product is almost complete. However, without user authentication, the app runs into problems. Therefore, I am in the process of learning about authentication and related concepts, in the hopes that I will soon be able to implement it in my own project and deploy my project as soon as possible.  

#### **The build process** <a href="#the-build-process" id="the-build-process"> **\#** </a>

I built this app using Mongo Atlas, Express, EJS, and vanilla JavaScript. The first step of building this project was having a plan in mind of what functions the app would perform and how. Therefore, the first step was setting up my schema and model in Mongo. 

<pre><code><span>models/reflection.js</span>

const ReflectionSchema = new schema({
    prompt: String,
    body: String,
})

const Reflection = mongoose.model('Reflection', ReflectionSchema);
</code></pre>

Once I confirmed that my model was working and I was able to perform Mongo functions, such as `.find({})` and `.save()`, I moved onto setting up the routing for for my Express server. 

I set up `GET`, `POST`, `PUT`, and `DELETE` routes which were used to send requests to the server to send and receive data. For example, sending a `GET` request to `/new` will render `new.ejs`, a page allowing the user to add a new reflection entry. Clicking 'save' sends a `POST` request to the index page and saves the entry to the Mongo Atlas database. You can't send `PUT` and `DELETE` requests in HTML forms, so I made use of the 'method-override' middleware in order to send these two type of requests to the server. 

<img src="/assets/img/ezgif.com-gif-maker.gif" alt="A gif demonstrating adding a new post" title="A gif demonstrating adding a new post"/>

Once I was happy with the routing and had confirmed that my Mongo Atlas cluster was connected to my Express app, I used EJS to flesh out the user interface. I created a basic boilerplate which was shared by all `.ejs` files. The site uses minimal JS to apply some styles when a button is clicked and to show a modal asking for confirmation when the user wants to delete a post. 

<img src="/assets/img/ezgif.com-gif-maker(2).gif" alt="A gif demonstrating deleting a post" title="A gif demonstrating deleting a post"/>

Finally, I used CSS to make the site more presentable. It isn't the cleanest nor the most aesthetic design, but considering I struggled to think of a suitable theme for this project, I am glad I was able to keep it minimalist while still looking presentable. 

#### **Next steps** <a href="#next-steps" id="next-steps"> **\#** </a>

My main goal is to learn about and implement user authentication within this project. When I planned my project, I wanted to make something which would challenge me and force me to learn new concepts. Seeing as this was my first project which made use of Mongo and Express without following any tutorials, I feel like I have been adequately challenged. I ran into my fair share of troubles which meant that I had to find out what went wrong, why it went wrong, and how to fix it. For the most part, it was enjoyable and I found it to be a very good learning experience, but I still have a bit more learning to do. Once I have succesfully implemented user authentication, my app will be ready for deployment! 
