import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'task';
  submitted=false;
  reactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  
 
cities=['karachi','Lahore','Peshawar','Rawalpindi']
  ngOnInit(){
    
 this.reactiveForm = new FormGroup({
    personalDetails:new FormGroup({
    firstname: new FormControl(null,Validators.required),
    age: new FormControl(null,Validators.required),
  }),
  address: new FormArray([
    new FormGroup({
      add: new FormControl('',Validators.required),
    })
    
  ]),

  selectCity: new FormControl('select your city',{})
    })

  }
onSubmit(){
  this.submitted = true;
  console.log(this.reactiveForm);
  console.log(this.reactiveForm.value);
 
  if(this.reactiveForm.invalid){  
   alert("First fill all the Fields");
  }else
  alert("sucessfully submitted");
}

// onSubmit() {
//   if (this.reactiveForm.invalid) {
//     // Display a general error message
//     alert("Please fill the form before submitting.");

//     // You can also display individual error messages for each form control, if desired
//     if (this.reactiveForm.get('firstname').invalid) {
//       alert("Please provide a valid name.");
//     }
//     if (this.reactiveForm.get('age').invalid) {
//         alert("age is required.");
//       } 
//       else if (this.reactiveForm.get('address').errors['address']) {
//         alert("Please provide a valid address.");
//       }
//       else if (this.reactiveForm.get('selectCity').errors['selectCity']) {
//         alert("Please select a city");
//       }
//     }
    

//     // Additional handling for other form controls and errors as needed

//     return;
//   }

//   // // Proceed with valid form submission
//   // const formData = this.reactiveForm.value;
  
//   // Simulate a form submission by displaying the submitted data
//   // alert("Form submitted successfully!\n\n" + JSON.stringify(formData));



//Form Array
addAddress(){
  const control = new FormGroup({
    add: new FormControl('',Validators.required),
  
  });
  return(<FormArray>this.reactiveForm.get('address')).push (control);
 }

removeAddress(index:number) {
  const addressArray = this.reactiveForm.get('address') as FormArray;
  addressArray.removeAt(index);
}

}
