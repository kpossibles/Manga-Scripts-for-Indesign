﻿function jumbleChars(obj, jumbleAmt)
{
    for (var i = 0; i < obj.characters.length; i++) {
        if (i % 2 == 0) { // if character is even 
            obj.characters[i].baselineShift += Math.random() * (obj.characters[i].pointSize / 6)
        }
        else { // if odd numbered character
            obj.characters[i].baselineShift += Math.random() * (obj.characters[i].pointSize * -1 / 6)
        }
    }
}


jumbleChars(app.selection[0], 4)