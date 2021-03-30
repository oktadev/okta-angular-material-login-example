# Angular Material Login Example

This example app shows how to create an app with Angular Material and add a fully-functional Login form to it.

Please read [Build a Beautiful App + Login with Angular Material](https://developer.okta.com/blog/2020/01/21/angular-material-login) to see how this app was created.

**Prerequisites:**

* [Node 12+](https://nodejs.org/en/) installed
* An [Okta Developer Account](https://developer.okta.com/signup)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-angular-material-login-example.git
cd okta-angular-material-login-example
npm install
```

### Create an OIDC App on Okta

Before you begin, you'll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Change the Redirect URI to `http://localhost:4200/login` and accept the default Logout Redirect URI of `http://localhost:4200`.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for `http://localhost:4200`. You will see output like the following when it's finished:

```
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```

**NOTE:** You can also use the Okta Admin Console to create your app. See [Create an Angular App](https://developer.okta.com/docs/guides/sign-into-spa/angular/create-okta-application/) for more information.

### Configure your Okta Settings

Copy your org URL and client ID into `src/app/auth.service.ts`:

```js
private authClient = new OktaAuth({
  issuer: 'https://{YourOktaDomain}/oauth2/default',
  clientId: '{ClientId}'
});
```

Start everything with `ng serve` and you'll be able to login with Angular Material and Okta!

## Links

This example uses the following open source libraries:

* [Angular](https://angular.io)
* [Okta Auth JavaScript SDK](https://github.com/okta/okta-auth-js)

## Help

Please post any questions as issues in this repository, or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
