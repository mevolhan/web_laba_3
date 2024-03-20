export const footerTemplate = (data) => {
    return `
      <section class="section footer">
        <div class="footer__header">
          <h1 class="top__header">${data.header}</h1>
        </div>
        <div class="footer__middle">
          <button class="early_access_btn">${data.buttonText}</button>
        </div>
        <div class="footer__bottom">
          <div class="logo">
            <img class="GPT-3_logo" src="${data.logoSrc}" alt="GPT-3 logo">
            <p class="address">${data.address}</p>
          </div>
          <div class="footer__bottom_right">
            <div class="footer__links">
              <p class="bottom__links_header">Ссылки</p>
              <div class="footer__info_links">
                <a class="footer__link" href="${data.links.overony}">Овероны</a>
                <a class="footer__link" href="${data.links.socialMedia}">Соц. сети</a>
                <a class="footer__link" href="${data.links.counters}">Счетчики</a>
                <a class="footer__link" href="${data.links.contacts}">Контакты</a>
              </div>
            </div>
            <div class="footer__company_info">
              <p class="bottom__links_header">Компания</p>
              <div class="footer__company_links">
                <a class="footer__link" href="${data.companyLinks.termsOfUse}">Условия использования</a>
                <a class="footer__link" href="${data.companyLinks.personalData}">Перс. данные</a>
                <a class="footer__link" href="${data.companyLinks.contacts}">Контакты</a>
              </div>
            </div>
            <div class="footer__contact_info">
              <p class="bottom__links_header">Контакты</p>
              <div class="footer__contact_content">
                <p class="footer__link">${data.contactInfo.address}</p>
                <p class="footer__link">${data.contactInfo.phoneNumber}</p>
                <p class="footer__link">${data.contactInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="footer__copyright">
        <p class="copyright__info">${data.copyright}</p>
      </div>
    `;
  };
  