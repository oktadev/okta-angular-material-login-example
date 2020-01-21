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

Register a new application by going to **Applications** > **Add Application**. On the next screen, choose **Single Page App** and click **Next**.

On the following screen, you can edit the application's settings. Make sure that the port number is 4200 and the base URI is `http://localhost:4200/`. Change the Login Redirect URI to `http://localhost:4200/login`. Once you are done, you will see a **Client ID**.

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
