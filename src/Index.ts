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
    bio: string;
    verhaal: string;
}

class Main
{
    private projectsBasePath: string = '../../images/projects/';

    private profiles: IProfile[] = [
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },    
        {
            name: 'Lisa_Hukker',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 15,
            bio: "Ik ben Lisa Hukker, 23 jaar en tweedejaars student AVM.",
            verhaal: "Muis is al dagen verdwaald, en vindt dan eindelijk zijn huis. Moeder is blij hem te zien en stopt hem meteen in bed waar hij veilig de ogen kan sluiten, of toch niet?"
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.png',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten."
        },
         
    ]

    constructor()
    {
        new ImageImporter();


        if (window.location.hash == "")
        {
            window.location.hash = "0";
        }

        // let prntStr: string = '';
        // let pre: string = "require.resolve('../../images/projects/";
        // for (let i = 0; i < this.profiles.length; i++)
        // {
        //     let currProf: IProfile = this.profiles[i];

        //     prntStr += pre + currProf.name + '/profile_picture' + currProf.profileExt + "');\n";

        //     for(let y = 1; y <= currProf.amountOfImages; y++)
        //     {
        //         prntStr += pre + currProf.name + '/project_pictures/' + y + currProf.projExt + "');\n";
        //     }

        //     prntStr += '\n';
        // }

        // console.log(prntStr);

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
