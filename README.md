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

A page is characterized by:

* its own module
* a routing module
* not declared in the app module

### Create a new Page

The next command generates the component for the page, 

```ng g c pages/NewPage --skip-import```

Create the file `new-page.module.ts` in the generated folder of the page (`/src/app/pages/new-page/new-page.module.ts`) and add the following content:

```typescript
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewPageRoutingModule } from './new-page-routing.module';
import { NewPageComponent } from './new-page.component';

@NgModule({
  declarations: [
    NewPageComponent,
  ],
  imports: [
    SharedModule,
    NewPageRoutingModule,
  ],
  exports: [
    NewPageComponent,
  ],
})
export class NewPageModule { }
```

Create the file `new-page-routing.module.ts` in the folder of the component (`/src/app/pages/new-page/new-page-routing.module.ts`) with the follwing content:

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPageComponent } from './new-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPageRoutingModule { }
```

Add the route to NewPage to the app routing module (`src/app/app-routing.module.ts`) between the paths `''` and `**`:

```typescript
...
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'new-page',
    loadChildren: () => import('./pages/new-page/new-page.module').then(m => m.NewPageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
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
