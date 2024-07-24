import fs from 'fs'

const fixedMarkdownContent = `## Hello there <sup>👋</sup>  

My name is **_Jacky_**.  

I'm a:  

- Front-end Developer <sup>💻</sup>   
- Music Producer <sup>🎵</sup>     

Coding activities on Wakatime:

<img width="670" src="https://wakatime.com/share/@jw1dev/98cf10f7-c3e8-4dca-9844-68acd963fdb8.svg">

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
