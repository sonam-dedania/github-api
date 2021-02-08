let selectedIndex = 0;
let data = [];

function ajaxTest() {
    $.ajax({
        url: "https://api.github.com/users", success: function (result) {
            console.log(result);
            displayUsers(result);
            data = result;
            // $("#div1").html(JSON.stringify(result));
        }
    });
}

function getData(i) {
    selectedIndex = i;

    if ($("ul#sampleTabs li.active").text().trim() == "Followers") {
        getFollowers();
    }
    else {
        getFollowing();
    }

}

function getFollowers() {
    $.ajax({
        url: data[selectedIndex].followers_url,
        success: function (result) {
            displayFollowers(result);
            // $("#div1").html(JSON.stringify(result));
            console.log("re", result)
        }
    });
}

function getFollowing() {
    let followingUrl = data[selectedIndex].following_url;
    $.ajax({
        url: followingUrl.substr(0, (followingUrl.length - 13)),
        success: function (result) {
            displayFollowing(result);
        }
    });
}

function displayFollowers(result) {

    let userFollowers = "";

    for (let j = 0; j < result.length; j++) {
        userFollowers += '<div class="follower-box">';
        userFollowers += '<div class="list">';
        userFollowers += '<img src="' + result[j].avatar_url + '" alt="" />';
        userFollowers += '' + result[j].login + '';
        userFollowers += '</div>';
        userFollowers += '</div>';
        userFollowers += '<br/>';
    }
    $('.followers-container').html(userFollowers);
}

function test(dd) {
    console.log("ere", dd)
}

function displayFollowing(result) {

    let userFollowing = "";

    for (let j = 0; j < result.length; j++) {

        userFollowing += '<div class="follower-box">';
        userFollowing += '<div class="list">';
        userFollowing += '<img src="' + result[j].avatar_url + '" alt="" />';
        userFollowing += '' + result[j].login + '';
        userFollowing += '</div>';
        userFollowing += '</div>';
        userFollowing += '<br/>';
    }
    $('.following-container').html(userFollowing);
}



function displayUsers(result) {
    let userInfo = "";

    for (let i = 0; i < result.length; i++) {
        userInfo += '<div class="user-box">';
        userInfo += '<div class="list" onClick="getData(' + i + ')" >';
        userInfo += '<img src="' + result[i].avatar_url + '" alt="" />';
        userInfo += '<p>' + result[i].login + '</p>';
        userInfo += '</div>';
        userInfo += '</div>';
    }
    $('.listcontainer').html(userInfo);
}

$(document).ready(function () {
    ajaxTest();

})