let linksSocialMedia = {
  github: 'igorweisss',
  youtube: 'channel/UCNRJAAioA-9NLypWNWGpouw',
  instagram: 'carolmuellerfotografia',
  facebook: 'igor.weiss.9',
  twitter: ''
}



function changeSocialMediaLinks(links) {
  
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
  let social = github.getAttribute('class')
  github.href = `https://${social}.com/${links[social]}`
}

changeSocialMediaLinks(linksSocialMedia)



function getGithubUserInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(dataJSON => {
    profileimg.src = dataJSON.avatar_url
    profileName.textContent = dataJSON.name
    profileBio.textContent = dataJSON.bio
    profileLogin.textContent = dataJSON.login.toLowerCase()
  })
}

getGithubUserInfo()