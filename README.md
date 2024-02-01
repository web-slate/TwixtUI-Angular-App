# TwixtUI-Angular-App
Sample Angular App in TwixtUI


```
nvm use 18
npm install -g @angular/cli
ng new TwixtUI-Angular-App --interactive
ng generate c examples/sample-header
ng generate c examples/username-input
ng generate c examples/input-single-line
ng build --configuration production --base-href "https://web-slate.github.io/TwixtUI-Angular-App/"
npm install -g angular-cli-ghpages
ng build --configuration production --base-href="https://web-slate.github.io/TwixtUI-Angular-App/"
npx angular-cli-ghpages --dir=dist/twixt-ui-angular-app/browser
```