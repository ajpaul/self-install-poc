export interface IActivate {
    headerText: string;
    paragraphText: string[];
    buttonText: string;
    nextRoute?: string; // sometimes the first screen is the same every time, like Routers
}

// this would also need an interface for error states