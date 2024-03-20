export const bigButtonTemplate = ({ zaprosText, registrText, buttonText }) => {
  return `
    <section class="one big_button">
      <div class="rectangle">
        <div class="big_button_text">
          <div class="big_button_text_left">
            <p class='big_button_zapros'>${zaprosText}</p>
            <h3 class="big_button_registr">${registrText}</h3>
          </div>
          <button class="big_button_black">${buttonText}</button>
        </div>
      </div>
    </section>
  `;
};
