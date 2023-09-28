import React from "react";

function emojiNum(minutes) {
    if (minutes < 30) {
        let coffeeCups = Math.floor(minutes / 5);
        minutes % 5 === 0 ?
            coffeeCups = "☕️".repeat(coffeeCups)
            :
            coffeeCups = "☕️" + "☕️".repeat(coffeeCups)
        return coffeeCups
    } else {
        let bento = Math.floor(minutes / 10);
        bento % 10 === 0 ?
            bento = "🍱".repeat(bento)
            :
            bento = "🍱" + "🍱".repeat(bento);
        return bento
    }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emoji = emojiNum(minutes);

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} • {emoji} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;