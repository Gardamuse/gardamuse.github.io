---
categories: blog

title:  "Mod Repository"
date:   2022-05-21
author: Gardamuse
---

It's been a problem that there isn't a proper way of sharing mods for Ditzy Dice. The existing solutions either don't accept mods for erotic games, or they are basically just forums with a, in my opinion, non-optimal browsing experience. How to solve this?

Up until now, Blushing Defeat has been a static website. This means that it runs on a "dumb" web server, which is only able to serve static files, but can't run any custom code. This means that the website will always look the same for all users, and any code is run directly in your browser, rather than on the server. This is fine for a lot of things, but it means that there can't be user accounts, or any other more interactive features that allow users to send stuff to the server. For things like comments, this has to be worked around by using a third-party plugin and their servers, which is what Disqus is. 

Setting up my own, proper backend server seemed like a lot of work though, so I was justifiably hesitant, but the more I thought about it, the more I felt it was a step I've been wanting to take for a long time. So, I decided that to solve the mod sharing issue, I would commit to the most difficult and time-consuming solution possible: to set up a Blushing Defeat backend and my own mod sharing service. Which is what I've done.

Thus, the [**Blushing Defeat Sexy Mods**](https://mods.blushingdefeat.com/) repository is now available. It is of course very beta, and quite bare bones, but to be able to move forward I need to see how it runs in practice so that I can get feedback on which things are the most important to focus on.

For modders, the site allows a maximum upload size of 30MB. I consider this to be the maximum size a Ditzy Dice mod could reasonably be IF all included images are optimized properly, which they should be. This is quite important for players as all loaded mods are stored in the browser, but browsers have varying limits on how much each website can store, which means that players run a higher risk of encountering problems the bigger the total size of their loaded mods are.

Many images can be optimized to be 100kB or less, with little to no visible compression. Therefore my recommendation is to convert images to WEBP with 90% quality at 600x600 pixels resolution. This can often be done by simply re-saving them in a new format from a photo editor (though this depends on the program, make sure to actually look at the file sizes to see if it improves), I can recommend [Krita](https://krita.org/en/). Animated webp can be a bit more difficult, but you can always use an online tool like [EZGIF](https://ezgif.com/optiwebp). Alternatively, if you are comfortable with or would like to try command line tools, [ImageMagick](https://imagemagick.org/index.php) or [FFmpeg](https://ffmpeg.org/) can be useful for easily converting many images.

So yeah, let me know if you encounter any problems, and let's see how this holds up :)