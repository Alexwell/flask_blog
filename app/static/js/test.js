window.addEventListener('load', main(), false)


function main(){
    testBtn = document.querySelector('#test_js')
    testBtn.addEventListener('click', function(){console.log('JS successfully tested')}, false)
}