import * as React from 'react';
import { IProfile } from '../Index';

export interface IProjectOverviewProps
{
    profiles: IProfile[];
    basePath: string;
}

interface IProjectOverviewStates
{
    currentAuthor: IProfile;
}

export default class ProjectOverview extends React.Component<IProjectOverviewProps, IProjectOverviewStates>
{
    constructor(props: IProjectOverviewProps)
    {
        super(props);

        this.state = {
            currentAuthor: this.props.profiles[0]
        };
    }

    public replaceImages()
    {
        let hash: number = Number(window.location.hash.split('#')[1]);

        this.setState({
            currentAuthor: this.props.profiles[ hash ]
        });
    }

    private getImages(): JSX.Element[]
    {
        let images: JSX.Element[] = [];

        for (let i = 1; i <= this.state.currentAuthor.amountOfImages; i++)
        {
            images.push(
                <img 
                    src = { this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + i + this.state.currentAuthor.projExt }
                    className = 'project-images' 
                    key = {i}
                    loading = 'lazy'
                ></img>
            );
        }


        return images;
    }

    componentDidMount() 
    {
        window.addEventListener('hashchange', this.replaceImages.bind(this));
    }

    componentWillUnmount()
    {
        window.removeEventListener('hashchange', this.replaceImages.bind(this));
    }

    render()
    {
        return (
            <div id = 'project-overview'>

                {this.getImages()}

            </div>
        );
    }
}