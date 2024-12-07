var WebName = document.getElementById("WN")
var WebUrl = document.getElementById("WU")

var All_website = []
if (localStorage.getItem("all") != null) {
    All_website = JSON.parse(localStorage.getItem("all"))
    display()
}
function GetValue() {
    var website = {
        name: WebName.value,
        Url: WebUrl.value,
    }
    if (ValidName() == true && ValidUrl() == true) {
        All_website.push(website)
        localStorage.setItem("all", JSON.stringify(All_website))
        display()
        clear()
        console.log(All_website)
    }

}
function clear() {
    WebName.value = ""
    WebUrl.value = ""
}

function display() {
    cartona = ""
    for (let i = 0; i < All_website.length; i++) {
        cartona += `
                <tr class="d-flex justify-content-between py-2 bg-white border border-1">
                    <td class="fw-bold w-25 text-center">
                        <p>${i + 1}</p>
                    </td>
                    <td class="fw-bold w-25 text-center">
                        <p>${All_website[i].name}</p>
                    </td>
                      <td class="fw-bold w-25 d-flex justify-content-center">
                    <div class="btn btn-success"><i class="fa-solid fa-eye"></i> <a href="${All_website[i].Url}">Visit</a></div> </td>
                    <td class="fw-bold w-25  d-flex justify-content-center">
                        <div class="btn btn-danger text-center"  onclick="DeleteWeb(${i})"><i class="fa-solid fa-trash"></i> Delete</div>
                    </td>
                </tr>
    `
    }
    document.getElementById('demo').innerHTML = cartona
}
function DeleteWeb(index) {
    All_website.splice(index, 1)
    localStorage.setItem("all", JSON.stringify(All_website))
    display()
}





function ValidName() {
    var RegExp = /^[A-Z][a-z]{3,9}[0-9]?$/g
    if (RegExp.test(WebName.value) == true) {
        document.getElementById("alertName").classList.replace("d-block", "d-none")
        return true
    }
    else {

        document.getElementById("alertName").classList.replace("d-none", "d-block")
        return false
    }
}
function ValidUrl() {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-zd]([a-zd-]*[a-zd])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-zd%_.~+]*)*' +
        '(\\?[;&a-zd%_.~+=-]*)?' +
        '(\\#[-a-zd_]*)?$', 'i');

    if (urlPattern.test(WebUrl.value) == true) {
        document.getElementById("alertUrl").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.getElementById("alertUrl").classList.replace("d-none", "d-block");
        return false;
    }
}