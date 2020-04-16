import React from 'react';

import ProjectOverview from './page_elements/ProjectOverview';
import AuthorList from './page_elements/AuthorList';
import { IProfile } from './Index';

export interface IContentProps
{
    profiles: IProfile[];
    basePath: string;
}

export default class Body extends React.Component<IContentProps>
{
    render()
    {
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
                        <li id = 'challenge-uitleg'>Geïnspireerd geraakt? Of enorm toe aan een verre reis? De School of Media daagt je uit om zelf een TableTopTravel te maken. Instructies vindt je <a onClick = {() => alert('cool event!')} href="">hier</a>. We zullen je reisverslag publiceren op deze site. </li>
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