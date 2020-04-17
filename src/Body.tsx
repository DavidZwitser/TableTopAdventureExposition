import React from 'react';

import ProjectOverview from './page_elements/ProjectOverview';
import AuthorList from './page_elements/AuthorList';
import { IProfile } from './Index';

export interface IContentProps
{
    profiles: IProfile[];
    basePath: string;
}

interface IBodyProps
{
    gesloten: boolean;
}


export default class Body extends React.Component<IContentProps, IBodyProps>
{
    timeoutID: any;
    intervalID: any;

    listeningForOrientationChange: boolean = false;

    lastSizeX: number = 0;
    lastSizeY: number = 0;

    // targetDate: number = new Date('April 19, 2020, 16:00').getTime();
    targetDate: number = new Date('April 17, 2020, 15:58:50').getTime();

    constructor(props: IContentProps)
    {
        super(props);

        let now = new Date().getTime();
        let distance = this.targetDate - now;

        console.log(window.location.hash);
        if (window.location.hash == '#sesam-open-u')
        {
            distance = 0;

            window.location.hash = '';
        }

        this.state = {
            gesloten: distance > 0
        };
    }

    openPageSkrr(): void
    {
        clearTimeout(this.timeoutID);
        clearInterval(this.intervalID);

        document.getElementById('date-till-opening').style.opacity = '0';

        let aniObject: HTMLDivElement = document.getElementById('CLOSED') as HTMLDivElement;
        aniObject.style.opacity = '0';
        aniObject.style.transform = 'rotate(360deg)';

        aniObject.addEventListener('transitionend', () => {

            this.setState({
                gesloten: false
            });

        });
    }

    getTimeTillOpening(): string
    {
        let now = new Date().getTime();
        let distance = this.targetDate - now;

        let days: number = Math.floor(distance / (1000 * 60 * 60 * 24));;
        let hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds: number = Math.floor((distance % (1000 * 60)) / 1000);
        
        let openingTime = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
        
        if (distance <= 1000)
        {
            this.openPageSkrr();
        }

        return openingTime;
    }

    render()
    {

        
        if (this.state.gesloten == true)
        {
            this.timeoutID = setTimeout(() => {
                document.getElementById('date-till-opening').innerHTML = this.getTimeTillOpening();
            }, 0);
            
            this.intervalID = setInterval(() => {
                document.getElementById('date-till-opening').innerHTML = this.getTimeTillOpening();
            }, 1000);
            
            return (
                
                <div id = 'CLOSED'>
            
                    <p id = 'closed-gesloten'>GESLOTEN</p>
                    <br/>
                    <p id = 'opening-date'>Opening: 19 April 16.00</p>
        
                    <p id = 'date-till-opening'></p>
    
                </div>

            );
        }

        if ( /Android|webOS|iPhone|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        {
            if (this.listeningForOrientationChange == false)
            {
                window.addEventListener('resize', () => {
                    this.forceUpdate();
                });

                this.listeningForOrientationChange = true;
            }

            if (window.innerWidth < window.innerHeight && this.lastSizeX !== window.innerWidth && this.lastSizeY !== window.innerHeight)
            {
                this.lastSizeX = window.innerWidth;
                this.lastSizeY = window.innerHeight;

                return (
                    <div id = 'rotate-message'>
                        <p>Uw apparaat roteren alstublieft<br/>Danku zeer</p>
                    </div>
                );
            }
        }

        return (

            <div id = 'container'>

                <div id = 'top-bar'>
                    <h1 id = 'title-home'>expositie</h1>
                    <h1 id = 'title-beelden'>beelden</h1>
                    <h1 id = 'title-makers' >makers</h1>
                </div>

                <div id = 'nav-bar'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li id = 'challenge-uitleg'>Geïnspireerd geraakt? Of enorm toe aan een verre reis? De School of Media daagt je uit om zelf een TableTopTravel te maken. Instructies vindt je <a target = 'blank' href = "../images/TheTableTopChallenge.pdf">hier</a>. We zullen je reisverslag publiceren op deze site. </li>
                        <li id = 'credits' >TableTopTravels is een HKU Media seminar (2020), powered by Daan Brand & Pepijn Van de Port. <br></br> Webdesign: <a target="blank" href="https://davidzwitser.com">David Zwitser</a></li>
                    </ul>

                </div>

                <ProjectOverview 
                    profiles = {this.props.profiles}
                    basePath = {this.props.basePath}
                />

                <AuthorList 
                    authors = {this.props.profiles}
                    basePath = {this.props.basePath}
                />
                    
            </div>
        )

    }
}