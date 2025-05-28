import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseAlertComponent, FuseAlertType} from "../../../@fuse/components/alert";
import {FuseLoadingBarComponent} from "../../../@fuse/components/loading-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {fuseAnimations} from "../../../@fuse/animations";
import {Quartier} from "../../../app/main/models/quartier.model";
import {QuartierService} from "../../authentication/services/quartier.service";

@Component({
  selector: 'app-save-quartier-dialog',
  standalone: true,
    imports: [CommonModule, FuseAlertComponent, FuseLoadingBarComponent, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './save-quartier-dialog.component.html',
  styleUrl: './save-quartier-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class SaveQuartierDialogComponent implements OnInit{

    @Input({required: true}) dialog_title: string;
    @Input({required: true}) label: string;
    @Output() quartiers = new EventEmitter<Array<Quartier>>;
    formGroup: UntypedFormGroup;
    @Output() quartierCreated = new EventEmitter<Quartier>;
    @ViewChild('saveSpecNgForm') saveSpecNgForm: NgForm;
    showAlert: boolean = false;
    showLoading: boolean = true;
    errorMessage: string;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };

    constructor(
        public dialogRef: MatDialogRef<SaveQuartierDialogComponent>,
        private _formBuilder: UntypedFormBuilder,
        private quartierService: QuartierService
    ) {
    }

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            nom: ['', Validators.required]
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveQuartier() {
        this.showLoading = true;
        if (this.formGroup.invalid) {
            this.showLoading = false;
            return;
        }

        this.quartierService.create(this.formGroup.value).subscribe({

            next: data => {
                this.quartierCreated.emit(data);
                this.dialogRef.close();
                this.showLoading = false;
            },
            error: (err) => {
                if (err.status) {
                    this.showLoading = false;
                    this.alert.message = err.error.message || err.error;
                    this.alert.type = "error";
                    this.showAlert = true;
                } else {

                    this.showLoading = false;
                    this.alert.message = "Erreur de connexion";
                    this.alert.type = "warning";
                    this.showAlert = true;
                }

            }
        })
    }
}
