import { IChecklist } from "src/app/shared/checklist-dumb/checklist"

export const VOICE_CHECKLIST: IChecklist = {
    headerText: 'Set Up Voice',
    paragraphText: 'Activation usually takes about 3 minutes, but can take up to 8 minutes.',
    listItems: [
        {
            imagePath: 'path1',
            itemText: 'Telephone Cable'
        },
        {
            imagePath: 'path2',
            itemText: 'Spectrum Modem'
        },
        {
            imagePath: 'path3',
            itemText: 'Analog Telephone',
            subText: '(Not included)'
        }
    ],
    buttonText: 'Set Up Voice',
    nextRoute: 'plug-in-phone'
}