import {remark} from 'remark';
import html from 'remark-html';

// convert markdown string (without metadata) to html
export async function mdToHtml(md) {
    // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);

    return (await remark()
        .use(html)
        .process(md))
        .toString()
}
