
var btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click',function() {
    var test = document.getElementById('todo').value
    console.log(test)
})

var checkboxValue = document.getElementById('active').checked

if(checkboxValue){
    console.log('da check')
}else{
    console.log('chua check')
}



