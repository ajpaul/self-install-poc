export interface IChecklist {
    headerText: string;
    paragraphText: string;
    listItems: IChecklistItems[];
    buttonText: string;
    nextRoute?: string; // sometimes the first screen is the same every time, like Routers
}

export interface IChecklistItems {
    imagePath: string;
    itemText: string;
    subText?: string;
    tooltipText?: string;
}