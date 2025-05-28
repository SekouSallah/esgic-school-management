import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {FuseAlertComponent, FuseAlertType} from "../../../@fuse/components/alert";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {Statut} from "../../../app/main/models/statut.model";
import {StatutService} from "../../authentication/services/statut.service";
import {MatIconModule} from "@angular/material/icon";
import {fuseAnimations} from "../../../@fuse/animations";
import {FuseLoadingBarComponent} from "../../../@fuse/components/loading-bar";

@Component({
    selector: 'app-save-statut-dialog',
    standalone: true,
    imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatOptionModule, FormsModule, FuseAlertComponent, MatButtonModule, MatDialogActions, MatIconModule, ReactiveFormsModule, MatDialogContent, MatDialogTitle, FuseLoadingBarComponent],
    templateUrl: './save-statut-dialog.component.html',
    styleUrl: './save-statut-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class SaveStatutDialogComponent implements OnInit {

    @Input({required: true}) dialog_title: string;
    @Input({required: true}) label: string;
    @Output() statuts = new EventEmitter<Array<Statut>>;
    formGroup: UntypedFormGroup;
    @Output() statutCreated = new EventEmitter<Statut>;
    @ViewChild('saveSpecNgForm') saveSpecNgForm: NgForm;
    showAlert: boolean = false;
    showLoading: boolean = true;
    errorMessage: string;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };

    constructor(
        public dialogRef: MatDialogRef<SaveStatutDialogComponent>,
        private _formBuilder: UntypedFormBuilder,
        private statutService: StatutService
    ) {
    }

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            libelle: ['', Validators.required]
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    saveStatut() {
        this.showLoading = true;
        if (this.formGroup.invalid) {
            this.showLoading = false;
            return;
        }

        this.statutService.create(this.formGroup.value).subscribe({
            next: data => {
                this.statutCreated.emit(data);
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
