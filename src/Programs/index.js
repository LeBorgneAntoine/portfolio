import About, {AboutIcon} from "./About/About";
import AboutThisPortfolio from "./AboutThisPortfolio/AboutThisPortfolio";
import Project, {ProjectIcon} from "./Project/Project";
import Settings, {SettingsIcon} from "./Settings/Settings";
import Github from "./Github/Github";
import Finder from "./Finder/Finder";
import Terminal from "./Terminal/Terminal";
import Contacts from "./Contacts/Contacts";

import mailLogo from '../assets/icons/mail.png'
import settingsLogo from '../assets/icons/settings.png'
import contacts from '../assets/icons/mail.png'
import safariLogo from '../assets/icons/safari.png'
import appStoreLogo from '../assets/icons/app-store.png'
import bookLogo from '../assets/icons/books.png'
import finderLogo from '../assets/icons/finder.png'
import terminalLogo from '../assets/icons/terminal.png'
import contactLogo from '../assets/icons/contacts.png'
import trashLogo from '../assets/icons/trash.png'



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
        _id: 'about',
        ReactComponent: About,
        iconPath: bookLogo,
        name: 'About me',
        pined: true,
        defaultSize: {  
            width: 500,
            height: 500
        }
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

    },
    {
        _id: '_project',
        ReactComponent: Project,
        pined: false,
        name: 'My projects',
        transparent: true
    },
    {
        _id: 'profolio',
        ReactComponent: AboutThisPortfolio,
        iconPath: settingsLogo,
        name: 'About this portfolio',
        defaultSize: {  
            width: 500,
            height: 600
        },
        
    },
    {
        _id: 'setting',
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
        ReactComponent: Finder,
        iconPath: trashLogo,
        name: 'Trash',
        pined: true,
        tint: true,
    },
]
