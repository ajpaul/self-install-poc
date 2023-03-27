import { IChecklist } from "src/app/shared/checklist-dumb/checklist"

export const WIFI_CHECKLIST: IChecklist = {
    headerText: 'Set Up Router',
    paragraphText: 'Activation usually takes about 5 minutes, but can take up to 20 minutes.',
    listItems: [
        {
            imagePath: 'path1',
            itemText: 'Ethernet Cable'
        },
        {
            imagePath: 'path2',
            itemText: 'Power Cable'
        },
        {
            imagePath: 'path3',
            itemText: 'Spectrum Router'
        }
    ],
    buttonText: 'Set Up Router',
    nextRoute: 'connect-ethernet-cable'
}