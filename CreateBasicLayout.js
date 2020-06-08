class CreateBasicLayout {
  createBasicElements(number_users) {
    for (let i = 0; i < number_users; i++) {
      const divContainer = document.querySelector(".container");
      const sectionContainer = document.createElement("section");
      sectionContainer.classList.add("card-container");
      divContainer.appendChild(sectionContainer);

      const divCard = document.createElement("div");
      divCard.classList.add("card");
      sectionContainer.appendChild(divCard);

      const figureImg = document.createElement("figure");
      figureImg.classList.add("card-image", "loading");
      divCard.appendChild(figureImg);

      const divHole = document.createElement("div");
      divHole.classList.add("hole");
      figureImg.appendChild(divHole);

      const divCardDetail = document.createElement("div");
      divCardDetail.classList.add("card-detail");
      divCard.appendChild(divCardDetail);

      const divCardTitle = document.createElement("div");
      divCardTitle.classList.add("card-title", "loading");
      divCardDetail.appendChild(divCardTitle);

      const pCardDescription = document.createElement("p");
      pCardDescription.classList.add("card-description", "loading");
      divCardDetail.appendChild(pCardDescription);
    }
  }

  reamoveLoadingClass() {
    const elements = document.querySelectorAll(
      ".card-image, .card-title, .card-description"
    );
    elements.forEach(element => {
      if (element.classList.contains("loading")) {
        element.classList.remove("loading");
      }
    });
  }
  getNodeForImage() {
    return [...document.querySelectorAll(".card-image")];
  }
  getNodeForTitle() {
    return [...document.querySelectorAll(".card-title")];
  }
  getNodeForDescription() {
    return [...document.querySelectorAll(".card-description")];
  }
  getNodeCard() {
    const cardItems = [...document.querySelectorAll(".card")];
    let newCardItem = [];
    cardItems.forEach(item => {
      if (!item.hasAttribute("data-set", "loaded")) {
        newCardItem.push(item);
      }
    });
    return newCardItem;
  }

  getNodeContainer() {
    return document.querySelector(".container");
  }
}
