let serviceList = [
    {
        serviceName: "Dich vu 1",
        serviceContent: "Noi dung chi tiet",
    },
    {
        serviceName: "Dich vu 2",
        serviceContent: "Noi dung chi tiet",
    },
    {
        serviceName: "Dich vu 3",
        serviceContent: "Noi dung chi tiet",
    },
    {
        serviceName: "Dich vu 4",
        serviceContent: "Noi dung chi tiet",
    },
    {
        serviceName: "Dich vu 5",
        serviceContent: "Noi dung chi tiet",
    },
];
function showServiceList() {
    let str = "";
    for (let item of serviceList) {
        str += `<div class="col-md-4">
        <h3 class="title">${item.serviceName}</h3>
        <p class="description">${item.serviceContent}</p>
        </div>`;
    }
    document.getElementById("serviceGroup").innerHTML = str;
}
let buttonLoading = document.getElementById("buttonLoading");
buttonLoading.onclick = function () {
    showServiceList();
};
// Jquery
$(".row").html("afeae");
