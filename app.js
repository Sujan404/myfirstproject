/**javaScript for slides
---------------------------------------------------------------------------
*/
var slideIndex=1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex+=n);
}
function currentDiv (n){
    showDivs(slideIndex=n);
}
function showDivs(n){
    var i;
    var x=document.getElementsByClassName("nav-customer-feedback-col");
    var dots=document.getElementsByClassName("slideBtn");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
   x[slideIndex-1].style.display="flex";
   dots[slideIndex-1].className +=" active";
}
/**javaScript for images
--------------------------------------------------------------------------
*/
showSlides(slideIndex);

function modalFunction(imgs){
    var modal = document.getElementById("myModal");
    var img = document.getElementsByClassName("image-slide");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgs.src;
}
    function plusSlides(n){
        var container=document.getElementById("container");
        var position= document.getElementsByClassName("image-slide");
        showSlides(slideIndex+=n);
        if(n==1){
            container.scrollLeft+=100;
        }else{
            container.scrollLeft-=100;
        }
    }
    function currentSlide(n){
        showSlides(slideIndex=n);
    }
    function showSlides(n){
        var i;
        var position= document.getElementsByClassName("image-slide");
        for(i=0;i<position.length;i++){
            position[i].className=position[i].className.replace(" active","");
        }
        position[slideIndex-1].className+=" active";
        }
/**JavaScript for form 1
------------------------------------------------------------------------------
*/
        var form=document.getElementById('form');
        var personname=document.getElementById('name');
        var email=document.getElementById('email');
        var number=document.getElementById('number');
        var message=document.getElementById('message');

        
      form.addEventListener('submit', e => {
	    e.preventDefault();
	
	    checkInputs();
        });
        number.addEventListener('input',function(e){
            var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
        
       
        function checkInputs(){
            // get the values from the inputs
            var usernameValue=personname.value.trim();
            var useremailValue=email.value.trim();
            var usernamberValue=number.value.trim();
            var usermessageValue=message.value.trim();

            if(usernameValue=== ''){
                // show error
                // add error class
                setErrorFor(personname,'Username cannot be blank');
            }else{
                // add success class
                setSuccessFor(personname);
            }
            if(useremailValue === '') {
                setErrorFor(email, 'Email cannot be blank');
            } else if (!isEmail(useremailValue)) {
                setErrorFor(email, 'Not a valid email');
            } else {
                setSuccessFor(email);
            }

            if (usernamberValue===''){
                setErrorFor(number,"Number cannot be blank");
            }else if(!isNumber(usernamberValue)){
                alert(usernamberValue);
                setErrorFor(number,'Not a valid number');
            }else if(isNumber(usernamberValue)){
                setSuccessFor(number);
                }

            if(usermessageValue===''){
                setErrorFor(message,"Message cannot be blank");
            }else{
                setSuccessFor(message);
            }
        }
        
        function setErrorFor(input, message){
            const formControl=input.parentElement; //.form-control
            const small=formControl.querySelector('small');
            // add error class
            formControl.className='form-control error';
            // add error message inside small
            small.innerText = message;
        }
        function  setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
        function isNumber(number){
            return /^-?\d+$/.test(number.replace(/\D/g, ''));
        }
       
/**jQuery for form2
 * ------------------------------------------------------------------------ 
 */
var form2=$('#form2');
var form2Name=$('#form2-name').value.trim();
var form2Email=$('#form2-email');
var form2Number=$('#form2-number');
var form2TypeOfService=$('#form2-typeOfService');
var form2Help=$('#form2-help');
var form2Button=$('#submit-request');
// $('#form2-name').focus
// form2Name.(function(){
    
//     if (!checkName(form2Name)){
//         Form2SetErrorFor(form2Name,"Invalid name");
//     }
// });
function Form2SetErrorFor(input,message){
    const formControl=input.parentElement; //.form-control
    const small=formControl.querySelector('small');
    // add error class
    formControl.className='form2-control error';
    // add error message inside small
    small.innerText = message;
}

function checkName(name){
    return  /^[a-xA-Z]*$/;
}
