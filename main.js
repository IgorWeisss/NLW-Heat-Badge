let linksSocialMedia = {
  github: 'igorweisss',
  youtube: 'channel/UCNRJAAioA-9NLypWNWGpouw',
  instagram: 'carolmuellerfotografia',
  facebook: 'igor.weiss.9',
  twitter: ''
}

let login = prompt(
  'Bem vindo ao criador de crachá do DOWHILE 2021! Digite o seu usuário do github:'
)
if (login == '' || login == null) {
  login = prompt(
    'Para que o crachá fucnione, é necessário informar o login do github:'
  )
}
linksSocialMedia.github = login

linksSocialMedia.youtube = prompt(
  'Digite o seu nome de usuário ou código do canal no YouTube (ex: channel/UCNRJAAioA-9NLypWNWGpouw). Caso não possua canal no YouTube, deixe o campo em branco.'
)
linksSocialMedia.instagram = prompt(
  'Agora informe sua conta no instagram. Caso não possua, deixe em branco.'
)
linksSocialMedia.facebook = prompt(
  'Informe seu login de usuário do facebook. Caso não possua, deixe em branco.'
)
linksSocialMedia.twitter = prompt(
  'Por último, informe sua conta do Twitter. Caso não possua, deixe em branco.'
)
alert('Seu crachá está Pronto!')

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
