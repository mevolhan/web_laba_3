export const allExpectationsTemplate = ({
    imageSrc,
    imageAlt,
    text1,
    header,
    text2,
    ctaText
  }) => {
    return `
      <div class="all_expectations_left">
        <img src="${imageSrc}" alt="${imageAlt}" />
      </div>
      <div class="all_expectations_right">
        <p class="all_expectations_text1">${text1}</p>
        <h2>${header}</h2>
        <p class="all_expectations_text2">${text2}</p>
        <a href="#" class="right__cta">${ctaText}</a>
      </div>
    `;
  };
  