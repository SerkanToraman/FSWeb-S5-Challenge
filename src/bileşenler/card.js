import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardContainerDiv = document.createElement('div');
  cardContainerDiv.classList.add('card');

  const cardHeadlineDiv = document.createElement('div');
  cardHeadlineDiv.className = 'headline';
  cardHeadlineDiv.textContent = makale.anabaslik;
  cardContainerDiv.append(cardHeadlineDiv);

  const cardAuthorDiv = document.createElement('div');
  cardAuthorDiv.classList.add('author');
  cardContainerDiv.append(cardAuthorDiv);

  const cardImgDiv = document.createElement('div');
  cardImgDiv.classList.add('img-container');
  cardAuthorDiv.append(cardImgDiv);

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src',makale.yazarFoto);
  cardImgDiv.append(cardImg);
  
  const cardImgSpan = document.createElement('span');
  cardImgSpan.textContent = makale.yazarAdi;
  cardAuthorDiv.append(cardImgSpan);

  return cardContainerDiv;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardContainer = document.querySelector(secici); 

  const productPromise = axios.get('http://localhost:5001/api/makaleler');
  console.log('cards',productPromise)

  productPromise
    .then ((result) => {
      for(let i in result.data.makaleler){
        result.data.makaleler[i].map((article)=>{
          cardContainer.append(Card(article))
        })
      }
    })

}

export { Card, cardEkleyici }
