const CreateBasic = new CreateBasicLayout();

class getDataFromApi {
  constructor(numberOfUsers) {
    this.numberOfUsers = numberOfUsers;
    this.BASIC_URL = "https://randomuser.me/api/";
  }

  getData() {
    const result = `?inc=name,email,login,picture&results=${this.numberOfUsers}`;
    fetch(this.BASIC_URL + result)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(
          "Wystąpił błąd przy ponieraniu danych!!!" + response.status
        );
      })
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => console.log(error));
  }
  setData(users) {
    console.log(users);
    const cards = CreateBasic.getNodeCard();
    console.log(cards);
    const usersData = users.results;

    cards.forEach((card, index) => {
      card.setAttribute("data-set", "loaded");
      const img = document.createElement("img");
      img.setAttribute("src", usersData[index].picture.large);
      card.children[0].appendChild(img);
      card.children[1].children[0].textContent =
        usersData[index].name.first + " " + usersData[index].name.last;
      card.children[1].children[1].textContent = usersData[index].email;
      if (index === usersData.length - 1) {
        CreateBasic.reamoveLoadingClass();
      }
    });
  }
}
