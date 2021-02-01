function ajaxTest() {
    $.ajax({
        url: "https://api.github.com/users", success: function (result) {
            console.log(result);
            displayUsers(result);
            // $("#div1").html(JSON.stringify(result));
        }
    });
}

function displayFollowers(result) {

    let userFollowers = "";

    for (let j = 0; j < result.length; j++) {

        userFollowers += '<div class="tab-content">';
        userFollowers += '<div id="home" class="tab-pane fade in active">';
        userFollowers += '<h3>' + result[j].followers_url + '</h3>';
        userFollowers += '</div>';
        userFollowers += '<div id="menu1" class="tab-pane fade">';
        userFollowers += '<h3>' + result[j].following_url + '</h3>';
        userFollowers += '</div>';
        userFollowers += '</div>';
    }
    $('.followers-container').html(userFollowers);
}

function displayUsers(result) {
    let userInfo = "";

    for (let i = 0; i < result.length; i++) {

        userInfo += '    <div class="list" ' + 'onClick="displayFollowers(' + i + ')">';
        userInfo += '<img src="' + result[i].avatar_url + '" alt="" />';
        userInfo += '        ' + result[i].login + '';
        userInfo += '</div>';
    }
    $('.listcontainer').html(userInfo);
}

$(document).ready(function () {
    ajaxTest();

})