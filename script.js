/**
 * car class
 * properties: id, brand, km, year, image name, image url, price, technicals
 **/
class Car {
  constructor(id, brand, year) {
    this.id = id;
    this.brand = brand;
    this.year = year;
  }
  getId(id) {
    if (this.id === id) {
      return true;
    }
    return false;
  }
  getBrand() {
    return this.brand;
  }
  getYear() {
    return this.year;
  }
  setKm(km) {
    this.km = km;
  }
  getKm() {
    return this.km;
  }
  setPrice(price) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setTechnicals(technicals) {
    this.technicals = technicals;
  }
  getTechnicals() {
    return this.technicals;
  }
  setImageName(imageName) {
    this.imageName = imageName;
  }
  getImageName() {
    return this.imageName;
  }
  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
  }
  getImageUrl() {
    return this.imageUrl;
  }
  getByPriceRange(price) {
    if (this.price <= price) {
      return true;
    }
    return false;
  }
}

let cars = [];

/**
 * filtered by price
 */
function filterByPrice(price) {
  const carsPicked = cars.filter((item) => item.getByPriceRange(price));
  console.log("carsPicked = ", carsPicked);
}

/**
 * delete cars functionality
 */
function deleteCar(id) {
  const carIndex = cars.findIndex((item) => item.getId(id));
  console.log("car index = ", carIndex);
  cars.splice(carIndex, 1);
  console.log("new list of cars = ", cars);
}

/**
 * edit car
 */
function editCar(id, km) {
  const car = cars.find((item) => item.getId(id));
  car.setKm(km);
  console.log("change cars = ", cars);
}

/**
 * add cars
 */
function addCar(id, brand, price, year) {
  let car = new Car(id, brand, year);
  car.setPrice(price);
  cars.push(car);
}
addCar(6, "Lada", 2000, 1940);
console.log("initial Cars = ", cars);

/**
 * data collection
 */

const idInput = document.getElementById("car-id");
const brandInput = document.getElementById("car-brand");
const yearInput = document.getElementById("car-year");
const priceInput = document.getElementById("car-price");

function saveCar() {
  addCar(
    parseInt(idInput.value),
    brandInput.value,
    yearInput.value,
    priceInput.value
  );
  console.log("new added cars = ", cars);
}

const removeIdInput = document.getElementById("remove-car");

function removeCar() {
  deleteCar(parseInt(removeIdInput.value));
}

const showIdInput = document.getElementById("show-car-input");
function editShownCar() {
  editCar(parseInt(showIdInput.value), 10000);
}
function showCar() {
  const car = cars.find((item) => item.getId(parseInt(showIdInput.value)));
  let showCarArea = document.getElementById("show-car");
  showCarArea.innerHTML = "";
  let p = document.createElement("p");
  p.innerText = `Car with brand ${car.getBrand()} is shown. Has price of ${car.getPrice()}.`;
  let button = document.createElement("button");
  button.setAttribute("onclick", "editShownCar()");
  button.innerText = "Edit car ";

  showCarArea.appendChild(button);
  showCarArea.appendChild(p);
}
