const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
    const headerContainerDiv = document.createElement('div');
    headerContainerDiv.classList.add('header');

    const headerSpanDate = document.createElement('span');
    headerSpanDate.classList.add('date');
    headerSpanDate.textContent = tarih;
    headerContainerDiv.append(headerSpanDate);

    const headerH1 = document.createElement('h1');
    headerH1.textContent = baslik;
    headerContainerDiv.append(headerH1);

    const headerSpanYazi = document.createElement('span');
    headerSpanYazi.classList.add('temp');
    headerSpanYazi.textContent = yazi;
    headerContainerDiv.append(headerSpanYazi);

    return headerContainerDiv;

  }



const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const headerContainer = document.querySelector(secici);
  headerContainer.append(Header('Teknoloji Zamani','23.04.2023','Sağdaki Yazı'))

  return headerContainer;
 
}

export { Header, headerEkleyici }
