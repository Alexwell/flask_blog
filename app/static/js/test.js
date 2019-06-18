window.addEventListener('load', main(), false);


function main(){
    var testBtn = document.querySelector('#test_js');
    testBtn.addEventListener('click', function(){console.log('JS successfully tested')}, false);
};