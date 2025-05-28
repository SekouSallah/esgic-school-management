import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {AbstractControl, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {DialogService} from "../../../../../../main/helpers/dialog/dialog.service";
import {ActivatedRoute} from "@angular/router";
import {FuseAlertComponent, FuseAlertType} from "../../../../../../../@fuse/components/alert";
import {PhoneSeparatorDirective} from "../../../../../../main/helpers/directives/phone-input.directive";
import {UtilisateurEntity} from "../../../../../../main/Utils/utilisateur.page";
import {UtilisateurService} from "../../../../../../../@externals/authentication/services/utilisateur.service";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return {passwordMismatch: true};
    }
    return null;
};

@Component({
    selector: 'app-save-utilisateur',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, ReactiveFormsModule, FuseAlertComponent, PhoneSeparatorDirective],
    templateUrl: './save-utilisateur.component.html',
    styleUrl: './save-utilisateur.component.scss'
})
export class SaveUtilisateurComponent implements OnInit {

    saveUserForm: UntypedFormGroup;
    user: UtilisateurEntity;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;
    showLoading: boolean = true;

    constructor(private _fb: UntypedFormBuilder,
                private userService: UtilisateurService,
                private _dialogService: DialogService,
                private activatedRoute: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {

        this.activatedRoute.data.subscribe({
            next: data => {
                if (data.data) {
                    //this.profiles = data.data[1];
                }
            }
        });
        this.saveUserForm = this._fb.group({
            step1: this._fb.group({
                prenom: ['', [Validators.required]],
                nom: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                telephone: ['', [ Validators.required]]
            }),

            step2: this._fb.group({
                username: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]

            }, {validators: passwordMatchValidator}),
        });

    }

    saveUser() {
        if (this.saveUserForm.invalid) {
            return;
        }

        let user: any = {
            firstName: this.saveUserForm.get('step1').get('prenom').value,
            lastName: this.saveUserForm.get('step1').get('nom').value,
            email: this.saveUserForm.get('step1').get('email').value,
            username: this.saveUserForm.get('step2').get('username').value,
            password: this.saveUserForm.get('step2').get('password').value,
            profile: this.saveUserForm.get('step2').get('profile').value,
            tel: this.saveUserForm.get('step1').get('tel').value
        };
        this.userService.saveUser(user).subscribe({
            next: data => {
                this.showAlert = false;
                this._dialogService.openDialog("Utilisateur enregistré avec succès!", true);
                console.log("user saved successfully");
                this.goBack();
            },
            error: err => {
                console.log("erreur d'ajout de l'utilisateur");
                this.alert.message = err.error.message || err.error;
                this.alert.type = 'error';
                this.showAlert = true;
            }
        });
    }

    goBack() {
        this.location.back();
    }

}
