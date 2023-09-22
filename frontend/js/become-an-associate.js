let send = document.getElementById('send');

let option="Dealers";
const radioContainer = document.getElementById('radioContainer');
// Add a click event listener to the container
radioContainer.addEventListener('click', function(event) {
  if (event.target.type === 'radio') {
    option=event.target.value;
  }
});

let name = document.getElementById('name');
let companyname = document.getElementById('companyname');
let natureofbusiness = document.getElementById('natureofbusiness');
let designation = document.getElementById('designation');
let mobilenumber = document.getElementById('mobilenumber');
let emailid = document.getElementById('emailid');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let message = document.getElementById('message');

async function senddata(event) {
    event.preventDefault();

    let userdata = {
        option,
        name: name.value,
        companyname: companyname.value,
        natureofbusiness: natureofbusiness.value,
        designation: designation.value,
        mobilenumber: mobilenumber.value,
        emailid: emailid.value,
        address: address.value,
        pincode: pincode.value,
        message: message.value,
    }
    console.log(userdata);
    const exp = await axios.post('http://localhost:3000/user/associatedetail', userdata);
    console.log(exp.data.status);
    if (exp.data.status === true) {
        showstatus();
        console.log('got hit');
    }

}

function showstatus() {
    options.value ='';
    name.value = '';
    companyname.value = '';
    natureofbusiness.value = '';
    designation.value = '';
    mobilenumber.value = '';
    emailid.value = '';
    address.value = '';
    pincode.value = '';
    message.value = '';
}
