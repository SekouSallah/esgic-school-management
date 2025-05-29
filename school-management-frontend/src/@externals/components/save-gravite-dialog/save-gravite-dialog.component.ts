import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {FuseAlertComponent, FuseAlertType} from "../../../@fuse/components/alert";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions,  MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {Gravite} from "../../../app/main/models/gravite.model";
import {GraviteService} from "../../authentication/services/gravite.service";
import {MatIconModule} from "@angular/material/icon";
import {fuseAnimations} from "../../../@fuse/animations";
import {FuseLoadingBarComponent} from "../../../@fuse/components/loading-bar";

@Component({
    selector: 'app-save-gravite-dialog',
    standalone: true,
    imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatOptionModule, FormsModule, FuseAlertComponent, MatButtonModule, MatDialogActions, MatIconModule, ReactiveFormsModule, MatDialogContent, MatDialogTitle, FuseLoadingBarComponent],
    templateUrl: './save-gravite-dialog.component.html',
    styleUrl: './save-gravite-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class SaveGraviteDialogComponent implements OnInit {

    @Input({required: true}) dialog_title: string;
    @Input({required: true}) label: string;
    @Output() gravites = new EventEmitter<Array<Gravite>>;
    formGroup: UntypedFormGroup;
    @Output() graviteCreated = new EventEmitter<Gravite>;
    @ViewChild('saveSpecNgForm') saveSpecNgForm: NgForm;
    showAlert: boolean = false;
    showLoading: boolean = true;
    errorMessage: string;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };

    constructor(
        public dialogRef: MatDialogRef<SaveGraviteDialogComponent>,
        private _formBuilder: UntypedFormBuilder,
        private graviteService: GraviteService
    ) {
    }

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            libelle: ['', Validators.required],
            montant: [0, Validators.required]
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveGravite() {
        this.showLoading = true;
        if (this.formGroup.invalid) {
            this.showLoading = false;
            return;
        }

        this.graviteService.create(this.formGroup.value).subscribe({
            next: data => {
                this.graviteCreated.emit(data);
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
