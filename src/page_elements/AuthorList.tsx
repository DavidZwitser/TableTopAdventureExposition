import * as React from 'react';

import {IProfile} from '../Index';

export interface IAuthorListProps
{
    authors: IProfile[];
    basePath: string;
}

interface IAuthorListStates
{
    activeAuthorIndex: number;
}

export default class AuthorList extends React.Component<IAuthorListProps, IAuthorListStates>
{
    constructor(props: IAuthorListProps)
    {
        super(props);
    }

    private stripOfUnderscores(text: string): string
    {
        let stripped: string[] = text.split('_');
        let clean: string = '';

        for(let i = 0; i < stripped.length; i++)
        {
            clean += stripped[i]

            if (i !== stripped.length - 1)
            {
                clean += ' ';
            }
        }

        console.log(clean);

        return clean;
    }

    private getAuthorImages(): JSX.Element[]
    {
        let images: JSX.Element[] = [];

        for (let i: number = 0; i < this.props.authors.length; i++)
        {
            images.push(
                <div className = 'author-profile' onClick = {() => location.hash = i + ''} key = {i - 2000}>
                    <img 
                        src = {this.props.basePath + this.props.authors[i].name + '/profile_picture' + this.props.authors[i].profileExt} 
                        className = 'author-profile-picture' 
                        key = {i}
                    ></img>
                    <div className = 'author-profile-hover' key = {i + 2000}> 
                        <p> 
                            { this.stripOfUnderscores(this.props.authors[i].name) } 
                        </p>
                    </div>
                </div>
            );
        }

        return images;
    }

    render()
    {
        return(
            <div id = 'author-list'>

                {this.getAuthorImages()}

            </div>
        );
    }
}