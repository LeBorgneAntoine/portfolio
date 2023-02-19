import About from "./About/About";
import AboutThisPortfolio from "./AboutThisPortfolio/AboutThisPortfolio";
import Project from "./Project/Project";
import Settings from "./Settings/Settings";
import Github from "./Github/Github";
import Finder from "./Finder/Finder";
import Terminal from "./Terminal/Terminal";
import Contacts from "./Contacts/Contacts";
import Launcher from "./Launcher/Launcher";

import settingsLogo from '../assets/icons/settings.png'
import safariLogo from '../assets/icons/safari.png'
import appStoreLogo from '../assets/icons/app-store.png'
import bookLogo from '../assets/icons/books.png'
import finderLogo from '../assets/icons/finder.png'
import terminalLogo from '../assets/icons/terminal.png'
import contactLogo from '../assets/icons/contacts.png'
import trashLogo from '../assets/icons/trash.png'
import launcherLogo from '../assets/icons/launcher.png'
import infoLogo from '../assets/icons/info.png'

/*
App option list:

 Functionnal: 
    - _id: task ID (open / close)
    - _default: only one can be default, it represent the focused app when no focus
    - ReactComponent: Content of the app (in the window)
    - iconPath : path to the icon (since we using React, we need to import first, see up there)
    - name : Name displayed in the Dock or Launcher
    - pined : if true it get pined in the dock
    - silent : start and run in background
    - onStartup : launch on start up
    - noWindow : if true, only the ReactComponent is render (without proper window container)
    - defaultSize: take an object with width and height (note, if to use it the window can not be maximized)
    - hidden: if true the application is not shown in launchpad
    - fixed: fixed on the right end side of the dock (ex: trash or download folder)

 Appearence: 
    - tint : use the similar principe of "Tint window" on MacOS by bluring the background and get more or less the background color
    - transparent: similar to tint but blrring is way down
    - With none of the two aboves the background stay on solid color
    - thinBar: reduce the height of the draggable bar on window, but prevente from using addition actions on it.
    - hasNavigation: 
*/



/**
 * List of the accessible application in the OS
 */
export default [
    {
        _id: 'finder',
        _default: true,
        ReactComponent: Finder,
        iconPath: finderLogo,
        name: 'Finder',
        pined: true,
        tint: true,
        silent: true,
        onStartup: true,
    },
    {
        _id: 'launcher',
        _default: true,
        ReactComponent: Launcher,
        iconPath: launcherLogo,
        name: 'Launchpad',
        pined: true,
        noWindow: true,
        hidden: true,
    },
    {
        _id: 'about',
        ReactComponent: About,
        iconPath: bookLogo,
        name: 'About me',
        pined: true,
        defaultSize: {  
            width: 500,
            height: 500
        },
        thinBar: true,
    },
    {
        _id: 'contact',
        ReactComponent: Contacts,
        iconPath: contactLogo,
        name: 'Contacts',
        pined: true,
        defaultSize: {  
            width: 500,
            height: 500
        }
    },
    {
        _id: 'web',
        ReactComponent: Github,
        iconPath: safariLogo,
        pined: true,
        name: 'Socials',
        tint: true,

    },
    {
        _id: 'project',
        ReactComponent: Project,
        iconPath: appStoreLogo,
        pined: true,
        name: 'Projects',
        tint: true,
        hasNavigation: true,
    },
    {
        _id: 'profolio',
        ReactComponent: AboutThisPortfolio,
        iconPath: infoLogo,
        name: 'About this portfolio',
        defaultSize: {  
            width: 500,
            height: 600
        },
        thinBar: true,
        
    },
    {
        _id: 'settings',
        ReactComponent: Settings,
        iconPath: settingsLogo,
        pined: true,
        name: 'System Settings',
        transparent: true,
    },
    {
        _id: 'terminal',
        ReactComponent: Terminal,
        iconPath: terminalLogo,
        pined: true,
        name: 'Terminal',
        transparent: true,
    },
    {
        _id: 'trash',
        fixed: true,
        ReactComponent: Finder,
        iconPath: trashLogo,
        name: 'Trash',
    },
]
