export class UI {
  constructor() { }
  // Método donde construimos nuestro HTML
  async mostrarProfesiones(resultado) {
    console.log('Hola desde UI');

    let templateHTML = "";
    resultado.map((profesion) => {
      let button = '';
      // Etiqueta => Role
      button = button + `<button data-role="${profesion.role}" class="btn">${profesion.role}</button>`;
      // Etiqueta => Level
      button = button + `<button data-level="${profesion.level}"  class="btn">${profesion.level}</button>`;

      // Etiquetas => Languages y Tools
      profesion.languages.map(language => {
        button = button + `<button data-languages="${language}"  class="btn">${language}</button>`;

        profesion.tools.map(tool => {
          button = button + `<button data-tools="${tool}"  class="btn">${tool}</button>`;
        });
      })

      let span1 = '';
      let span2 = '';

      if (profesion.new == true) {
        span1 = span1 + `<span class="breadcrumb header-title__new">NEW!</span>`;
      }
      if (profesion.featured == true) {
        span2 = span2 + `<span class="breadcrumb header-title__feature">FEATURED</span>`;
      }

      templateHTML = templateHTML + `

                <div class="card feature">
                  <div class="card-body">
                    <div class="card-body-logo">
                      <img
                        class="card-body-logo__img"
                        src="${profesion.logo}" 
                        alt="logo enterprise"
                      />
                    </div>
                    <div class="card-body-container">
                      <div class="card-body-container__header-title">
                        <h3>${profesion.company}</h3>
                        ${span1}
                        ${span2}
                      </div>
                      <h2 class="card-body-container__title">${profesion.position}</h2>
                      <div class="card-body-container__contract">
                        <p>${profesion.postedAt}</p>
                        <p>&nbsp&nbsp•&nbsp&nbsp</p>
                        <p>${profesion.contract}</p>
                        <p>&nbsp&nbsp•&nbsp&nbsp</p>
                        <p>${profesion.location}</p>
                      </div>
                    </div>
                    <div class="categories" id="cat">
                     ${button}
                    </div>
                  </div>
                </div>`
        ;
      console.log(templateHTML);
    });
    document.querySelector("#card").innerHTML = templateHTML;
  }

// METODO INCONCLUSO
  async mostrarseleccion(seleccion) {
    let templateSeleccionHTML = "";
    seleccion.map((categoria) => {
       let button = '';
      // Categorias, por  <button class="filter__btn" id="boton">x</button>
      button = button + `<button ${categoria.name} = "${categoria.value}" class="filter__btn" id="boton"
      >x</button>`;

      templateSeleccionHTML = templateSeleccionHTML + `
      <div class="filter">
      <div class="filter__wrapper">
        <span class="filter__label">${categoria.value}</span>
        ${button}
        </div>
        </div>
      `
    });
    document.querySelector("#filter_right").innerHTML = templateSeleccionHTML;
  }
} 





////////////////////////////////////////////////////////////////FILTERRRRRRR
    /*const FilterItem = ({value}) => {
      const view = `<li data-value="${value}" class="job-tags__item job-tags__item--active-filter job-tags__item--data_role">
  ${value}
  <div class="job-tags__close-btn">
    <i class="fas fa-times fa-lg"></i>
  </div>
</li>`;
      
      return view;
    }
    const $clear_filters_btn = document.querySelector(".parameter-filter__left-button");
  $clear_filters_btn.addEventListener("click", ()=>{
    $filters_container.querySelectorAll(".job-tags__item--active-filter").forEach( (el) => {
      removeTagItem(el, toggleShownCards);
    })
  })

const startFilter = (item, global_cards_function) => {
  filtered_list.push(item.dataset.value);
  $filters_container.classList.add("filters--active");
  
  const HTMLString = FilterItem(item.dataset);
  const $html_item = generateHtmlElement(HTMLString);
  const $close_btn = $html_item.querySelector(".job-tags__close-btn");
  $close_btn.addEventListener("click", (ev)=>{
    if (ev.target.localName === "i"){
      removeTagItem(ev.target.parentElement.parentElement,global_cards_function);
    } else {
      removeTagItem(ev.target.parentElement, global_cards_function);
    }
  })

  const $filters_box = document.querySelector(".filters__job-tags");
  $filters_box.append($html_item);
}

const removeTagItem = (HtmlElement, global_cards_function) =>{
  HtmlElement.remove();
  toggleActiveStates(HtmlElement, false)
  global_cards_function([HtmlElement.dataset.value])
  if(filtered_list.indexOf(HtmlElement.dataset.value) > -1) {
    filtered_list.splice(filtered_list.indexOf(HtmlElement.dataset.value), 1)
  }
  if(filtered_list.length === 0 ){
    console.log("vacio");
    $filters_container.classList.remove("filters--active");
  }
}

const filterCards = () => {
  const $cards = Array.from(document.querySelectorAll("#card"));

  return function (tags = []){
    tags.forEach(tag => {
      if (filtered_list.includes(tag)) {
        const cards_to_unhide = $cards.filter( card => !card.dataset.tags.split(",").includes(tag));
        cards_to_unhide.forEach(card => {
          card.classList.remove("card--hidden")
        })
      } else {
        const cards_to_hide = $cards.filter( card => !card.dataset.tags.split(",").includes(tag));
        cards_to_hide.forEach(card => {
          card.classList.add("card--hidden")
        })
      }
    });
  }
}
const toggleActiveStates = (element, activate = false) => {
  const card_tags = getAllTags();
  if (activate === true){
    const card_tags_to_activate = card_tags.filter(tag => tag.dataset.value.toLowerCase() === element.dataset.value.toLowerCase())
    card_tags_to_activate.forEach(item => item.classList.add("job-tags__item--active"));
  } else {
    const card_tags_to_deactivate = card_tags.filter(tag => element.dataset.value.toLowerCase() === tag.dataset.value.toLowerCase() && tag.classList.contains("job-tags__item--active"));
    card_tags_to_deactivate.forEach(item => item.classList.remove("job-tags__item--active"));
  }
}*/

