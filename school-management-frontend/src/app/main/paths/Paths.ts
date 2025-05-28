export class Paths {
    private static dashboardRoute = "/aqua-sentry/dashboard";
    private static loginRoute = "/sign-in";

    public static dashboard(): string {
        return this.dashboardRoute;
    }

    public static login(): string {
        return this.loginRoute;
    }

}
