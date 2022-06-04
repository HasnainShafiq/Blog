---
title: My WeatherAPI App
description: A short review of the building process of my weather application which benefits from WeatherAPI and the Unsplash API.
author: Hasnain Shafiq
date: 2022-05-20
tags: ["post", "featured"]
image: /assets/img/app-screenshot.png
imageAlt: A screenshot of my weather app.
---
#### **Contents**

* **Intro** **[\#](#intro)**
* **What went well** **[\#](#what-went-well)**
* **What I can improve on**  **[\#](#what-i-can-improve-on)**
* **Conclusion**  **[\#](#conclusion)**

#### **Intro** <a href="#intro" id="intro"> **\#** </a>

Welcome to a short review of my second complete [project](https://uncreative-creativity.github.io/weather-api/). This project was an attempt at demonstrating my back end capabilities, especially since this blog itself was largely focused on the front end. Despite being a relatively simple project which many aspiring junior web developers include as part of their portfolios, it served as a refresher of certain concepts which I had forgotten, given that I hadn't had much practice with the back end. Read on for my review of my take on the classic weather API application.

#### **What went well** <a href="#what-went-well" id="what-went-well"> **\#** </a>

As cliche as it may be, I believe we should always celebrate when we complete any of our goals. Particularly within the tech field, it is all too easy to disband a project before seeing it through to the end, so I am happy that I finished this project, and I did a good job of it. 

Moving on to the more technical aspects of the project, I found that I didn't struggle to recall the main concepts revolving around creating a `fetch` API. I was able to call two API's using `fetch` and retrieve their data in JSON format. After this, it was simple enough to either select pre-existing HTML elements in the DOM, or to create new DOM elements and assign values to them from the JSON object which was returned from the APIs. 

There are a couple other things I am pleased with, too. Sometimes, I fall into the trap of over thinking a solution and making it more complex than needs be. After setting up two basic `async` functions which called the [Unsplash API](https://unsplash.com/developers) and the [Weather API](https://www.weatherapi.com/) respectively, I wanted to make it so that the photo retrieved from the Unsplash API was representative of the weather conditions of the city which the user searched for. 

Initially, I thought I would have to create multiple `if...else` conditions which checked the temperature of the city and returned a photo based on the temperature. Using the Unsplash API `query` request parameter, I would hardcode a weather condition for each if statement, such as 'sunny' for weather above 25&deg;C, or 'cold' for temperatures below that. However, this process was arbitrary and too messy. 

Then, a random thought occurred to mind. I remembered that the Weather API returns some text describing the weather conditions, so I decided to store the weather condition data in a variable, which would be displayed in the DOM, as well as be used in the `query` parameter. Therefore, when I call `fetch` on the Unsplash API, I use a string template literal which looks like ``await fetch (`https://api.unsplash.com/photos/random?query=${condition}&client_id=MY_API_KEY`)``. The condition is based on the text returned by the Weather API which means that the photos correspond to the weather conditions for each city. 

A smaller victory is that I learnt about the `.substring` method which allows you to create smaller strings from an existing string. Originally, the Weather API returns the current date as year-month-day. However, I'm not used to this format, so I wanted to change it to day/month/year. After some searching, I came across the `.substring` method and used it to create `day`, `month`, and `year` variables, which I strung together into the day/month/year format. It's not particularly impressive, but I did learn about the `.substring` method and put it into use. 

Also, I was struggling to shrink the content on smaller screen widths. At around 300px screen width, some of the content was refusing to shrink. So I had to do some more searching and, eventually, I found out that [flex-items have a default](https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size) `min-width` of `auto`, which means that they do not shrink beyond this value. Overriding this and setting it to `min-width: 0;` fixed the issue and allowed the content to be displayed on smaller screen widths. 

#### **What I can improve on** <a href="#what-i-can-improve-on" id="what-i-can-improve-on"> **\#** </a>

In all honesty, given that this is a basic project with relatively little complexity, I don't think there is much to improve. However, I do have two potential additions I could make:

1. I could add a section which allows you to search for two cities and compare their weather data. However, I will need to research how to call an async function in another async function and use its data. 
2. I could add an autocomplete function which brings up a list of cities as the user is typing.

If I make either of these additions, you'll be sure to find an edit to this article. For now though, I am happy with how it has turned out.

#### **Conclusion** <a href="#conclusion" id="conclusion"> **\#** </a>

Building this weather application was a positive experience. It was a refresher of concepts which I had not put to use since learning them. In particular, it reinforced concepts revolving around using `fetch`, namely using `async/await`, handling promises, and accessing data from JSON objects to use in the DOM. While going through tutorials, I didn't see myself making use of the back end as much as the front end, but this experience has shown me a glimpse of the benefits of being able to navigate your way around the back end and manipulate data which you receive from APIs to create a vast range of applications. 