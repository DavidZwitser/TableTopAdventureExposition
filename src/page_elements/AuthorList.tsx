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

        this.state = {
            activeAuthorIndex: Number(window.location.hash.split('#')[1])
        };
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

        return clean;
    }

    private getAuthorImages(): JSX.Element[]
    {
        let images: JSX.Element[] = [];

        
        for (let i: number = 0; i < this.props.authors.length; i++)
        {
            let testImage = new Image();
            let authorPath: string = this.props.basePath + this.props.authors[i].name + '/profile_picture' + this.props.authors[i].profileExt;

            testImage.src = authorPath;

            if (testImage.width == 0)
            {
                authorPath = this.props.basePath + this.props.authors[i].name + '/project_pictures/' + '1' + this.props.authors[i].projExt;
            }
            
            images.push(
                <div className = 'author-profile' onClick = {() => location.hash = i + ''} key = {i - 2000}>
                    <img 
                        src = {authorPath} 
                        className = 'author-profile-picture' 
                        key = {i}
                        style = { i == this.state.activeAuthorIndex ? {opacity: .6} : {} }
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

    private updateActiveAuthor(): void
    {
        let hash: number = Number(window.location.hash.split('#')[1]);

        this.setState({
            activeAuthorIndex: hash
        });
    }

    componentDidMount(): void
    {
        window.addEventListener('hashchange', this.updateActiveAuthor.bind(this));
    }

    componentWillUnmount(): void
    {
        window.removeEventListener('hashchange', this.updateActiveAuthor.bind(this))
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