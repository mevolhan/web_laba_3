export const blogTemplate = ({ mainArticle, minorArticles }) => {
    const mainArticleHtml = `
      <div class="left_art">
        <img src="${mainArticle.imageUrl}" alt="nft">
        <div class="description_art_main">
          <div class="description__art_up">
            <p class="date">${mainArticle.date}</p>
            <p class="head_main_art">${mainArticle.headline}</p>
          </div>
          <a href="${mainArticle.fullArticleUrl}" class="read_art_main">Читать полную статью</a>
        </div>
      </div>
    `;
  
    const minorArticlesHtml = minorArticles.map(article => `
      <div class="one_minor_art">
        <img src="${article.imageUrl}" alt="nft">
        <div class="description_art">
          <p class="date">${article.date}</p>
          <p class="head_minor_art">${article.headline}</p>
          <a href="${article.fullArticleUrl}" class="read_art">Читать полную статью</a>
        </div>
      </div>
    `).join("");
  
    return `
      <section class="section blog">
        <div class="header_blog">
          <h1>Многое Происходит,<br>Мы Ведем об Этом Блог.</h1>
        </div>
        <div class="all_art">
          ${mainArticleHtml}
          <div class="right_art">
            ${minorArticlesHtml}
          </div>
        </div>
      </section>
    `;
  };
  