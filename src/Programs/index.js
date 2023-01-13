import About, {AboutIcon} from "./About/About";
import AboutThisPortfolio from "./AboutThisPortfolio/AboutThisPortfolio";
import Project, {ProjectIcon} from "./Project/Project";
import Settings, {SettingsIcon} from "./Settings/Settings";

export default [
    {
        _id: 'about',
        ReactComponent: About,
        IconComponent: AboutIcon,
        name: 'About me',
        pined: true,
        iconColor: '',
        defaultSize: {  
            width: 500,
            height: 500
        }
    },
    {
        _id: 'project',
        ReactComponent: Project,
        IconComponent: ProjectIcon,
        pined: true,
        name: 'Projects',
        iconColor: '',
        transparent: true
    },
    {
        _id: '_project',
        ReactComponent: Project,
        IconComponent: ProjectIcon,
        pined: false,
        name: 'My projects',
        iconColor: '',
        transparent: true
    },
    {
        _id: 'profolio',
        ReactComponent: AboutThisPortfolio,
        IconComponent: ProjectIcon,
        pined: true,
        name: 'About this portfolio',
        iconColor: '',
        defaultSize: {  
            width: 300,
            height: 500
        },
        
    },
    {
        _id: 'setting',
        ReactComponent: Settings,
        IconComponent: SettingsIcon,
        pined: true,
        name: 'Settings',
        iconColor: '',
        transparent: true,
    }
]