const phrases = {
    casual: {
        start: [
            "HTML escaping is a bit funny, but not much funnier than writing how to do it. Say I want to write the character ",
            " in an HTML file. That's quite easy to do: I just write "
        ],
        middle: [
            [
                ". However, in order to write ",
                ", I need to write "
            ],
            [
                ". But writing ",
                " in turn requires using the following representation: "
            ],
            [
                ". However, ",
                " should technically be written as "
            ],
            [
                ". This won't do if you want to be thorough, though, since ",
                " should be escaped to "
            ],
            [
                ". But to correctly encode ",
                ", ",
                " should be used"
            ],
            [
                ". Whatever one thinks about ",
                ", the job isn't done yet, because displaying that further necessitates using the string "
            ],
            [
                ". You might think you can wrap it up, but anyone paying attention will quickly realise that there's an obvious catch: ",
                " itself is clearly in need of being escaped to "
            ],
            [
                ". But if writing ",
                " was necessary to escape special characters, then it itself must be escaped to "
            ],
            [
                ", which doesn't look great on its own, but matters get worse when you realize that this ",
                " itself must be escaped to an even more intimidating "
            ],

        ],
        end: ". And on and on it goes..."
    }
}

export default phrases;