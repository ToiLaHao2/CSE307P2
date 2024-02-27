function test() {
    let a = 5;
    let b = 10;
    if (a > b) {
        console.log(a > b);
    } else {
        console.log("b > a");
    }
}
// function timmerFunc() {
//     var now = new Date();
//     var hour = new
// }
let productList = ["Asus", "Acer", "Samsung", "HP"];
const printList = () => {
    let productCategory = "";
    for (let brand of productList) {
        productCategory += `<li><a href="">${brand}<a/></li>`;
    }
    document.getElementById("product-category").innerHTML = productCategory;
};

function Search(text) {
    let check = false;
    for (const item of productList) {
        if (item == text) {
            check = true;
            break;
        }
    }
    return check;
}
