# React Updating State Lab

## Overview
In this lab, you'll update state using `setState()`.

## World record click counter
![Oldtimer stuff](http://il5.picdn.net/shutterstock/videos/15633112/thumb/1.jpg)

We got a new job! Woo! This time, we're a judge for the Guinness World Records. We're no ordinary judge, however — we're a _modern day_ judge. We do things using _computers_. Instead of using those old, clunky clickity-things to count stuff for world records, we'll write our very own digital clicker!

1. In the `components/DigitalClicker.js` file, create a `DigitalClicker` React component.
2. This component has an initial state property called `timesClicked`, which is initially defined as 0.
3. The component renders out a button with a label that shows the `timesClicked` value. This means that, at the start, your button should just say `0`.
4. Whenever the button is clicked, update the state by incrementing the `timesClicked` by 1.

## Debugging YouTube
![Spock](https://media.giphy.com/media/fECTyvPYevOHC/giphy.gif)

You can only count so many jumps, hula-hoop rotations, and hot dogs being devoured before you go insane. Time to move on from our record judge job to greener pastures! Not to worry, we've secured ourselves a gig at YouTube this time! Our first task is to create some sort of debug bar that allows us to control the simulated network conditions on YouTube. Among other things, we can change our resolution, the bitrate of the videos, the audio quality, and so on.

1. In the `components/YouTubeDebugger.js` file, create a `YouTubeDebugger` React component.
2. This component has several state properties. The initial state shape looks like this:
  ```js
  {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
  ```
3. Create a button with the class `'bitrate'`. Clicking this button changes the `settings.bitrate` state property to `12`.
4. Create a button with the class `'resolution'`. Clicking this button changes the `settings.video.resolution` state property to `'720p'`.

***Note: the classes are added to make testing your solution a little easier.***

## Resources
- [React: `setState`](https://facebook.github.io/react/docs/component-api.html#setstate)
