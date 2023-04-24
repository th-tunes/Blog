//ADICIONA CONTEUDO NA PAGINA "SOBRE"

const contentContainer = document.getElementById("content-container");

async function loadContent() {
  const response = await fetch('json/contentAbout.json');
  const contentAbout = await response.json();

  contentAbout.forEach(content => {
    let subTitle = document.createElement('h2')
    subTitle.innerHTML = content.title;
    subTitle.classList.add('content-title');
    contentContainer.appendChild(subTitle);
    
    let text = document.createElement('p');
    text.innerHTML = content.text;
    text.classList.add('main-article-p');
    contentContainer.appendChild(text);

    let img = document.createElement('img');
    img.src = content.img;
    img.classList.add('content-img');
    let imgContainer = document.createElement('figure');
    imgContainer.classList.add('image-container');
    
    imgContainer.appendChild(img);
    contentContainer.appendChild(imgContainer);
  })
}

loadContent();