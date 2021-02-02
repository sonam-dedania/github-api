// var selectedIndex = 0;

function ajaxTest() {
    $.ajax({
        url: "https://api.github.com/users", success: function (result) {
            console.log(result);
            displayUsers(result);
            // $("#div1").html(JSON.stringify(result));
        }
    });
}

function getData(followUrl, followingUrl) {
    getFollowers(followUrl);
    getFollowing(followingUrl.substr(0, (followingUrl.length - 13)));

}

function getFollowers(followUrl) {
    $.ajax({
        url: followUrl,
        success: function (result) {
            displayFollowers(result);
            // $("#div1").html(JSON.stringify(result));
            console.log("re", result)
        }
    });
}

function getFollowing(followingUrl) {
    $.ajax({
        url: followingUrl,
        success: function (result) {
            displayFollowing(result);
        }
    });
}

function displayFollowers(result) {

    let userFollowers = "";

    for (let j = 0; j < result.length; j++) {

        userFollowers += '<div class="list">';
        userFollowers += '<img src="' + result[j].avatar_url + '" alt="" />';
        userFollowers += '        ' + result[j].login + '';
        userFollowers += '</div>';
    }
    $('.followers-container').html(userFollowers);
}

function test(dd) {
    console.log("ere", dd)
}

function displayFollowing(result) {

    let userFollowing = "";

    for (let j = 0; j < result.length; j++) {

        userFollowing += '<div class="list">';
        userFollowing += '<img src="' + result[j].avatar_url + '" alt="" />';
        userFollowing += '        ' + result[j].login + '';
        userFollowing += '</div>';
    }
    $('.following-container').html(userFollowing);
}



function displayUsers(result) {
    let userInfo = "";

    for (let i = 0; i < result.length; i++) {

        userInfo += '<div class="list" onClick="getData(\'' + result[i].followers_url + '\',\'' + result[i].following_url + '\')" >';
        userInfo += '<img src="' + result[i].avatar_url + '" alt="" />';
        userInfo += '        ' + result[i].login + '';
        userInfo += '</div>';
    }
    $('.listcontainer').html(userInfo);
}

$(document).ready(function () {
    ajaxTest();

})