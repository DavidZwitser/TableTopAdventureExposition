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
    socials?: string[];
}

class Main
{
    private projectsBasePath: string = '../../images/projects/';

    private profiles: IProfile[] = [
        {
            name: 'Chayren_Zimmerman',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 13,
            bio: "Ik ben Chayren Zimmerman, eerstejaars fotografie student aan de Hogeschool voor de kunsten Utrecht. De huidige situatie waarin wij ons allen bevinden brengt voor beperkingen met zich mee, ik ben er van overtuigd dat er binnen die beperkingen ook veel nieuwe mogelijkheden schuilen. Dit heeft mij geïnspireerd om de mogelijkheden van beschikbare alledaagse objecten als symbolisch middel binnen de kunst te onderzoeken.",
            verhaal: "‘Ons verhaal’ is een vertelling over hoe variërende gebeurtenissen invloed hebben op de manier waarop verschillende entiteiten zich tegenover elkaar verhouden."
        },
        {
            name: 'Daan_Vroom',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: 'Hallo, ik ben Daan Vroom. Ik ben 19 jaar en studeer Illustratie. \n \n Ik heb mijzelf erg vermaakt gedurende de lessen TableTopTraveling. Ik begon de lessen met enthousiasme in het maken van de omgeving en sfeer. en hier mee experimenteren door middel van fotografie. Met een van deze beelden ben ik vervolgens verder gegaan in een verhaal. Omdat mijn verhaal zich vooral focust op de karakters en verhoudingen hiervan, heb ik vooral donkere omgevingen gemaakt. Zodoende kon ik met licht spanning aanbrengen.Het was aanzienlijk lastiger dan gedacht om met een kat te werken. Na drie draaidagen was de topacteur het wel zat.',
            verhaal: 'In mijn verhaal zie je Obi-Wan Kenobi die een confrontatie zoekt met Darth Vader, echter valt hij in een kuil waar een reusachtig monster in blijkt te zitten. Het monster slikt hem in een keer op. Obi-Wan weet zich een weg naar buiten te vinden door middel van zijn Lightsaber. eenmaal buiten wordt hij geconfronteerd door Vader.'
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. \n Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. \n In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. \n \n Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten.",
            socials: ['@coelepinda', 'davidzwitser.com']
        },
        {
            name: 'Femke_Thoonen',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 18,
            bio: "Mijn naam is Femke Thoonen, Ik ben 18 jaar en een eerste jaars fotografie student.",
            verhaal: "Twee verloren soldaten die hun reis al strijdend voortzetten.",
            socials: ['@shotsbyfem']
        },
        {
            name: 'Floor_Kuiper',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 18,
            bio: "Hoi, ik ben Floor Kuiper! Ik woon in Amsterdam en studeer illustratie aan de HKU. Gewapend met een boeren poppetje, een bureaulamp, een camera en een hele hoop meuk, ben ik aan het seminar TableTopTravelling begonnen.",
            verhaal: "De fotoserie gaat over een boer die een wandeling schijnt te maken door een verlaten industriestad, wanneer hij plots licht ziet. Hij loopt er naar toe en aan het eind van de verlichte tunnel belandt hij in een 'witte wereld'. Deze witte wereld lijkt de eindbestemming te zijn van de boer…"
        },
        {
            name: 'Jade_Hermans',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Image and Media Technology//HKU. \n Een voornamelijke techniek heb ik niet, ik wordt van bijna alles enthousiast. Mijn terugkerende thema is gelaagdheid in zowel vorm en vertelling. Als ik toch een materiaal moet kiezen werk ik graag met verf en papier die ik verwerk in 3D en 2D werken.",
            verhaal: "Deze serie gaat over het ontsnappen uit een omgeving die je negatief beïnvloed. Mijn hoofdpersoon gaat op zoek naar de plek waar ze thuishoort.",
            socials: ['jadehermans55@hotmail.com']
        },
        {
            name: 'Jasper_Witteman',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Mijn naam is Jasper Witteman, 2e jaars 3D animatie student aan de HKU.",
            verhaal: "Een robot probeert uit de sleur van het leven te ontsnappen door letterlijk een val in het diepe te maken. Hij ontdekt nieuwe werelden maar de vraag is, kan hij überhaupt ontsnappen?"
        },
        {
            name: 'Koen_Krommenhoek',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Heel Hollywood vertolkt in schaakstukken.",
            verhaal: "IMT"
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
            name: 'Marije_Makken',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 13,
            bio: "Fotografie jaar 1",
            verhaal: "Het verhaal dat ik heb willen verbeelden gaat over hoe de inkt van een verhaal wegvaagt en de woorden niets meer kunnen betekenen."
        },
        {
            name: 'Thijsje_Laan',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Hey! Ik ben Thijsje, 20 jaar oud en zit nu in mijn 2e jaar fotografie. Mijn projecten hebben meestal best persoonlijke onderwerpen. Ik denk dat ik mezelf beter wil leren kennen door middel van mijn projecten.",
            verhaal: "Mijn serie gaat over een man die opeens in een gat wordt gezogen en in een andere wereld uitkomt. Hij is op de vlucht, hij wilt zo snel mogelijk weer terug naar de ‘normale’ wereld. In paniek rent hij door de gangen op zoek naar een uitgang. Dan heeft hij door dat hij achterna wordt gezeten..",
            socials: ['@thijsemeis', '@meisjethijsje', 'thijsjelaan.myportfolio.com']
        }
           
    ]

    constructor()
    {
        new ImageImporter();

        let prntStr: string = '';
        let pre: string = "require.resolve('../" + this.projectsBasePath;
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

        console.log(prntStr);

        ReactDOM.render(
            React.createElement(Body, <IContentProps> {
                profiles: this.profiles,
                basePath: this.projectsBasePath
            }),
            document.getElementById('wrapper')
        );

    }
}

let main: Main = new Main();
