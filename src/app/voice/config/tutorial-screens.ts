import { ITutorialScreen } from "src/app/shared/tutorial-dumb/tutorial";

export namespace VoiceTutorialScreens {

    export const PLUG_IN_PHONE: ITutorialScreen = {
        headerText: 'Plug In Phone',
        paragraphText: 'If you haven\'t already, plug your phone or base into an aelectrical outlet.',
        primaryCtaText: 'Next'
    }

    export const CONNECT_PHONE_CABLE: ITutorialScreen = {
        headerText: 'Plug In Phone',
        paragraphText: 'Connect one end of the phone cable to your phone, and then connect the other end to the Voice 1 port on the modem.',
        primaryCtaText: 'Next'
    }
}