function ajaxTest() {
    $.ajax({
        url: "https://api.github.com/users", success: function (result) {
            console.log(result);
            displayUsers(result);
            // $("#div1").html(JSON.stringify(result));
        }
    });
}

function displayfollowers(result) {

    let userFollowers = "";

    for (let i = 0; i < result.length; i++) {


    }
}

function displayUsers(result) {
    let userInfo = "";

    for (let i = 0; i < result.length; i++) {

        userInfo += '    <div class="list" ' + onclick() + '>';
        userInfo += '<img src="' + result[i].avatar_url + '" alt="" />';
        userInfo += '        ' + result[i].login + '';
        userInfo += '</div>';
    }
    $('.listcontainer').html(userInfo);
}

$(document).ready(function () {
    ajaxTest();

})