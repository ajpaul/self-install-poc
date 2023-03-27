import { ITutorialScreen } from "src/app/shared/tutorial-dumb/tutorial";

// all of this would need to be copy keys so copy could be dynamic
// router seems to have two versions of a lottie, one for wave 2 and one for wifi 6e. How would we differentiate?
export namespace WifiTutorialScreens {

   export const CONNECT_ETHERNET_CABLE: ITutorialScreen = {
        headerText: 'Connect Ethernet Cable',
        paragraphText: 'Connect one end of the Ethernet cable and yoru modem, and the other end of your router. You should hear a click when you connect each end.',
        primaryCtaText: 'Next'
   } 

   export const CONNECT_POWER_CABLE: ITutorialScreen = {
        headerText: 'Connect Power Cable',
        paragraphText: 'Connect one end of the power cable to your router and plug in the other end into an electrical outlet',
        primaryCtaText: 'Next'
   } 

   // swaps
   export const DISCONNECT_CABLES: ITutorialScreen = {
        headerText: 'Disconnect Cables',
        paragraphText: 'Disconnect the ethernet cable from your current router. Unplug the router from the electrical outlet and set aside.',
        primaryCtaText: 'Continue'
   }

   // swaps
   export const RESTART_MODEM: ITutorialScreen = {
        headerText: 'Restart Modem',
        paragraphText: 'Ensure your router is disconnected and unplug your modem for 10 seconds, plug it back in and wait 5 minutes for the modem to come back online.',
        primaryCtaText: 'Continue'
   }
}