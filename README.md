This was an idea I had a couple months ago- back when I still had classes- but never really had the time to realize until recently.

Remember [Wordle](https://www.nytimes.com/games/wordle/index.html), the uber-popular word game the blew up a while back and eventually got bought out by the New York Times? This is an app I made to "help with" (read: almost completely trivialize) it.

You can access it at http://Cryothermus.github.io/wordle-solver

It should hopefully be fairly straightforward to use- just type in the characters you have correct, the ones you have misplaced, and the ones that aren't in the answer, and you'll get a list of all possible answers that meet that criteria. It saves *a lot* of time that would otherwise be spent racking your brain or searching through word lists.

## Features

- Search all possible Wordle answers based on the positioning and presence (or lack thereof) of different letters.
- Typo-proof text boxes- each letter can only appear once in either the "misplaced" or "wrong" text boxes, to prevent impossible inputs.
- ...That's kinda it, to be honest. Not sure what else you could want without making the UI a total circus.

## Why did you make this?

A reasonable question, since there are *many* similar tools already available online.

I mostly made this because I graduated back in May 2022 and didn't have a job lined up by then, so I started working on this to sharpen up my (admittedly fairly rusty) React skills and prevent my brain from turning to mush. Also, pretty much everyone is out of town and it's too hot to go outside, which means this project was more or less the only thing I had going on in my life for the past month or so.

## Credits

Made using ReactJS 18.1.0 and Material UI 5.8.4.

Also credits to Josh Wardle (Wordle creator) and the New York Times (current Wordle owner) for being the whole reason this thing exists.
