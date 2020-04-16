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

    private getNextImage(dir: number): void
    {
        let newIndex: number;

        if (this.state.currentImageIndex + dir <= 0)
        {
            newIndex = this.state.currentAuthor.amountOfImages;
        }
        else if (this.state.currentImageIndex + dir > this.state.currentAuthor.amountOfImages)
        {
            newIndex = 1;
        }
        else
        {
            newIndex = this.state.currentImageIndex + dir;
        }

        this.setState({
            currentImageIndex: newIndex
        });
    }

    componentDidMount() 
    {
        window.addEventListener('hashchange', this.replaceImages.bind(this));
    }

    componentWillUnmount()
    {
        window.removeEventListener('hashchange', this.replaceImages.bind(this));
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

                {/* <div id = 'project-overview-author-info'>
                    <img src={this.props.basePath + this.state.currentAuthor.name + '/profile_picture' + this.state.currentAuthor.profileExt} alt=""/>
                    
                    <p id = 'author-bio'>
                    <p id = 'author-bio-title'>Bio</p>
                    {this.state.currentAuthor.bio}
                    </p>
                    
                    <p id = 'author-verhaal'>
                    <p id = 'author-verhaal-title'>Het verhaal</p>
                    {this.state.currentAuthor.verhaal}
                    </p>
                </div> */}

                {/* {this.getImages()} */}
                <img 
                    src = { this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + this.state.currentImageIndex + this.state.currentAuthor.projExt }
                    className = 'project-images' 
                    // loading = 'lazy'
                ></img>

                <button id = 'project-overview-prev-button' onMouseUp = {() => this.getNextImage(-1)}>{"<"}</button>
                <button id = 'project-overview-next-button' onMouseUp = {() => this.getNextImage(1)}>{">"}</button>

            </div>
        );
    }
}