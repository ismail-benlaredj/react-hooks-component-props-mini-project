import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map(({ id, title, date, preview, minutes }) => (
                <Article
                    key={id}
                    title={title}
                    date={date}
                    preview={preview}
                    minutes={minutes}
                />
            ))}
        </main>
    );
}

export default ArticleList;