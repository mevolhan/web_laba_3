const initAllExpectations = () => {
    // Получаем элемент, к которому будем добавлять контент
    const allExpectationsNode = document.querySelector(".all_expectations");
  
    // Создаем контент для раздела "Все ожидания"
    const allExpectationsContent = `
      <div class="all_expectations_left">
        <img src="./assets/img/feature image.svg" alt="vr" />
      </div>
      <div class="all_expectations_right">
        <p class="all_expectations_text1">Запроси ранний доступ</p>
        <h2>Превосходя все ожидания</h2>
        <p class="all_expectations_text2">Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.</p>
        <a href="#" class="right__cta">Запросить ранний доступ</a>
      </div>
    `;
  
    
    allExpectationsNode.innerHTML = allExpectationsContent;
  };
  
  export default initAllExpectations;
  