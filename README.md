<b>Process</b><br/>
I initialized a React app using create-react-app and cleaned out the out-of-the-box files, then I looked into the GraphQL server provided.<br/>
This is when I started running into <b>issues:</b><br/>
<b>Data</b><br/>
- I'd never worked with GraphQL before, so it was confusing at first. After going through the docs and trying out a few queries I got more comfortable with it.<br/>
- The endpoint URL in the playpen was the schema default. After digging into it, I found out the SSL certificate expired, and it had an automatic redirect to a shady URL (expired certificate, ww1 prefix) that CORS flat-out blocked no matter what. By that point it was a dead end, so figured I should ask about it, which is when I was told the URL in the playpen is wrong.<br/>
<br/>
<b>VisX library</b><br/>
- This was also new to me, so I started with the docs and finding a model that could work for the task. I then tried installing the required dependencies, which failed because the library doesn't support React ^17.0.0. I tried to find a fix but the issue is flagged in the repo since October 2020, and as of April 2021 there's still no official support.<br/>
- Ended up having to downgrade the app to React ^16.0.0. While that is fine for a test, it could cause issues down the line with new releases.<br/>
- There's a mix of JavaScript and TypeScript between the examples/components in the docs which makes it more confusing.<br/>
- The docs don't provide clear explanations on how the library's components can be customised. This is what eventually stumped me.
