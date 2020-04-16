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
    currentImageIndex: number;
}

export default class ProjectOverview extends React.Component<IProjectOverviewProps, IProjectOverviewStates>
{
    imagesToLoad: number;
    lastAuthor: IProfile;

    constructor(props: IProjectOverviewProps)
    {
        super(props);

        this.lastAuthor = this.props.profiles[0];

        this.state = {
            currentAuthor: this.props.profiles[Number(window.location.hash.split('#')[1])],
            currentImageIndex: 1
        };

    }

    public replaceImages()
    {
        let hash: number = Number(window.location.hash.split('#')[1]);

        this.setState({
            currentAuthor: this.props.profiles[hash],
            currentImageIndex: 1
        });
    }

    public loopAuthors(dir: number): void
    {
        let nextAuthor: number = Number(window.location.hash.split('#')[1]) + dir;

        
        if (nextAuthor < 0)
        {
            nextAuthor = this.props.profiles.length - 1;
        }
        else if (nextAuthor > this.props.profiles.length - 1)
        {
            nextAuthor = 0;
        }
        
        window.location.hash = nextAuthor + '';
    }

    private keyPressed(e: KeyboardEvent): void
    {
        switch(e.keyCode)
        {
            case 37:
                this.getNextImage(-1);
                break;

            case 39:
                this.getNextImage(1);
                break;

            case 38:
                this.loopAuthors(-1);
                break;

            case 40:
                this.loopAuthors(1);
                break;

            default:
                return;
        }
    }

    private getNextImage(dir: number): void
    {
        let newIndex: number = this.state.currentImageIndex + dir;

        if (newIndex <= 0)
        {
            newIndex = this.state.currentAuthor.amountOfImages + 1;
        }
        else if (newIndex > this.state.currentAuthor.amountOfImages + 1)
        {
            newIndex = 1;
        }

        this.setState({
            currentImageIndex: newIndex
        });
    }

    componentDidMount() 
    {
        window.addEventListener('hashchange', this.replaceImages.bind(this));
        window.addEventListener('keydown', this.keyPressed.bind(this));
    }

    componentWillUnmount()
    {
        window.removeEventListener('hashchange', this.replaceImages.bind(this));
        window.removeEventListener('keydown', this.keyPressed.bind(this));
    }

    private checkIfLoaded(): void
    {
        this.imagesToLoad --;

        if (this.imagesToLoad <= 0)
        {
            document.getElementById('project-overview-loading-screen').style.opacity = '0';
        }
    }

    render()
    {
        if (document.getElementById('project-overview-loading-screen'))
        {
            if (this.state.currentAuthor.name !==  this.lastAuthor.name)
            {
                this.imagesToLoad = this.state.currentAuthor.amountOfImages;
                document.getElementById('project-overview-loading-screen').style.opacity = '1';
            }
            else
            {
                document.getElementById('project-overview-loading-screen').style.opacity = '0';
                document.getElementById('project-overview-loading-screen').style.display = 'none';
            }
        }

        if (document.getElementById('project-overview'))
        {
            document.getElementById('project-overview').scrollTop = 0;
        }

        this.lastAuthor = this.state.currentAuthor;

        return (
            <div id = 'project-overview' onLoad = {() => this.checkIfLoaded()}>


                {/* <div id = 'project-overview-loading-screen' >
                    <p id = 'project-overview-loading-text'>Loading...</p>
                </div> */}

                <div id = 'project-overview-author-info' style = {{display: this.state.currentImageIndex == this.state.currentAuthor.amountOfImages + 1 ? 'block' : 'none'}}>
                    <img src={this.props.basePath + this.state.currentAuthor.name + '/profile_picture' + this.state.currentAuthor.profileExt} alt=""/>
                    
                    <p id = 'author-bio'>
                    <p id = 'author-bio-title'>Bio</p>
                    {this.state.currentAuthor.bio}
                    </p>
                    
                    <p id = 'author-verhaal'>
                    <p id = 'author-verhaal-title'>Het verhaal</p>
                    {this.state.currentAuthor.verhaal}
                    </p>
                </div>

                <img 
                    src = { this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + this.state.currentImageIndex + this.state.currentAuthor.projExt }
                    className = 'project-images' 
                    style = {{display: this.state.currentImageIndex == this.state.currentAuthor.amountOfImages + 1 ? 'none' : 'block'}}
                ></img>

                <button id = 'project-overview-prev-button' onMouseUp = {() => this.getNextImage(-1)}>{"<"}</button>
                <button id = 'project-overview-next-button' onMouseUp = {() => this.getNextImage(1)}>{">"}</button>

            </div>
        );
    }
}