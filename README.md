# Scroll-Trigger [Beta Version]

A mini tool to detect mouse scroll wheel to trigger event you want!

Welcome to post your issue or comment let me know.

## Installation
Download the js file and add the script into footer after jQuery Library.
```html
<script src="/path/to/scroll.js"></script>
```

## Usage
Very simple to use,
- Select a region you wants to trigger the scroll plugin. For example :
```html
<div class="YOUR REGION"> some content here </div>
```
- Trigger the plugin by your region
```html
$(function() {
    $('YOUR REGION').scroll({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        ScrollUp : function() {
            //Callback Function
        },
        ScrollDown : function() {
            //Callback Function
        }
    });
});
```
- Options (I think you know this meaning. HAHA)
```html
  lastAnimation
  quietPeriod
  animationTime
```

## Author
[Tommy Chiu](https://github.com/tommychoo)
