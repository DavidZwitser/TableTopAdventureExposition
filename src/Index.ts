import './index.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

import ImageImporter from './data_handling/ImageImporter';

import Body, { IContentProps } from './Body';

export interface IProfile
{
    name: string;
    profileExt: string;
    projExt: string;
    amountOfImages: number;
}

class Main
{
    private projectsBasePath: string = '../../images/projects/';

    private profiles: IProfile[] = [
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },    
        {
            name: 'Lisa_Hukker',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 15
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16
        }
    ]

    constructor()
    {
        new ImageImporter();

        let profilePictures: string[] = [];

        let prntStr: string = '';
        let pre: string = "require.resolve('../../images/projects/";
        for (let i = 0; i < this.profiles.length; i++)
        {
            let currProf: IProfile = this.profiles[i];

            prntStr += pre + currProf.name + '/profile_picture' + currProf.profileExt + "');\n";

            for(let y = 1; y <= currProf.amountOfImages; y++)
            {
                prntStr += pre + currProf.name + '/project_pictures/' + y + currProf.projExt + "');\n";
            }

            prntStr += '\n';
        }

        ReactDOM.render(
            React.createElement(Body, <IContentProps> {
                profiles: this.profiles,
                basePath: this.projectsBasePath
            }),
            document.getElementById('content')
        );

    }
}

let main: Main = new Main();
