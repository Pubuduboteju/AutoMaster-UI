import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GeneralUserMessage} from "../../../models";
import {StayInTouchService} from "./stay-in-touch.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stay-in-touch',
  templateUrl: './stay-in-touch.component.html',
  styleUrls: ['./stay-in-touch.component.css']
})
export class StayInTouchComponent implements OnInit {
  generalUserMessageForm: FormGroup;
  private generalUserMessage:GeneralUserMessage[] = [];

  constructor(private stayInTouchService: StayInTouchService,private formBuilder: FormBuilder, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.generalUserMessageForm = this.formBuilder.group(
      {
        'firstName': [null, Validators.compose([Validators.required])],
        'lastName': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required])],
        'subject': [null, Validators.compose([Validators.required])],
        'message': [null, Validators.compose([Validators.required])],
        'isReplied': [false, Validators.compose([Validators.required])],
      });
  }

  successmsg(){
    this.toastr.success("You have successfully sent your message, we will reply you soon!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }

  onSendGeneralUserMessage(value: any){
    console.log(value);
    value.emailType = 'generalUserMessage';
   const emailSendData = value;
    this.stayInTouchService.create(value)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            ///////////
            value.senderEmail = value.email;
            emailSendData.email = "automastervehicleconsultancy@gmail.com"
            this.stayInTouchService.createEmail(emailSendData)
              .subscribe(
                res => {
                  console.log(res);
                }, error => {
                  console.log(error);
                }
              );
            ///////////
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.generalUserMessageForm = this.formBuilder.group(
            {
              'firstName': [null, Validators.compose([Validators.required])],
              'lastName': [null, Validators.compose([Validators.required])],
              'email': [null, Validators.compose([Validators.required])],
              'subject': [null, Validators.compose([Validators.required])],
              'message': [null, Validators.compose([Validators.required])],
              'isReplied': [false, Validators.compose([Validators.required])],
            });
        }, error => {
          console.log(error);
        }
      );

  }

}
