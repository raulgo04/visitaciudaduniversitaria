const slidesData = [
  // 1. PORTADA
  {
    type: "cover",
    bgColor: "#001219",
    image: "https://www.unmundomejor.life/wp-content/uploads/2016/04/Armonite15-ciudad-universitaria-1080x675.jpg",
    title: "Visita crítica",
    subtitle: "Ciudad Universitaria de Madrid",
    buttonText: "Empezar"
  },
  
  // 2. PARANINFO SAN BERNARDO
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://images.ecestaticos.com/7xOEVTB9sWlByG3-Jv2QWz8heoc=/0x0:854x1280/1440x1920/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F589%2Fbdf%2F31d%2F589bdf31dbdf77e062ca1d0d6ff5eaaa.jpg",
    text: "Paraninfo de San Bernardo",
    instructions: "Pulsa para ampliar la imagen."
  },
  
    // 3. ALFONSO XII
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://s1.abcstatics.com/media/espana/2017/03/31/rey-CIU-kNSE--620x349@abc.jpg",
    text: "Alfonso XIII durante las obras",
    instructions: "Pulsa para ampliar la imagen."
  },
  
  // 4. Guerra Civil en Ciudad Universitaria
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://portal.uned.es/pls/portal/docs/1/28244383.JPG",
    text: "Guerra Civil en Ciudad Universitaria",
    instructions: "Pulsa para ampliar la imagen."
  },
   // 5. Campus americano frente campus CIU
  {
    type: "double-image-text",
    bgColor: "#7b1e2b",
    images: [
      "https://www.shutterstock.com/shutterstock/videos/31437643/thumb/1.jpg?ip=x480",
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Facultad_de_Medicina_de_la_UCM_6.PNG"
    ],
    text: "¿Véis alguna similitud?",
    instructions: "Pulsa para ampliar las imágenes."
  },
  
  // 5. Maqueta del Museo de América
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://www.cultura.gob.es/.imaging/mte/micrositios-theme/contenido-cim-ancho-1c/dam/micrositios/museodeamerica/actividades/encuentros-y-celebraciones/80-aniversario/maqueta-mam-web/jcr:content/maqueta-mam-web.jpg",
    text: "Maqueta del Museo de América",
    instructions: "Pulsa para ampliar la imagen."
  },
  
  // 6. TEXTO CATÓLICO (ROJO OSCURO)
  {
    type: "image-zoom-text",
    bgColor: "#7b1e2b",
    image: "https://raw.githubusercontent.com/raulgo04/visitaciudaduniversitaria/refs/heads/main/hispanidad.JPG",
    text: "¿Qué opináis del texto?",
    instructions: "Pulsa para ampliar la imagen."
  },
  
   // 7. La Facultad de Medicina en la Guerra Civil
  {
    type: "image-zoom-text",
    bgColor: "#0d3b4f",
    image: "https://imagenes.elpais.com/resizer/v2/6OUEOCBVH7EVC3AC3FBH6LWDB4.jpg?auth=9672b7569590b32bd3fbc9e59569c4070e49d125b277d9f2fad0a434063925e8&width=1960&height=1103&smart=true",
    text: "La Facultad de Medicina durante la Guerra Civil",
    instructions: "Pulsa para ampliar la imagen."
  },
     // 8. Comparativa del Paraninfo
  {
    type: "double-image-text",
    bgColor: "#0d3b4f",
    images: [
      "https://memoriadelarchivo.ucm.es/omeka/files/fullsize/a37b49c9ab70abdabdb043f1698ab4b8.jpg",
      "https://storage.gra.cloud.ovh.net/v1/AUTH_1d8acd14d9d84c7c9a3db5c72d446686/clupik-gallery/6ef79c21dd35ea505e11d0c6673b8a2588fa650b/public/749e497f-10f0-4414-a83f-8ce56fba6f88.medium.jpg"
    ],
    text: "Comparativa Paraninfo",
    instructions: "Pulsa para ampliar las imágenes."
  },
    // 9. Trincheras en la Avenida Complutense
  {
    type: "image-zoom-text",
    bgColor: "#0d3b4f",
    image: "https://www.soydemadrid.com/images/thumbs/la-batalla-de-la-ciudad-universitaria-0080518.jpeg",
    text: "Trincheras en la Avenida Complutense",
    instructions: "Pulsa para ampliar la imagen."
  },
  
    // 10. ¿Cómo poner en valor este patrimonio?
  {
    type: "image-zoom-text",
    bgColor: "#0d3b4f",
    image: "https://ccinformacion.ucm.es/data/cont/media/www/794/muro/muro01.jpg",
    text: "¿Cómo poner en valor este patrimonio?",
    instructions: "Pulsa para ampliar la imagen."
  },
  
  // 11. Albert Einstein
  {
    type: "image-zoom-text",
    bgColor: "#7a6220",
    image: "https://zaragozaguia.com/wp-content/uploads/2019/03/Albert-Einstein-con-su-esposa-Elsa-en-1923.jpg",
    text: "¿Quiénes son y qué relación tienen?",
    instructions: "Pulsa para ampliar la imagen."
  },
  // 12. COMPARADOR (AZUL OSCURO)
  {
    type: "image-compare",
    bgColor: "#1f4f34",
    before: "https://memoriadelarchivo.ucm.es/omeka/files/fullsize/b5ea4ce0e56ca82aefb7c9bde0496a9f.jpg",
    after: "https://biblioaecidmadrid.wordpress.com/wp-content/uploads/2015/05/20-guerra-civil-facultad-de-filosofc3ada-y-letras-1939.jpg",
    labelBefore: "Antes de la Guerra Civil",
    labelAfter: "Después de la Guerra Civil",
    instructions: "Desliza para comparar ambas imágenes."
  },
  // 13. ELECCIÓN ÍCONO 
  {
    type: "image-choice",
    bgColor: "#1f4f34",
    question: "¿Créeis que deberían haberse conservado? Elegid una de las opciones",
    instructions: "Pulsa en tu elección.",
    options: [
      {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip6MWso_9Qz3Z0uS2mSYdR2mF_NzCfXha3biVRTO5H3c14QRX4TY7pUBfwj61ZhV9xHhkLWSuy8dOgD-Vyh4pFYzsGutTXgdg2xLKBVTZ_7urr2kjFlty0uLoTg-GiQ5p8D_7KlRJoHtZNiXufWI_pldg5l36IqfCoxN1H1IIkh8d3_0oPc44AmVlgeA/w600/a7170-fue_pintada2ben2bnitrato2bde2bplata2b_mercedes2bvega.png",
        color: "blue"
      },
      {
        img: "https://www.comunidad.madrid/docs/styles/16x9_840w_1x/public/assets/2020/05/04/facultad_defilosofia_y_filologia_20.jpeg?itok=nmO367tA",
        color: "violet"
      }
    ],
    selected: null
  },

  // 14. Libro con bala
  {
    type: "image-text",
    bgColor: "#7b1e2b",
    image: "https://www.publico.es/files/fullwidth_image_horizontal_desktop/files/fp/uploads/2025/08/01/688d0dca02141.r_d.1203-773-5991.jpeg",
    text: "Libro conservado en la Biblioteca",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 15. Jose Ortega y Gasset
  {
    type: "image-text",
    bgColor: "#7b1e2b",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCGbuiyAoqb4lRzNA2Ie9vvLfsK8F8jdljgs00Rb6jZEVArxtj3IQ3vv5CuKgcA21SF4cZqCgsyAo6CQEsDao1_nloeQHY-DYHITwXaG4i-k5Y0p_Wmg1LE9NK4-10gE9_MXlhrcXkGBSD/s1600/Ortega+y+Gasset+charla.jpg",
    text: "Clase de Jose Ortega y Gasset",
    instructions: "Pulsa para ampliar la imagen."
  },

  // 16. Maria Zambrano
  {
    type: "image-text",
    bgColor: "#7a6220",
    image: "https://www.ucm.es/poeticasdelamodernidaducm/file/c1p7_1_3?ver=n",
    text: "María Zambrano",
    instructions: "Pulsa para ampliar la imagen."
  },
  
  // 17. Caja cerillas
  {
    type: "image-zoom-text",
    bgColor: "#7a6220",
    image: "https://www.casagokotta.com/media/items/medium/7-0c4b3.jpg",
    text: "¿Y esto?",
    instructions: "Pulsa para ampliar la imagen."
  },
  
    // 18. IPCE
  {
    type: "image-zoom-text",
    bgColor: "#7a6220",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Inmueble_del_Instituto_del_Patrimonio_Cultural_de_Espa%C3%B1a%2C_Madrid%2C_desde_el_Faro_de_Moncloa.JPG",
    text: "Instituto del Patrimonio Cultural de España",
    instructions: "Pulsa para ampliar la imagen."
  },
       // 19. Interior y arquitectura
  {
    type: "double-image-text",
    bgColor: "#7a6220",
    images: [
      "https://ipce.cultura.gob.es/.imaging/mte/mcd-theme/contenido-cgi-mdm/dam/mcd/cultura/areas/patrimonio/mc/ipce/presentacion/boton-sede/jcr:content/boton-sede.jpg",
      "https://ipce.cultura.gob.es/.imaging/mte/mcd-theme/contenido-cim-gr/dam/mcd/cultura/areas/patrimonio/mc/ipce/eventos/otros-eventos/2024/2024-11-semana-ciencia/visita-ipce-semana-ciencia/visitas-ipce-semana-ciencia/jcr:content/visitas-ipce-semana-ciencia.jpg"
    ],
    text: "Arquitectura e interior del IPCE",
    instructions: "Pulsa para ampliar las imágenes."
  },

  // 21. SLIDE FINAL - AGRADECIMIENTO
  {
    type: "text",
    bgColor: "#001219",
    text: "Gracias por hacer la visita",
    instructions: "Esperamos que apliques la visión decolonial la próxima vez que visites un museo."
  }
];

let current = 0;
const slidesEl = document.getElementById("slides");
const progressBar = document.querySelector(".progress-bar");
const navEl = document.getElementById("nav");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");
const modalClose = document.getElementById("imageModalClose");

/* Soporte para image-choice/poll */
function handleSelection(index) {
  const slide = slidesData[current];
  if (!("selected" in slide)) return;
  if (slide.selected !== null && slide.selected !== undefined) return;
  slide.selected = index;
  renderSlide();
}

function renderSlide() {
  const slide = slidesData[current];
  const total = slidesData.length;

  slidesEl.innerHTML = "";

  const el = document.createElement("div");
  el.className = "slide";
  el.style.backgroundColor = slide.bgColor;

  let inner = `<div class="slide-counter">${current + 1} / ${total}</div>`;

  if (slide.type === "cover") {
    inner += `
      <div class="cover-content">
        <img class="cover-image zoomable" src="${slide.image}" alt="Museo Nacional de Antropología">
        <h1 class="cover-title">${slide.title}</h1>
        <p class="cover-subtitle">${slide.subtitle || ""}</p>
        <button class="cover-button" id="startBtn">${slide.buttonText}</button>
      </div>
    `;
  }

  else if (slide.type === "image-compare") {
    inner += `
      <h2>Facultad de Filosofía y Letras</h2>
      <p>${slide.question || ""}</p>
      <div class="image-slider-container">
        <div class="image base" style="background-image:url('${slide.after}')"></div>
        <div class="image overlay" style="background-image:url('${slide.before}'); width:50%;"></div>

        <input id="range-slider" class="range-slider" name="slider" type="range" min="1" max="100" value="50" />
        <div class="slider-control">
          <span class="slider-control-btn left"></span>
          <span class="slider-control-btn right"></span>
        </div>
      </div>
      <div class="compare-labels">
        <span>${slide.labelBefore}</span>
        <span>${slide.labelAfter}</span>
      </div>
    `;
  }

  else if (slide.type === "matching") {
    inner += `
      <h2 class="matching-title">${slide.title || ""}</h2>
      <div class="matching-grid">
        <div class="matching-row" data-color="red">
          <div class="color-box color-red" data-color="red"></div>
          <div class="drop-zone" data-color="red"></div>
        </div>
        <div class="matching-row" data-color="yellow">
          <div class="color-box color-yellow" data-color="yellow"></div>
          <div class="drop-zone" data-color="yellow"></div>
        </div>
        <div class="matching-row" data-color="green">
          <div class="color-box color-green" data-color="green"></div>
          <div class="drop-zone" data-color="green"></div>
        </div>
      </div>
      <div class="labels-pool">
        <div class="label-box" draggable="true" data-target="red">Naturaleza</div>
        <div class="label-box" draggable="true" data-target="yellow">Desierto</div>
        <div class="label-box" draggable="true" data-target="green">Religión</div>
      </div>
      <p class="matching-instructions">${slide.instructions || ""}</p>
    `;
  }

  else if (slide.type === "image-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <img class="center-image zoomable" src="${slide.image}" alt="Imagen">
    `;
  }

  else if (slide.type === "double-image-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <div class="double-images">
        <img class="zoomable" src="${slide.images[0]}" alt="Imagen 1">
        <img class="zoomable" src="${slide.images[1]}" alt="Imagen 2">
      </div>
    `;
  }

  else if (slide.type === "double-image") {
    inner += `
      <h2></h2>
      <div class="double-images">
        <img class="zoomable" src="${slide.images[0]}" alt="Imagen 1">
        <img class="zoomable" src="${slide.images[1]}" alt="Imagen 2">
      </div>
    `;
  }

  else if (slide.type === "image-zoom-text") {
    inner += `
      ${slide.text ? `<h2>${slide.text}</h2>` : `<h2></h2>`}
      <img class="center-image zoomable" src="${slide.image}" alt="Imagen ampliable">
    `;
  }

  else if (slide.type === "image-choice") {
    inner += `
      <h3>${slide.question || ""}</h3>
      <div class="image-options">
        ${slide.options.map((opt, i) => `
          <div class="image-option ${slide.selected === i ? opt.color : ""} ${slide.selected !== null && slide.selected !== undefined && slide.selected !== i ? "selected-other" : ""}" data-index="${i}">
            <img class="zoomable" src="${opt.img}" alt="Opción ${i+1}">
          </div>
        `).join("")}
      </div>
    `;
  }

  else if (slide.type === "poll") {
    inner += `
      <h3>${slide.question || ""}</h3>
      <div class="poll-options">
        ${slide.options.map((opt, i) => `
          <div class="poll-option ${slide.selected === i ? opt.color : ""} ${slide.selected !== null && slide.selected !== undefined && slide.selected !== i ? "selected-other" : ""}" data-index="${i}">
            ${opt.text}
          </div>
        `).join("")}
      </div>
    `;
  }

  else if (slide.type === "text") {
    inner += `
      <h2>${slide.text || ""}</h2>
      ${slide.subText ? `<p>${slide.subText}</p>` : ""}
    `;
  }

  el.innerHTML = inner;
  slidesEl.appendChild(el);

  // Ocultar navegación en la portada
  if (current === 0) {
    navEl.style.display = "none";
  } else {
    navEl.style.display = "flex";
  }

  updateProgress();
  attachInteractionsForCurrentSlide();
}

function updateProgress() {
  progressBar.style.width = ((current + 1) / slidesData.length) * 100 + "%";
}

function openModalWithSrc(src) {
  modalImg.src = src;
  modal.classList.add("show");
}

function attachInteractionsForCurrentSlide() {
  const slide = slidesData[current];

  // Portada → botón Empezar
  if (slide.type === "cover") {
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        current = 1; // Ir a la primera slide después de la portada
        renderSlide();
      });
    }
  }

  // Comparador de imágenes
  if (slide.type === "image-compare") {
    const container = document.querySelector(".image-slider-container");
    if (container) {
      const sliderInput = container.querySelector(".range-slider");
      const overlayImg = container.querySelector(".image.overlay");
      const buttonRange = container.querySelector(".slider-control");

      if (sliderInput && overlayImg && buttonRange) {
        sliderInput.addEventListener("input", (e) => {
          const sliderPos = e.target.value;
          overlayImg.style.width = sliderPos + "%";
          buttonRange.style.left = sliderPos + "%";
        });
      }

      container.addEventListener("mousemove", (e) => {
        const reduceMovement = (n) => n / 25;
        container.animate(
          {
            transform: `scale(1.03) rotateX(${reduceMovement(
              e.movementY
            )}deg) rotateY(${reduceMovement(e.movementX)}deg)`
          },
          { duration: 1200 }
        );
      });

      container.addEventListener("mouseout", () => {
        container.animate(
          { transform: `scale(1) rotateX(0deg) rotateY(0deg)` },
          { duration: 250, fill: "forwards" }
        );
      });
    }
  }

  // Zoom de imágenes
  const zoomables = document.querySelectorAll(".zoomable");
  zoomables.forEach(img => {
    img.addEventListener("click", () => {
      openModalWithSrc(img.src);
    });
  });

  // Juego de emparejar
  if (slide.type === "matching") {
    let dragged = null;

    const labelBoxes = document.querySelectorAll(".label-box");
    const dropZones = document.querySelectorAll(".drop-zone");
    const labelsPool = document.querySelector(".labels-pool");

    labelBoxes.forEach(label => {
      label.addEventListener("dragstart", (e) => {
        dragged = label;
        label.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });

      label.addEventListener("dragend", () => {
        if (dragged) {
          dragged.classList.remove("dragging");
        }
        dragged = null;
      });
    });

    function enableDropZone(zone) {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragged) {
          zone.innerHTML = "";
          zone.appendChild(dragged);
          dragged.classList.add("box-linked");
        }
      });
    }

    dropZones.forEach(zone => enableDropZone(zone));

    if (labelsPool) {
      labelsPool.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      labelsPool.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragged) {
          labelsPool.appendChild(dragged);
        }
      });
    }
  }

  // image-choice
  if (slide.type === "image-choice") {
    const opts = document.querySelectorAll(".image-option");
    opts.forEach(opt => {
      opt.addEventListener("click", () => {
        const i = parseInt(opt.getAttribute("data-index"), 10);
        handleSelection(i);
      });
    });
  }

  // poll
  if (slide.type === "poll") {
    const opts = document.querySelectorAll(".poll-option");
    opts.forEach(opt => {
      opt.addEventListener("click", () => {
        const i = parseInt(opt.getAttribute("data-index"), 10);
        handleSelection(i);
      });
    });
  }
}

// Navegación general
nextBtn.addEventListener("click", () => {
  if (current < slidesData.length - 1) {
    current++;
    renderSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderSlide();
  }
});

// Cerrar modal
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Render inicial
renderSlide();
