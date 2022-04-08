const phrases = {
    casual: {
        beginning: [
            "HTML escaping is a bit funny, but not much funnier than writing how to do it. Say I want to write the character",
            " in an HTML file. That's quite easy to do: I just write"
        ],
        middle: [
            [
                ". However, in order to write",
                ", I need to write"
            ],
            [
                ". But writing",
                " in turn requires using the following representation:"
            ],
            [
                ". Then again,",
                " should technically be written as"
            ],
            [
                ". This won't do if you want to be thorough, though, since",
                " should be escaped to"
            ],
            [
                ". But to correctly encode",
                ",",
                " should be used"
            ],
            [
                ". Whatever one thinks about",
                ", the job isn't done yet, because displaying that further necessitates using the string"
            ],
            [
                ". You might think you can wrap it up, but anyone paying attention will quickly realise that there's an obvious catch:",
                " itself is clearly in need of being escaped to"
            ],
            [
                ". But if writing",
                " was necessary to escape special characters, then it itself must be escaped to"
            ],
            [
                ", which doesn't look great on its own, but matters get worse when you realize that this",
                " itself must be escaped to an even more intimidating"
            ],

        ],
        end: ". And on and on it goes..."
    },

    // funny: {
    //     beginning: [
    //         "Man, did you ever think about how - if you'd want to escape every special character in HTML, which is considered best practice - your job would never be done? Just a neverending flurry of ampersands and semicolons? Pretty funny if you think about it. I mean say you start with",
    //         "- that's something you gotta escape to"
    //     ],
    //     middle: [
    //         [
    //             ". However, in order to write",
    //             ", I need to write"
    //         ],
    //         [
    //             ". But writing",
    //             " in turn requires using the following representation:"
    //         ],
    //         [
    //             ". Then again,",
    //             " should technically be written as"
    //         ],
    //         [
    //             ". This won't do if you want to be thorough, though, since",
    //             " should be escaped to"
    //         ],
    //         [
    //             ". But to correctly encode",
    //             ",",
    //             " should be used"
    //         ],
    //         [
    //             ". Whatever one thinks about",
    //             ", the job isn't done yet, because displaying that further necessitates using the string"
    //         ],
    //         [
    //             ". You might think you can wrap it up, but anyone paying attention will quickly realise that there's an obvious catch:",
    //             " itself is clearly in need of being escaped to"
    //         ],
    //         [
    //             ". But if writing",
    //             " was necessary to escape special characters, then it itself must be escaped to"
    //         ],
    //         [
    //             ", which doesn't look great on its own, but matters get worse when you realize that this",
    //             " itself must be escaped to an even more intimidating"
    //         ],

    //     ],
    //     end: ". And on and on it goes..."
    // },

    pissed: {
        beginning: [
            "Best practice, my ass. Who even comes up with this crap? Has any such wise-guy ever even considered the idiotic implications of escaping EVERY SINGLE special character relevant to HTML?! No way they did. I mean look, say I want to show",
            "in an HTML element - that's something I should escape to",
            ", right? But look, in my bloody case that's only the beginning"
        ],
        middle: [
            [
                "! If I want to include that in my HTML file, then I'm shit out of luck, because to \"correctly\" include",
                " in line with \"best practices\", I should write",
                " for the satisfaction of some bunch of useless self-appointed dev gurus who think this practice is - the audacity of this claim - \"best\""
            ],
            [
                "! As if that wasn't enough, the moronic",
                " should now be written as",
                " - you know, to \"avoid possible issues\". And what, my skyrocketing blood pressure isn't an issue?"
            ],
            [
                "! Now, since I've foolishly committed to displaying on the page how characters are being escaped for the doubtful pleasure of the unfortunate bastard who happens to be reading this, it is now apparently my duty to take",
                " and escape it to"
            ],
            [
                "! But noooooo, that's still not enough to be fully correct now, isn't it? No, unfortunate son of a bitch, now you have to take",
                " and write it as"
            ],
            [
                "! I wish this was the end, but that just makes me a bloody fool for wishing it. The bane of my existence",
                ",",
                " should be used"
            ],
            [
                "! Now apparently I'm supposed to take the already ugly",
                "and further uglify it by escaping to the even uglier",
                ", like what the hell?"
            ],
            [
                "! I swear, I have never felt more loathing than I'm now feeling for this cursed",
                " since all I can see is a hideous string in need of further escaping to"
            ],
            [
                "! My blood is already boiling at this point, but clearly that is not enough for the gods of \"best practice\", who now demand from me the vile ritual of further mutilating",
                " into the even more abhorrent abomination which is"
            ],
            [
                "! It gets worse! And shame on me for not anticipating this! I was doomed from the moment I embarked on this cursed voyage of following the soul-sucking \"best practice\" and now my foolish endeavour has brought me to this: yet again, I need to do the bloody useless work of escaping HTML characters. The fact that",
                " is longer than the previous string only adds insult to injury. But not as much as its pointlessly escaped child, the bastard"
            ],

        ],
        end: "! And this insanity just goes on and on! Well you know what?! You can take your \"best practices\" and shove them up your ass. I'm done. I'm switching to being a military engineer for a less frustrating line of work."
    }
}

export default phrases;