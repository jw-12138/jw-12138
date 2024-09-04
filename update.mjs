import fs from 'fs'

const fixedMarkdownContent = `## Hello there <sup>👋</sup>  

My name is **_Jacky_**.  

I'm a:  

- Front-end Developer <sup>💻</sup> [![wakatime](https://wakatime.com/badge/user/ce55500b-c1b3-442e-9ea0-8c879a1b767a.svg)](https://wakatime.com/@ce55500b-c1b3-442e-9ea0-8c879a1b767a)  
- Music Producer <sup>🎵</sup>     

Latest update on my blog:
  
`

let newPostsMarkdownContent = ''

let remoteContent = await fetch('https://jw1.dev/posts.json')

let posts = await remoteContent.json()

// keep only 5
posts.slice(0, 5).forEach(post => {
  newPostsMarkdownContent += `- [${post.title}](https://${post.url}) \n`
})

fs.writeFileSync('./README.md', fixedMarkdownContent + newPostsMarkdownContent)
