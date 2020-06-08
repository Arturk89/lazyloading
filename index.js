const NUMBER_USERS = 18;
const numberOfUsers = document.querySelector(".totalUsers");

const GetDataApi = new getDataFromApi(NUMBER_USERS);
const Scroll = new ScrollData();
const BasicLayout = new CreateBasicLayout();

BasicLayout.createBasicElements(NUMBER_USERS);
GetDataApi.getData();

window.addEventListener("scroll", function() {
  numberOfUsers.textContent =
    BasicLayout.getNodeContainer().children.length + " users";
  if (Scroll.getSizes() < 1300) {
    BasicLayout.createBasicElements(NUMBER_USERS);
    GetDataApi.getData();
  }
});
