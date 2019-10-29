---
title: Character Submission Instructions
permalink: /character-submission/
layout: single-post
---

So, you want to submit a character? That's great, I love seeing all high quality characters :D

At minimum you will have to submit a [Kisekae 2](http://pochi.lix.jp/k_kisekae2.html) image sequence, but likely you will want to submit some writing (name, story etc.) as well! This page details what you have to do.

(If you are looking to submit a non-kisekae character sequence, get in touch! My e-mail is gardamuse@gmail.com.)

### Gettings Started
* Read this document.
* Create three frames: High IQ / Medium IQ / Low IQ.
* Submit frames for initial feedback.
   * This includes making sure settings are correct so you don’t have to go back and redo everything later!
* Receive feedback and start work on sequence.
   * Make sure to keep kisekae saves of every frame!
* Submit sequence, character lines, story etc.
* Receive feedback and finalize submission.
* Done :)

### Submission Agreement

By submitting a character or other work, you agree to that it can be used on Blushing Defeat and in any application or material produced or published by Blushing Defeat or Gardamuse. You also agree to that your work may be changed in any way and that you do not have the right to demand the removal of your work.

You do however have the right the be included in or removed from any credits section in relation to your work. You also retain full rights to your own work.


### Technical Requirements

#### Major points
* Sequence length: at least 15 frames.
* Frames exported in maximum quality and size from Kisekae2. (Maximum size is 2000x1500 pixels.)
* Every frame should be a PNG image with transparent background. (Again, check your kisekae settings.)
* Every frame has to be named properly and in order.
   * The first image should be "00.png", the second "01.png" up to "18.png" or however many frames there are. Remember the leading zero. The first frame is the least bimbofied stage, and the last is the most bimbofied.
* Every frame should contain only one stage of the transformation and the character should be centred in frame.

#### Minor points
* If the character's head position varies greatly between frames, the character may not always be visible in profile picture boxes in applications that have those.
* If the character stretches arms/legs too wide, parts of them may be out of frame. That is okay, but be aware.
* I recommend you to save all frames as an animation in kisekae so that you can go back and change things in each frame. Mistakes are very hard to correct otherwise.


### When done
Create a zip archive containing the images (for example with a program like 7zip) and mail it to gardamuse@gmail.com.

---

### Design Principles
Characters with a strong "storyline" are more likely to be unique and interesting. Do also try to go with a story or archetype character that is different from any character already in the game. It is easy to fall into the "some kind of business person" trap but that doesn't make for a very fun character, or a diverse character pool.

Because of these things it can be a good idea to, before starting actual work on the character sequence, think of who that character is, and sketch out 3 main character nodes. One for maximum intelligence, one for the "average Joe", and one for the completely bimbofied. To demonstrate, below are two good examples of well planned characters for Bimbo Holdem Poker, sent to me by a fellow deviant.

#### _(Enlightened Being > Nun/Priestess > Demonic Being)_
_As a nun, she endeavors daily to learn all she can about God, and if she was smarter, maybe she could find the true answers behind the Bible and find enlightenment; becoming like an Angel on Earth.  If she should fall from her journey, the darkness is all too eager to pull her in and show her new meanings to life she would never have found in her holy texts._

Comment: This suggestion is based on the "Divine Bimbofication" flash transformation. That animation doesn't have a "nun" or "priestess" per se, but her path is spiritual either way she goes.  Might be a tad weird to have a red-skinned devil girl at the table, but then again, this casino is hardly normal either, so it kinda works out.


#### _(Wildlife Explorer > Animal Lover > Catgirl)_
_Some people really just love animals, and she is no different.  A veterinarian and lover of animals, she wants nothing more than to go to exotic places to study exotic creatures in person, but surviving in the wilderness is difficult for an untrained mind.  With a little more intelligence and cash, she can fulfill her dreams, or should she fail, become animalistic like those she wishes to study._

Comment: Super Mario's taking the blame for this one, thanks to the Cat Suit (although admittedly not as sexy as the average anime "catgirl", especially a bimbofied one). It also gives her a reason to try and grab the cash, since plane tickets to exotic locations can get expensive. Probably better to start as a girl though, because kitty.


### Writing
Writing for a character can be submitted as a JSON file (just a plain .txt file formatted in a particular manner). There are several properties. Below is a list of available properties, and below that an example of how a JSON file may look like.

* __name__ _(required)_ is just the identifier of your character and should be lower-case.
* __length__ _(required)_ is the number of frames in the transformation sequence.
* __names__ _(required)_ is a list of the character's names.
* __iq__ is a list of iq points at particular stages of the transformation.
* __jobs__ is a list of the character's job titles.
* __status__ is a list of the current status of the character.

Most list properties are optional but can be set if you want. These lists contain values that will be associated with your character at different points in the transformation sequence. At the start of the list are values associated with no bimbofication, and at the end are values associated with full bimbofication. Any list can be of three types: simple, advanced or mixed.

A __simple list__ is just a list of property values, like how in the example below `names` is just a list of names. Simple list values will be distributed equally over the sequence. So in the example, since there are 43 frames and 7 names, each name will be visible for about 43 / 7 ≈ 6 frames. "William" will be visible in frame 0, 1, 2, 3, 4 and 5, "William" in the next six and so on. "Vidette" will be used in the last six frames.

An __advanced list__ is a list where each entry has several properties itself. See `status` in the example. The `text` value is the actual value, and `start` and `end` are the frames where that value should be visible. So for `status`, we see that William should have status "Nominal." in frame 0 (the end frame number is not included). He should then have status "Restraining procedure started." in frame 1 and 2, and so on.

Finally __mixed list__ is a mix between simple and advanced. In such a list, some entrys can be advanced to specify that some frames should have a specific value of some properties. Other entries can be simple and will be equally distributed between the advanced entries.

Lists where the property value is a number, and not a text, such as for `iq`, works are mixed lists, except that for numbers you don't actually have to write the intermediate. In the example below, William will have IQ = 123 in frame 0 up to and including frame 9. In frame 15 he will have IQ = 115. Thus, in frame 10 up to and including frame 14, his IQ will linearly decrease from 123 to 115.

```
{
   "name": "william",
   "length": 43,
   "names": [
      "William",
      "Willian",
      "Willianne",
      "Willienne",
      "Williette",
      "Widette",
      "Vidette"
   ],
   "iq": [
      {
         "text": 123,
         "start": 0,
         "end": 10
      },
      {
         "text": 115,
         "start": 15,
         "end": 16
      },
      {
         "text": 105,
         "start": 25,
         "end": 26
      },
      {
         "text": 95,
         "start": 33,
         "end": 34
      },
      {
         "text": 88,
         "start": 35,
         "end": 36
      },
      {
         "text": 40,
         "start": 39,
         "end": 40
      }
   ],
   "jobs": [
      "Unemployed",
      {
         "text": "Prisoner",
         "start": 1,
         "end": 40
      },
      "Cuddle pet"
   ],
   "status": [
      {
         "text": "Nominal.",
         "start": 0,
         "end": 1
      },
      {
         "text": "Restraining procedure started.",
         "start": 1,
         "end": 3
      },
      {
         "text": "Clothing removal underway...",
         "start": 3,
         "end": 5
      },
      {
         "text": "Muscle reduction serum injected.",
         "start": 5,
         "end": 9
      },
      {
         "text": "Transforming reproductive organs...",
         "start": 9,
         "end": 15
      },
      {
         "text": "Applying physical feminization procedure...",
         "start": 15,
         "end": 26
      },
      {
         "text": "Supercharging hormone levels...",
         "start": 26,
         "end": 35
      },
      {
         "text": "Commencing memory reprogramming.",
         "start": 35,
         "end": 40
      },
      {
         "text": "Target has been rendered harmless, releasing...",
         "start": 40,
         "end": 41
      },
      "Bimbofication complete."
   ]
}
```
