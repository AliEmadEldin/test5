var myForm = document.getElementById('myForm')

myForm.addEventListener('input' , function(e){
    switch(e.target.id){
        case 'name':
            checkName(e.target)
            break

        case 'email':
            checkEmail(e.target)
            break
        
        case 'password':
            checkPassword(e.target)
            break

    }
})


function checkName(inp){
    console.log(inp.value)
    var inputValue = inp.value.trim()
    if(inputValue.length < 3) showError(inp , 'less than 3 charater' )
    else removeError(inp)
}

function checkEmail(inp){
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(reg.test(inp.value));
    (reg.test(inp.value)) ? removeError(inp) : showError(inp , 'invalid email')
}

function checkPassword(inp){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    (strongRegex.test(inp.value)) ? removeError(inp) : showError(inp , '1 lower character , 1 upper character , 1 special , at least 8 character')

}


function showError(element , msg){
    element.nextElementSibling.innerText = msg
    element.nextElementSibling.classList.add('text-danger')
}
function removeError(element){
    element.nextElementSibling.innerText = ''
}