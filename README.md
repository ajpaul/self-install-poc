# Self Install Config-driven POC

## Decisions
- Do not use the term `router` in this application, as it creates confusion with the Angular/Ionic router functionality. Use `wifi` instead.
- Route changes should drive the config-swapping for the checklist.
- Configs for checklist should be stored locally in a `.ts` file and not in the NgRx store

## Modules
This project contains a shared module for dumb components, so they can be referenced anywhere in the application without them clogging up the app module. There also is a feature module for each LOB, each with their own respective router modules to isolate complexity. This also enables lazy loading as seen in the app-routing.module.ts

## Checklist
*the implementation in this project differs slightly from what we discussed, since this project currently shows a smart component for each LOB's checklist, which references an injected dumb component. This works, although further optimizations are listed below.*

As of March 27, the approach we landed on having a dumb, configuration-driven checklist tied to the current route. Checklist config should be stored in a `*.ts` file as a `const` with all uppercase letters to denote it is a constant. The contents of that file can also be exported as a `namespace`. There are three ways for the dumb component to retrieve the correct configuration:

- pass in an optional [static data](https://www.tektutorialshub.com/angular/angular-pass-data-to-route/) configuration into the route config and read with `ActivatedRoute`, such as this: `{ path:  'modem/checklist', component:  TutorialComponent, data: { lob:  'modem'} },`
- either use `ActivatedRoute` to read the URL parameters and determine if the `/checklist` URL is in the context of a modem, router, etc (although this is slightly harder given the structure of the URL)
- retrieve the line of business for the current journey from NgRx (would require injecting a service, which is not necessary here and would complicate the component unnecessarily) 

This also would warrant a dedicated checklist route in each feature modules' router config:
<code>{ path:  'checklist', component:  ChecklistComponent }</code>

## Routes
The app module's routing config will likely only contain component routes for `agreements` and `equipment-list`. After that, there should be a route for a feature module for each line of business that is lazy loaded. This could include `modem`, `wifi`, `receiver`, `voice`, and `pod`. 

Within the feature module for a given LOB, there should be a `checklist` route, a parameterized route for the tutorial such as `modem/:tutorial`, a URL for the `activate` component, and whatever smart components are needed. **Configuration steps have not been architected yet**.
