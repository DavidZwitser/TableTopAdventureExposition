import React from 'react';

import ProjectOverview from './page_elements/ProjectOverview';
import AuthorList from './page_elements/AuthorList';
import { IProfile } from './Index';

export interface IContentProps
{
    profiles: IProfile[];
    basePath: string;
}

export default class Content extends React.Component<IContentProps>
{
    render()
    {
        return (
            <div id = 'container'>

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