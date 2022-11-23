
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function showInfo() {
    var email = document.getElementById('email').value;
    if (regex.test(email)==false) {
        alert ('Email không hợp lệ')
    } 
    else {
        document.querySelector('#form').style.display='none';
        document.querySelector('.mt-40-info').style.display='block';
    }

}
// chinh nut kinh nghiem
function showInfo2() {
    var button = document.querySelector('#view');
    if (button.innerHTML=='View more') {
        document.querySelector('.it3').style.display='block';
        document.querySelector('#view').innerHTML='View less';
    }
    else {
        document.querySelector('.it3').style.display='none';
    document.querySelector('#view').innerHTML='View more';
    }
    }
// chinh nut hoat dong
function showInfo3() {
    var button = document.querySelector('#view3');
    if (button.innerHTML=='View more') {
        document.querySelector('.jit3').style.display='block';
        document.querySelector('#view3').innerHTML='View less';
    }
    else {
        document.querySelector('.jit3').style.display='none';
        document.querySelector('#view3').innerHTML='View more';
    }
}
// chinh nut ky nang
function showInfo4() {
    var button = document.querySelector('#view4');
    if (button.innerHTML=='View more') {
        document.querySelector('.skill-lang').style.display='block';
        document.querySelector('#view4').innerHTML='View less';
    }
    else {
        document.querySelector('.skill-lang').style.display='none';
        document.querySelector('#view4').innerHTML='View more';
    }
}
//chinh nut hoc van 
function showInfo5() {
    var button = document.querySelector('#view5');
    if (button.innerHTML=='View more') {
        document.querySelector('.j5').style.display='block';
        document.querySelector('#view5').innerHTML='View less';
    }
    else {
        document.querySelector('.j5').style.display='none';
        document.querySelector('#view5').innerHTML='View more';
    }
}
// chinh nut ngn ngu
function showInfo6() {
    var button = document.querySelector('#view6');
    if (button.innerHTML=='View more') {
        document.querySelector('.j6').style.display='block';
        document.querySelector('#view6').innerHTML='View less';
    }
    else {
        document.querySelector('.j6').style.display='none';
        document.querySelector('#view6').innerHTML='View more';
    }
}
// 
function showInfo7() {
    var button = document.querySelector('#view7');
    if (button.innerHTML=='View more') {
        document.querySelector('.j7').style.display='block';
        document.querySelector('#view7').innerHTML='View less';
    }
    else {
        document.querySelector('.j7').style.display='none';
        document.querySelector('#view7').innerHTML='View more';
    }
}