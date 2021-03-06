import './index.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

import ImageImporter from './data_handling/ImageImporter';

import Body, { IContentProps } from './Body';

export interface IProfile
{
    name: string;
    hasNoProfilePicture?: boolean,
    profileExt: string;
    projExt: string;
    amountOfImages: number;
    bio: string;
    verhaal: string;
    socials?: string[];
    title?: string;
}

class Main
{
    private projectsBasePath: string = '../../images/projects/';

    private profiles: IProfile[] = [
        {
            name: 'Ajuna_Braunschweiger',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 14,
            bio: '',
            verhaal: ''
        },
        {
            name: 'Alexander_Bierling',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: '',
            verhaal: 'Een wezen dat alleen maar technologie en geweld heeft gekend besluit om op zoek te gaan naar een nieuw, vredig bestaan in de natuur.',
            title: 'The road less traveled'
        },
        {
            name: 'Bas_Lanting',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 14,
            bio: 'Ik ben Bas Lanting, 20 jaar oud en eerste jaars fotografie student. Ik ben veelal gefascineerd door',
            verhaal: 'A reaction to the action consumers took during the first stages of the coronavirus pandemic with hopes rebirthing the way we think about our need for consumables.',
            title: 'Consumed',
            socials: ['@baslanting']
        },
        {
            name: 'Chayren_Zimmerman',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 13,
            bio: "Ik ben Chayren Zimmerman, eerstejaars fotografie student aan de Hogeschool voor de kunsten Utrecht. De huidige situatie waarin wij ons allen bevinden brengt voor beperkingen met zich mee, ik ben er van overtuigd dat er binnen die beperkingen ook veel nieuwe mogelijkheden schuilen. Dit heeft mij geïnspireerd om de mogelijkheden van beschikbare alledaagse objecten als symbolisch middel binnen de kunst te onderzoeken.",
            verhaal: "‘Ons verhaal’ is een vertelling over hoe variërende gebeurtenissen invloed hebben op de manier waarop verschillende entiteiten zich tegenover elkaar verhouden.",
            socials: ['@chayren'],
            title: 'Ons verhaal'
        },
        {
            name: 'Daan_Vroom',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: 'Hallo, ik ben Daan Vroom. Ik ben 19 jaar en studeer Illustratie. \n \n Ik heb mijzelf erg vermaakt gedurende de lessen TableTopTraveling. Ik begon de lessen met enthousiasme in het maken van de omgeving en sfeer. en hier mee experimenteren door middel van fotografie. Met een van deze beelden ben ik vervolgens verder gegaan in een verhaal. Omdat mijn verhaal zich vooral focust op de karakters en verhoudingen hiervan, heb ik vooral donkere omgevingen gemaakt. Zodoende kon ik met licht spanning aanbrengen.Het was aanzienlijk lastiger dan gedacht om met een kat te werken. Na drie draaidagen was de topacteur het wel zat.',
            verhaal: 'Het rode beestje uit de andere wereld wordt verliefd op meneer tape maar is onzeker, alleen red meneer tape het niet in de andere wereld.. Het rode beestje gaat verder opzoek naar een nieuwe liefde die hij aan het eind na vele tegenslagen toch vindt.',
        },
        {
            name: 'David_Zwitser',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Hoi! Ik ben David. Ik ben 21 jaar oud en zit in het 2e jaar van IMT aan de HKU. Meestal ben ik bezig met programmeren maar dit keer met foto's maken :D. Ik vind het vooral leuk om met filosofische/ abstracte onderwerpen bezig te zijn.",
            verhaal: "Met mijn foto serie illustreer ik het ontstaan van een nieuw idee/overtuiging. In je hoofd construeer je een idee welke in eerste instantie nog heel kwetsbaar is. Dit idee krijgt te maken met de echte wereld en wordt van alle kanten uit elkaar getrokken en in nieuwe perspectieven geplaatst (dit kan in je eigen hoofd of door andere mensen gebeuren). Uiteindelijk moet je al die meningen maar een beetje bij elkaar rapen en komen er twijfels over de waarde van het idee. Maar nu ligt het daar, in je hand, bij elkaar geraapt met al die nieuwe perspectieven, kom je er achter dat het idee eigenlijk een beeld schone reflectie is van jezelf. Dit was mijn idee achter de beelden. Daarentegen heb ik ze expres zo open voor interpretatie gemaakt dat de kijkers hun eigen idee en fantasieën er op los kunnen laten.",
            socials: ['@coelepinda', 'https://davidzwitser.com']
        },
        {
            name: 'Femke_Thoonen',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 18,
            bio: "Mijn naam is Femke Thoonen, Ik ben 18 jaar en een eerste jaars fotografie student.",
            verhaal: "Twee verloren soldaten die hun reis al strijdend voortzetten.",
            socials: ['@shotsbyfem'],
            title: 'Lost'
        },
        {
            name: 'Floor_Kuiper',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 18,
            bio: "Hoi, ik ben Floor Kuiper! Ik woon in Amsterdam en studeer illustratie aan de HKU. Gewapend met een boeren poppetje, een bureaulamp, een camera en een hele hoop meuk, ben ik aan het seminar TableTopTravelling begonnen.",
            verhaal: "De fotoserie gaat over een boer die een wandeling schijnt te maken door een verlaten industriestad, wanneer hij plots licht ziet. Hij loopt er naar toe en aan het eind van de verlichte tunnel belandt hij in een 'witte wereld'. Deze witte wereld lijkt de eindbestemming te zijn van de boer…",
            socials: ['floorkuiper.amsterdam'],
            title: 'De melkboer'
        },
        {
            name: 'Ike_Schulte',
            profileExt: '.jpg',
            projExt: '.jpg',
            bio: 'Illustrator',
            amountOfImages: 17,
            hasNoProfilePicture: true,
            verhaal: 'Een fotografieproject waarin de mogelijkheden binnen de eigen ruimte worden onderzocht. Hoe kan je op reis als je het huis niet uit mag? En wat als je dromerige tocht in een nachtmerrie verandert?'
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
            verhaal: "Een robot probeert uit de sleur van het leven te ontsnappen door letterlijk een val in het diepe te maken. Hij ontdekt nieuwe werelden maar de vraag is, kan hij überhaupt ontsnappen?",
            socials: ['@japserw'],
            title: 'Vicious circle'
        },
        {
            name: 'Jorn_Koomen',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 15,
            bio: 'Fotograaf',
            verhaal: ''
        },
        {
            name: 'Koen_Krommenhoek',
            profileExt: '.jpg',
            projExt: '.jpg',
            hasNoProfilePicture: true,
            amountOfImages: 16,
            bio: "IMT",
            verhaal: "Heel Hollywood vertolkt in schaakstukken.",
            title: 'Save The King'
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
            hasNoProfilePicture: true,
            amountOfImages: 13,
            bio: "Fotografie jaar 1",
            verhaal: "Het verhaal dat ik heb willen verbeelden gaat over hoe de inkt van een verhaal wegvaagt en de woorden niets meer kunnen betekenen.",
            title: 'Gelezen en vergeten'
        },
        {
            name: 'Merel_Buvelot',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            hasNoProfilePicture: true,
            bio: 'Ik ben Merel Buvelot, 23 jaar en eerstejaars illustratie student. Ik heb hiervoor ook nog filosofie gestudeerd en ik teken graag dieren.',
            verhaal: 'Het verhaal gaat over een man die in een boot zit maar de boot zinkt, waardoor hij op een onbewoond eiland terecht komt. Uiteindelijk wordt hij gek, gaat alles in de fik. Maar wordt hij weer wakker in zijn bed (of een bed).'
        },
        {
            name: 'Thijsje_Laan',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 16,
            bio: "Hey! Ik ben Thijsje, 20 jaar oud en zit nu in mijn 2e jaar fotografie. Mijn projecten hebben meestal best persoonlijke onderwerpen. Ik denk dat ik mezelf beter wil leren kennen door middel van mijn projecten.",
            verhaal: "Mijn serie gaat over een man die opeens in een gat wordt gezogen en in een andere wereld uitkomt. Hij is op de vlucht, hij wilt zo snel mogelijk weer terug naar de ‘normale’ wereld. In paniek rent hij door de gangen op zoek naar een uitgang. Dan heeft hij door dat hij achterna wordt gezeten..",
            socials: ['@thijsemeis', '@meisjethijsje', 'https://thijsjelaan.myportfolio.com']
        },

        {
            name: 'Demian_Haverkamp',
            profileExt: '.jpg',
            projExt: '.jpg',
            amountOfImages: 15,
            bio: "Hoi, ik ben Demian Haverkamp! 21 jaar oud en ik studeer Image & Media Technology aan de HKU. Helaas had ik geen camera tot mijn beschikking dus heb ik met mijn simpele telefoon geprobeerd er alles uit te halen wat erin zit!",
            verhaal: "Het rode beestje uit de andere wereld wordt verliefd op meneer tape maar is onzeker, alleen red meneer tape het niet in de andere wereld.. Het rode beestje gaat verder opzoek naar een nieuwe liefde die hij aan het eind na vele tegenslagen toch vindt.",
            socials: ['@art_bydemian']
        },
           
    ]

    private printImagePaths(): void
    {
        let prntStr: string = '';
        let pre: string = "require.resolve('" + this.projectsBasePath;

        for (let i = 0; i < this.profiles.length; i++)
        {
            let currProf: IProfile = this.profiles[i];
    
            if (currProf.hasNoProfilePicture !== true)
            {
                prntStr += pre + currProf.name + '/profile_picture' + currProf.profileExt + "');\n";
            }
    
            for(let y = 1; y <= currProf.amountOfImages; y++)
            {
                prntStr += pre + currProf.name + '/project_pictures/' + y + currProf.projExt + "');\n";
            }
    
            prntStr += '\n';
        }
    
        console.log(prntStr);
    }

    constructor()
    {
        new ImageImporter();

        // this.printImagePaths();

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
