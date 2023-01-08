# NgProjectTemplate

NgProjectTemplate is a template for starting new Angular projects.

## Features

* ✅ [Angular](https://angular.io/) 15
* ✅ [Routing](https://angular.io/guide/routing-overview) with [lazy loading](https://angular.io/guide/lazy-loading-ngmodules)
* ✅ [Shared Module](https://angular.io/guide/sharing-ngmodules)
* ✅ [ngx-translate](https://github.com/ngx-translate/core)
* ✅ [SCSS](https://sass-lang.com/)
* ✅ [Tailwind CSS](https://tailwindcss.com/)
* ✅ [NgRx](https://ngrx.io/)
* ✅ [ESLint](https://eslint.org/)
* ✅ [Environments](https://angular.io/guide/build#configuring-application-environments)

## Installation

1. Clone the repository
2. Navigate to the project folder (`cd NgProjectTemplate`)
2. Run `npm i` to install dependencies

## Manual

### Pages

Pages are components in the folder `src/app/pages`. Each page has its own subfolder.

### Create a new Page

The following command generates the component for the page:

```ng g c pages/NewPage```

Add the route to the new page component to the routes file (`src/app/routes.ts`):

```typescript
...
const routes: Routes = [
  ...
  {
    path: 'new-page',
    loadComponent: () => import('./pages/new-page/new-page.component').then(m => m.NewPageComponent),
  },
  ...
];
...
```

The page can now be reached at `http://localhost:4200/new-page`.

## Default Angular Readme

The following text is taken from the default README.md file of a new project created with [ng new](https://angular.io/cli/new).

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
