import * as React from 'react';
import { IProfile } from '../Index';

export interface IProjectOverviewProps
{
    profiles: IProfile[];
    basePath: string;
}

interface IProjectOverviewStates
{
    onHomePage: boolean;
    currentAuthor: IProfile;
    currentImageIndex: number;
}

export default class ProjectOverview extends React.Component<IProjectOverviewProps, IProjectOverviewStates>
{
    lastAuthor: IProfile;
    authorIndex: number;

    constructor(props: IProjectOverviewProps)
    {
        super(props);

        this.lastAuthor = this.props.profiles[0];

        this.state = {
            onHomePage: window.location.hash == '',
            currentAuthor: this.props.profiles[Number(window.location.hash.split('#')[1])],
            currentImageIndex: 1
        };

    }

    public replaceImages()
    {
        let hash: number = Number(window.location.hash.split('#')[1]);

        if (window.location.hash == '')
        {
            this.setState({
                onHomePage: true
            });

            return;
        }

        this.setState({
            onHomePage: false,
            currentAuthor: this.props.profiles[hash],
            currentImageIndex: 1
        });
    }

    public loopAuthors(dir: number): void
    {
        let nextAuthor: number = Number(window.location.hash.split('#')[1]) + dir;

        if (!nextAuthor && nextAuthor !== 0)
        {
            if (dir == -1)
            {
                nextAuthor = this.props.profiles.length - 1;
            }
            else if (dir == 1)
            {
                nextAuthor = 0;
            }
        }
        
        if (nextAuthor < 0)
        {
            nextAuthor = this.props.profiles.length - 1;
            nextAuthor = 0;
        }
        else if (nextAuthor > this.props.profiles.length - 1)
        {
            nextAuthor = 0;
            nextAuthor = this.props.profiles.length - 1;
        }

        window.location.hash = nextAuthor + '';
    }

    private keyPressed(e: KeyboardEvent): void
    {
        e.preventDefault();

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

        // if (newIndex <= 0)
        // {
        //     newIndex = this.state.currentAuthor.amountOfImages + 1;
        // }
        // else if (newIndex > this.state.currentAuthor.amountOfImages + 1)
        // {
        //     newIndex = 1;
        // }

        if (newIndex <= 0 || newIndex > this.state.currentAuthor.amountOfImages + 1)
        {
            newIndex = this.state.currentImageIndex;
        }

        this.setState({
            currentImageIndex: newIndex
        });
    }

    private getAllImages(): JSX.Element[]
    {
        let images: JSX.Element[] = [];

        for(let i = 1; i < this.state.currentAuthor.amountOfImages + 1; i++)
        {
            let currentImage: string = this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + i + this.state.currentAuthor.projExt;

            images.push(
                <img 
                    src = {currentImage} 
                    id = 'images-overview-image'
                    style = {{width: 55 * 2 / this.state.currentAuthor.amountOfImages + 'vw'}}
                    loading = 'lazy'
                />
            );
        }

        return images;
    }

    private getSocials(socials: string[]): JSX.Element[]
    {
        let elements: JSX.Element[] = [];

        if (socials == undefined) { return null; }

        for (let i = 0; i < socials.length; i++)
        {
            let social: string = socials[i];
            let href: string = social;

            if (social.split('@')[0] == '')
            {
                href = 'https://www.instagram.com/' + social.split('@')[1];
            }

            if (social.split('mail.com')[1] == '')
            {
                href = 'mailto:' + social;
            }

            elements.push(
                <p id = 'socials' className = {'socials-' + i}><a target = 'blank' href = {href}>{social}</a></p>
            );
        }

        return elements;
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

    optionalRender(condition: boolean, element: JSX.Element): JSX.Element
    {
        if (!condition) { return null; }

        return element;
    }   

    render()
    {
        if (document.getElementById('project-overview'))
        {
            document.getElementById('project-overview').scrollTop = 0;
        }

        this.lastAuthor = this.state.currentAuthor;


        if (this.state.onHomePage == true)
        {
            return (
                <div id = 'project-overview'>

                    {/* Home page content*/}
                    <div id = 'home-page'>

                        <h1 id = 'tabletoptravels-logo' className = 'logo1'><span id = 'yellow'>T</span>able<span id = 'red'>T</span>op<span id = 'green'>T</span>ravels</h1>
                        <p id = 'home-info-1'>Ook studenten van de School of Media van de Hogeschool van de Kunsten Utrecht zaten gedwongen thuis. We hebben ze uitgenodigd om op hun keukentafel een wereld te bouwen, en vervolgens (met hun fototoestel) in die wereld op reis te gaan. In deze virtuele galerie presenteren ze de verhalen waarmee ze terug zijn gekomen.<br/>Graag nodigen we u uit voor de feestelijke opening van de expositie op zondag 19 april om 16.00. U kunt de opening bijwonen via <a target = 'blank' href="https://zoom.us/j/2265137624">ZOOM</a>. Inloop vanaf 15.45.</p>

                        <h1 id = 'tabletoptravels-logo' className = 'logo2'><span id = 'yellow'>T</span>able<span id = 'red'>T</span>op<span id = 'green'>T</span>ravels</h1>
                        <p id = 'home-info-2'>Verhalend werk van:<br/> Merel Buvelot, Jasper Witteman, Daan Vroom, Vlinder Ruijg, Floor Kuiper, Lisa Hukker, Jade Hermans, Rosalie Duin, Doris van Ladesteijn, Alexander Bierling, Helen Brink, Ike Schulte, Renée den Heijer, Demian Haverkamp, Salomé de Jong, David Zwitser, Danae Grannetia, Danique Bijkerk, Julia Arbouw, Thijsje Laan, Chayren Zimmerman, Marije Makken, Femke Thoonen, Jorn Koomen, Naomi Aalbers, Koen Krommenhoek, Willem In ‘t Veld, Bas Lanting, Ajuna Braunschweiger, Maud Dekkers</p>

                    </div>

                </div>
            );
        }

        if (this.state.currentImageIndex == this.state.currentAuthor.amountOfImages + 1)
        {
            let authorImagePath: string = this.props.basePath + this.state.currentAuthor.name + '/profile_picture' + this.state.currentAuthor.profileExt;

            if (this.state.currentAuthor.hasNoProfilePicture == true)
            {
                authorImagePath = this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + '1' + this.state.currentAuthor.projExt;
            }

            return(
                <div id = 'project-overview'>

                    {/* Image counter */}
                    <div id = 'image-counter'>
                        <p id = 'image-counter-current'>{this.state.currentImageIndex}</p>
                        <p id = 'image-counter-separator'>/</p>
                        <p id = 'image-counter-total'>{this.state.currentAuthor.amountOfImages + 1}</p>
                    </div>

                    { /* Author info */ }
                    <div id = 'project-overview-author-info' >
                        <img src= {authorImagePath} alt=""/>
                        
                        <div id = 'author-texts'>
                            {this.optionalRender(this.state.currentAuthor.bio !== '', (
                                <p id = 'author-bio-title'>Bio</p>
                            ))}
                            {this.state.currentAuthor.bio}

                            {this.optionalRender(this.state.currentAuthor.verhaal !== '', (
                                <p id = 'author-verhaal-title'>{this.state.currentAuthor.title !== undefined ? this.state.currentAuthor.title : 'Het verhaal'}</p>
                            ))}
                            {this.state.currentAuthor.verhaal}

                            {this.getSocials(this.state.currentAuthor.socials)}
                        </div>
                        
                        <div id = 'images-overview'>
                            {this.getAllImages()}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div id = 'project-overview'>

                {/* Image counter */}
                <div id = 'image-counter'>
                    <p id = 'image-counter-current'>{this.state.currentImageIndex}</p>
                    <p id = 'image-counter-separator'>/</p>
                    <p id = 'image-counter-total'>{this.state.currentAuthor.amountOfImages + 1}</p>
                </div>


                {/* Single image */}
                <img 
                    src = { this.props.basePath + this.state.currentAuthor.name + '/project_pictures/' + this.state.currentImageIndex + this.state.currentAuthor.projExt }
                    className = 'project-images' 
                ></img>

                {/* Nav buttons */}
                <button id = 'project-overview-prev-button' onMouseUp = {() => this.getNextImage(-1)}>{"<"}</button>
                <button id = 'project-overview-next-button' onMouseUp = {() => this.getNextImage(1)}>{">"}</button>

            </div>
        );
    }
}