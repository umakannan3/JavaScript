class FormValidation{
    formValues = {
        username : "",
        email : "",
        phone : "",
        password : "",
        confirmpassword : ""
    }
    errorValues={
        usernameErr : "",
        emailErr : "",
        phoneErr : "",
        passwordErr : "",
        confirmpasswordErr : ""
    }
    showErrorMsg(index, message){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error');
        form_group.getElementsByTagName('span')[0].textContent = message
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.username = document.getElementById("username").value.trim()
        this.formValues.email = document.getElementById("email").value.trim()
        this.formValues.phone = document.getElementById("phone").value.trim()
        this.formValues.password = document.getElementById("password").value.trim()
        this.formValues.confirmpassword = document.getElementById("confirmpassword").value.trim()
    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please enter ur Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(this.formValues.username.length <= 4){
            this.errorValues.usernameErr ="* UserName mustbe alteast 5 characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* UserName shouldnot exceeds 20 characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        }else{
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        const RegExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues.email === ""){
            this.errorValues.emailErr = " * Please Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else if(!(RegExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* InValid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }else{
            this.showErrorMsg.emailErr = "";
            this.showSuccessMsg(1);
        }      
    }
    validatePhone(){
        const phoneExp = /^[6-9]{1}[0-9]{9}$/;
        if(this.formValues.phone === ""){
            this.errorValues.phoneErr = "* Please Enter ur Phoneno"
            this.showErrorMsg(2,this.errorValues.phoneErr);
        } else if(!(phoneExp.test(this.formValues.phone))){
            this.errorValues.phoneErr ="* Please Enter Valid Phoneno"
            this.showErrorMsg(2,this.errorValues.phoneErr)
        } else{
            this.showErrorMsg = "";
            this.showSuccessMsg(2);
        }
    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(3)
        }
    }
    validateConfirmPassword(){
        if(this.formValues.confirmpassword === ""){
            this.errorValues.confirmpasswordErr = "* Invalid Confirm Password"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        } else if(this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === ""){
            this.errorValues.confirmpasswordErr = ""
            this.showSuccessMsg(4)
        } else if(this.errorValues.passwordErr){
            this.errorValues.confirmpasswordErr = "* An error occurred in Password Field"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        } else {
            this.errorValues.confirmpasswordErr = "* Password Must Match"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
        }
    }
    alertMessage(){
        const {usernameErr , emailErr , phoneErr , passwordErr , confirmpasswordErr}= this.errorValues
        if(usernameErr === "" && emailErr === "" && phoneErr === "" && passwordErr === "" && confirmpasswordErr === ""){
            alert("Registration Successful","ThankYou , "+this.formValues.username,"success")
                console.log(this.formValues)
                this.removeInputs()     
        } else {
            alert("Give Inputs, Click ok to Continue")
        }
    }
    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
}

const ValidateUserInputs = new FormValidation();

document.getElementsByClassName('form')[0].addEventListener('submit' , event =>{
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhone()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateConfirmPassword()
    ValidateUserInputs.alertMessage()
})
