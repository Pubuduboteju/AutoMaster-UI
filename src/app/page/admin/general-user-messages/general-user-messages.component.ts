import { Component, OnInit } from '@angular/core';
import {GeneralUserMessage} from "../../../models";
import {GeneralUserMessagesService} from "./general-user-messages.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: 'app-general-user-messages',
  templateUrl: './general-user-messages.component.html',
  styleUrls: ['./general-user-messages.component.css']
})
export class GeneralUserMessagesComponent implements OnInit {
  generalUserMessageReplyForm: FormGroup;
  private generalUserMessages: GeneralUserMessage[] = [];

  constructor(private generalUserMessagesService: GeneralUserMessagesService, private formBuilder: FormBuilder,private toastr: ToastrService,private router: Router, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getAllGeneralUserMessages();

    this.generalUserMessageReplyForm = this.formBuilder.group(
      {
        'firstName': [null, Validators.compose([Validators.required])],
        'lastName': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required])],
        'subject': [null, Validators.compose([Validators.required])],
        'message': [null, Validators.compose([Validators.required])],
      });
  }

  successmsg(){
    this.toastr.success("Your message has been successfully sent to vehicle user!",'Replied Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }

  successmsgDelete(){
    this.toastr.success("You have successfully deleted the message!",'Successful !!!')
  }

  getAllGeneralUserMessages() {

    this.generalUserMessagesService.getAllGeneralUserMessages()
      .subscribe(
        res => {
          this.generalUserMessages = res;
          this.generalUserMessages.reverse();
          console.log(this.generalUserMessages);
        }, error => {
          console.log(error);
        }
      );
  }

  setValuesGeneralUserMessageForm(data: GeneralUserMessage){
    this.generalUserMessageReplyForm = this.formBuilder.group(
      {
        'id': [data.id, Validators.compose([Validators.required])],
        'firstName': [data.firstName, Validators.compose([Validators.required])],
        'lastName': [data.lastName, Validators.compose([Validators.required])],
        'email': [data.email, Validators.compose([Validators.required])],
        'subject': [data.subject, Validators.compose([Validators.required])],
        'message': [null, Validators.compose([Validators.required])],
      });
  }

  onSendGeneralUserMessageReply(value: any, value2: any){
    value.emailType = 'generalUserMessageAdminReply';
    console.log(value);
    this.generalUserMessagesService.createReply(value)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            /////////
            value2.isReplied = true;
            console.log(value2);
            this.generalUserMessagesService.updateGeneralUserMessage(value2)
              .subscribe(
                res2 => {
                  console.log(res2);
                }, error => {
                  console.log(error);
                }
              );

            /////////
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          window.location.reload();
        }, error => {
          console.log(error);
        }
      );

  }

  deleteSelectedGeneralUserMessage(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this message?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.generalUserMessagesService.deleteGeneralUserMessage(id)
          .subscribe(
            res => {
              // this.userCars = res;
              console.log(res);
              if(res.statusDescription == 'Success'){
                this.successmsgDelete();
              }else{
                this.errorsmsg();
              }
              // window.location.reload();
              ///////////////////
              this.generalUserMessagesService.getAllGeneralUserMessages()
                .subscribe(
                  res => {
                    this.generalUserMessages = res;
                    this.generalUserMessages.reverse();
                    console.log(this.generalUserMessages);
                  }, error => {
                    console.log(error);
                  }
                );
              ///////////////////
            }, error => {
              console.log(error);
            }
          );
      }})
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }


}
