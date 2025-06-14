import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider} from '@angular/core';


import {AuthService} from "../../main/services/auth.service";
import {authInterceptor} from "../../../@externals/authentication/interceptors/auth.interceptor";


export const provideAuth = (): Array<Provider | EnvironmentProviders> => {
    return [
        provideHttpClient(withInterceptors([authInterceptor])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(AuthService),
            multi: true,
        },
    ];
};
