# Hyvor Talk - React

> Add Hyvor Talk to React Apps

[![NPM](https://img.shields.io/npm/v/hyvor-talk-react.svg)](https://www.npmjs.com/package/hyvor-talk-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install hyvor-talk-react
```

## Library

This library includes two [Components](https://reactjs.org/docs/react-component.html).

1. `Embed` - To load Hyvor Talk embed
2. `CommentCount` - To load comment counts for listing pages

# Example

```jsx
import React, { Component } from 'react'

import HyvorTalk from 'hyvor-talk-react'

class Article extends Component {
  render () {
    return (
      <div>
        <h1>Article Title</h1>

        <div className="comment-count-view">

          { /* Comment Counts */ }
          <HyvorTalk.CommentCount 
            websiteId={YOUR_WEBSITE_ID}
            id={WEBPAGE_IDENTIFIER} 
          />

        </div>
        
        <content>Your Article Here</content>

        { /* Load Comments now */ }
        <HyvorTalk.Embed 
          websiteId={YOUR_WEBSITE_ID}
          id={WEBPAGE_IDENTIFIER}
        />
      </div>
    )
  }
}
```

## HyvorTalk.Embed Component

This component loads the comments iframe into your website and supports the following attributes.

* `websiteId` - (int) (required) ID of your website. This ID is given to you when you register your website on Hyvor Talk. Visit [console](https://talk.hyvor.com/console) find it or create new one.
* `id` - (any) (optional) This is used to identify each web pages uniquely by Hyvor Talk. If you don't set it, the canonical URL will be used as the ID. If canonical URLs are not set URL of the page will be used without query params.
* `url` - (string) (optional) You can explicitly set the URL of the page.
* `loadMode` - (string) (optional) [Load Hyvor Talk on load, click, or scroll](https://talk.hyvor.com/documentation/installation/loading-modes)


## HyvorTalk.CommentCount

This component can be used to display comment counts on a listing page or a blog page itself. 

Attributes:

* `websiteId`
* `id` - ID of the webpage (should be the same used to load comments)
* `mode` - (string) (optional) Use `mode="number"` to display only the number of comments.


Here's a simple [live demo](https://hyvortalk.github.io/hyvor-talk-react/)

## License

MIT © [HyvorTalk](https://github.com/HyvorTalk)
