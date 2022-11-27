const phrases = {
  casual: {
    beginning: [
      "For special characters, especially those relevant to HTML, the best practice seems to be to always escape them, just to avoid any mistakes. Sounds fair. Although as it happens, this can lead to funny situations. What do I mean? Well, say I want to write the character",
      " in the HTML of this page. That's quite easy to do: I just write",
    ],
    middle: [
      [". However, in order to write", ", I need to write"],
      [
        ". But writing",
        " would in turn - according to best practices - require using the following representation:",
      ],
      [
        ". Then again,",
        " should technically be written as",
        "just to be on the safe side",
      ],
      [
        ". This won't do if you want to be really thorough, though, since",
        " should technically be escaped to",
      ],
      [". But to correctly encode", ",", " should be used"],
      [
        ". Whatever one thinks of",
        ", it can't really be left at that, because wanting to show that in HTML further calls for escaping to",
      ],
      [
        ". You might think you can wrap it up here, but if you've been paying attention you'll quickly realise that there's an obvious catch:",
        " itself is clearly in need of being escaped to",
      ],
      [
        ". But if writing",
        " was necessary to escape special characters, then it itself is not free from this necessity. Therefore, it also must be escaped to",
      ],
      [
        ", which doesn't look too pretty on its own, but matters get worse when you realize that",
        " itself should be encoded properly - resulting in an even more intimidating",
      ],
    ],
    end: ". And as you can see, it never ends. But lets stop it here - I bet we both have work to do.",
  },

  annoyed: {
    beginning: [
      "To be completely honest, it's a bit frustrating. I've been told that the best practice - and in some cases, it's a necessity - I should follow is to escape each special character to HTML. Frankly, it seems overkill, especially when I found myself in my current predicament. Look, all I had to do was to represent",
      "as HTML. Well instead of just writing it and calling it a day, I need to escape it to",
      ". But get this - that second part turns out to be just the beginning of my problems",
    ],
    middle: [
      [
        "! To be consistent - and for some dumb reason I want to be - now I need to take the",
        "and once again escape it to",
      ],
      [
        "! Thing is, it can't end there, can it? You're catching on, right? The escaped string",
        " in turn requires - NATURALLY - yet another escaping, resulting in the even longer",
      ],
      [
        "! And I kid you not, as soon as I see it, I find myself gnashing my teeth. Because guess what? I should escape that too! Apparently",
        " is not good enough, and I haven't wasted enough time and space here yet. No, we need to go deeper and dumber and escape the whole ugly thing to",
      ],
      [
        "! And even now it's not enough. I really wish I was joking, but just take a look:",
        "... you see it, right? All those special characters that should be escaped? They just can't be ignored, those little stinkers. Again I need to do my - apparent - duty and represent it in the following way:",
      ],
      [
        "! Should be good to call it a day, no? Well think again. I'm literally stuck here.",
        " can't be left as is, right? No, obviously it needs to be further escaped to become",
        ", honestly the ugliest thing I've ever seen - so far, at least",
      ],
      [
        "! And you think this is long? Boy, do I have news for you. This is nothing. Nothing, that is, if you consider for a moment what I've been considering ever since I started typing this - that this yet again needs escaping. So",
        " will get further elongated into the absolutely ridiculous",
      ],
      [
        "! Will it ever end? Honestly, I've lost hope. I feel like screaming, cause",
        " needs to become",
        " now - oh joy",
      ],
      [
        "! You can't even imagine how annoyed I am at this point. I really just want to drop this and go do something - anything - else. And yet the ghost of best-practice is still haunting me, demanding that",
        " is further escaped to",
        '. You know. "Just in case"',
      ],
      [
        "! And even now I can't rest. No, not yet. I need to take this dumb",
        " and again - mustering all the patience I still have left at this point (and trust me, it's nearly non-existent by now) - encode it as follows:",
      ],
    ],
    end: "! And it literally keeps going on and on and on and on until apparently I lose my mind. I've had enough. I give up. I'm leaving this mess for you to do whatever you want with it - I have a life to live. Goodbye!",
  },

  overReacting: {
    beginning: [
      'Best practice... yeah, right. Who even comes up with this nonsense?! Has any such "best-practice" wise-guy ever even considered the idiotic implications of escaping EVERY SINGLE special character relevant to HTML?! No way they did. I mean look, say I want to show',
      "in an HTML element - that's something I should escape to",
      ", right?! But look, in my case that's only the beginning",
    ],
    middle: [
      [
        '!! If I want to show this example of escaping special characters in my HTML file, then I\'m just out of luck, because to "correctly" include',
        ' in line with "best practices", I should write',
        ' for the satisfaction of some bunch of self-appointed dev gurus who think this practice is - the audacity of this claim - "best"',
      ],
      [
        "!! As if that wasn't enough, the already-absurd-looking",
        " should now be written as",
        ' - you know, to "avoid possible issues". And what, my skyrocketing blood pressure isn\'t an issue?',
      ],
      [
        "!! Now, since I've foolishly committed to displaying on the page how characters get escaped for the doubtful pleasure of the unfortunate soul who will happen to be reading this, it is now apparently my duty to take",
        " and escape it to",
      ],
      [
        "!! But noooooo, that's still not enough to be fully correct now, isn't it?! No, you fool, now you have to take",
        " and write it as",
      ],
      [
        "!! I wish this was the end, but that just makes me a naive dork for wishing this wish. The bane of my existence",
        ",",
        " should be used",
      ],
      [
        "!! Now apparently I'm supposed to take the already ugly",
        "and further uglify it by escaping to the even uglier",
        ", like what the heck?",
      ],
      [
        "!! I swear, I have never felt more loathing than I'm now feeling for this cursed",
        " since all I can see is a hideous string in need of further escaping to",
      ],
      [
        '!! My blood is already boiling at this point, but clearly that is not enough for the gods of "best practice", who now demand from me the vile ritual of further mutilating',
        " into the even more abhorrent abomination which is",
      ],
      [
        '!! It gets worse!! And shame on me for not anticipating this!! I was doomed from the moment I embarked on this cursed voyage of following the soul-sucking "best practice" and now my foolish endeavour has brought me to this: yet again, I need to do the completely useless work of escaping HTML characters. The fact that',
        " is longer than the previous string only adds insult to injury. But not as much as its pointlessly escaped child, the bastard",
      ],
    ],
    end: "!! And this insanity just goes on and on!! Well you know what?! You can take your \"best practices\" and shove them where the sun don't shine. I'm done. I'm switching to being a combat engineer for a less stressful line of work.",
  },
};

export default phrases;
