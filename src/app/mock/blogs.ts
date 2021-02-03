import { Blog } from "../shared/blog/blog";


export const blogs = [
    new Blog ({name: "How to change background-image opacity in CSS without affecting text | HTML/CSS", text : `When building a website, you may often want to put a background image on an HTML <div> that also contains text or other content.

    And to make the text stand out, you want to change the opacity of that background image in CSS so that it’s semi-transparent. But you’ve tried, and you can’t change the opacity of the background image without also affecting the text or other child elements!
    
    What can you do? Not to worry– this article will give you some practical solutions to controlling your background image opacity.
    
    So, first, the bad news…`, date : '17:30 02/02/2021'}),
    new Blog ({name: "What are breakpoints in CSS?", text : `In responsive design, the widths that we target in our media queries are called breakpoints, because that is the point at which we will change the CSS rules.

    For example, for our h1 tag styles, our breakpoint is at 43em (688px) wide.
    
    What this means is that at viewports less than 688px wide, the h1 elements will have a font-size of 3rem. Then at 688px and greater, any h1 tags will be 3.75rem instead.
    
    You can also have more than one breakpoint for CSS selectors. You might add on additional media queries to continue changing the h1 size as the viewport increases to 62em (992px) and 87em (1392px) wide.
    
    You can create as many breakpoints as you would like, and you can use any width that you would like.
    
    There’s a lot of freedom in terms of setting breakpoints. So then, how many breakpoints should you use in your media queries? And what widths should you use? `, date : '15:04 23/01/2021'}),
    new Blog ({name : `How to build a responsive navigation bar (Flexbox vs CSS Grid)`, text : `In today’s tutorial, we’re going to build a top navigation bar with HTML and CSS. We will look at two different ways of building this navbar, one way with flexbox, and the other with CSS grid.

    It’ll be a good way to compare the differences between the two approaches. And you can see which method that you like better.` , date : '20:11 05/01/2021'})

]