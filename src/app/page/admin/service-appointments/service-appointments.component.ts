import { Component, OnInit } from '@angular/core';
import {ServiceAppointmentsService} from "./service-appointments.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";
import {ServiceAppointment} from "../../../models";

@Component({
  selector: 'app-service-appointments',
  templateUrl: './service-appointments.component.html',
  styleUrls: ['./service-appointments.component.css']
})
export class ServiceAppointmentsComponent implements OnInit {
  private serviceAppointments: ServiceAppointment[] = [];

  constructor(private serviceAppointmentService: ServiceAppointmentsService,private toastr: ToastrService,private router: Router, private confirmationDialogService: ConfirmationDialogService ) { }

  ngOnInit() {
    this.getAllServiceAppointments();
  }

  successmsg(){
    this.toastr.success("Your message has been successfully sent to vehicle user!",'Replied Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }
  successmsgDelete(){
    this.toastr.success("You have successfully deleted the selected service appointment!",'Successful !!!')
  }

  getAllServiceAppointments() {

    this.serviceAppointmentService.getAllServiceAppointments()
      .subscribe(
        res => {
          this.serviceAppointments = res;
          this.serviceAppointments.reverse();
          console.log(this.serviceAppointments);
        }, error => {
          console.log(error);
        }
      );
  }

  deleteSelectedServiceAppointment(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this message?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.serviceAppointmentService.deleteServiceAppointment(id)
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
              this.serviceAppointmentService.getAllServiceAppointments()
                .subscribe(
                  res => {
                    this.serviceAppointments = res;
                    this.serviceAppointments.reverse();
                    console.log(this.serviceAppointments);
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
