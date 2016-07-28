# jQuery-Scroll-Trigger [Beta Version 0.2]

Really simple to use, After the simple setup tutorial by Github@Tommy.

- On desktop or notebook Mode, use mouse scroll or scrollpad to trigger event you want with 「Scroll Up」and 「Scroll Down」.

- On Device Mode, Just swipe 「Left」,「Right」,「Up」,「Down」to trigger event you wants. 

Download the pre-release 0.2 version to check it a demo usage.

Enjoy!

Welcome to post your issue or comment let me know. 
I will reply as soon as possible.

## Tested Environment ( Up to 28/7/2016 )
- (Mac OSX 10.11.5) Chrome ver. 52.0.2743.82
- (Mac OSX 10.11.5) Firefox ver. 47.01
- (Mac OSX 10.11.5) Safari ver. 9.1.1
- (iOS 9.3.3) Safari
- (Android 4.2.2) Chrome

## History
- 17/07/2015 (Added Swipe Function, Adjust Demo File)
- 13/07/2015 (Scroll Function)

## Installation
Download the js file and add the script into footer after jQuery Library.
```html
<script src="/path/to/scroll.js"></script>
```

## Usage
- Select a region you wants to trigger the scroll plugin. For example :
```html
<div class="YOUR REGION"> some content here </div>
```
- Trigger the plugin by your region
```html
$(function() {
    $('YOUR REGION').scrolltrigger({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        swipeMode       : true,
        swipeUp : function() {
            // Callback Function
        },
        swipeDown : function() {
            // Callback Function
        },
        swipeLeft : function() {
            // Callback Function
        },
        swipeRight : function() {
            // Callback Function
        },
        scrollUp : function() {
            // Callback Function
        },
        scrollDown : function() {
            // Callback Function
        }
    });
});
```
- Options (I think you know this meaning. HAHA)
```html
  lastAnimation
  quietPeriod
  animationTime
  swipeMode // Enable Swipe Mode on device

  swipeUp // Callback Function
  swipeDown // Callback Function
  swipeLeft // Callback Function
  swipeRight // Callback Function
  scrollUp // Callback Function
  scrollDown // Callback Function
```

## Author
[Tommy Chiu](https://github.com/tommychoo)
