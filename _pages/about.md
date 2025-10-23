---
permalink: /
# permalink: /about/
title: "About me"
date: 2025-10-23 00:00:00 +0000
category: random
---

<blockquote id="quote" style="display: none;">
  <span>SPAN_TEXT_HERE</span>
  <cite>CITE_TEXT_HERE</cite>
</blockquote>

## Welcome!

I'm Sebastian Ovide, a seasoned technology leader and an engineer at heart, passionate about solving problems with technology. Over the years, I’ve built and led high-performing, cross-functional teams, always balancing Agile and lean startup principles to fit the needs of the company and its stage.

My leadership style is that of an enabler and a multiplier. I lead by developing engineers and new leaders, clearing obstacles, and optimising delivery processes. I use my deep technical background to guide architectural decisions and mentor my teams, ensuring we build resilient, high-performing systems that align directly with business goals

## A Bit of History

This site contains some very old blog posts that I keep for nostalgia. While much has changed since I first wrote them, they still reflect my passion for lean principles, pragmatic problem-solving, and startup culture. Feel free to browse, but keep in mind that some views or technical choices might be a bit outdated!

If you'd like to connect, feel free to reach out via LinkedIn.

<script>
  console.log("Script loaded.");
  var quotes = [
    {
      "quote": "Everything should be made as simple as possible, but not simpler",
      "author" : "Albert Einstein"
    },
    {
      "quote": "If you can't explain it to a six year old, you don't understand it yourself",
      "author" : "Albert Einstein"
    },
    {
      "quote": "Simplicity is prerequisite for reliability",
      "author" : "Edsger Dijkstra"
    },
    {
      "quote": "Build-Measure-Learn feedback loop is at the core of the Lean Startup model",
      "author" : "Eric Ries"
    },
    {
      "quote": "As you consider building your own minimum viable product, let this simple rule suffice: remove any feature, process, or effort that does not contribute directly to the learning you seek",
      "author" : "Eric Ries"
    },
    {
      "quote": "Simplicity is the ultimate sophistication",
      "author" : "Leonardo da Vinci"
    },
    {
      "quote": "I'm as proud of many of the things we haven't done as the things we have done. Innovation is saying no to a thousand things",
      "author" : "Steve Jobs"
    },
    {
      "quote": "Great things in business are never done by one person. They're done by a team of people.",
      "author" : "Steve Jobs"
    },
    {
      "quote": "Leadership is not about being in charge. It is about taking care of those in your charge.",
      "author" : "Simon Sinek"
    },
    {
      "quote": "Trust is the foundation of real teamwork.",
      "author" : "Patrick Lencioni"
    },
    {
      "quote": "Individuals and interactions over processes and tools.",
      "author" : "Agile Manifesto"
    },
    {
      "quote": "If you can't describe what you are doing as a process, you don't know what you're doing.",
      "author" : "W. Edwards Deming"
    },
    {
      "quote": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
      "author" : "Antoine de Saint-Exupéry"
    }
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteElement = document.getElementById("quote");
  const quoteSpan = quoteElement.querySelector("span"); 
  const quoteCite = quoteElement.querySelector("cite");

  // Update the content of the elements
  quoteSpan.textContent = quote.quote;
  quoteCite.textContent = quote.author;
  console.log("Quote updated.");
  quoteElement.style.display = "block";
  console.log("Quote displayed.");
</script>
