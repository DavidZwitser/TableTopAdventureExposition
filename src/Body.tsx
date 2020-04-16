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
                        <li><a href="" onClick = {() => alert("epic event")}>Challenge</a></li>
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