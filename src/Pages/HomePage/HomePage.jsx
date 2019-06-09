import React, { Component} from "react";
import AnimatedTyper from '../../Components/AnimatedTyper/AnimatedTyper'
import MarkdownBlock from '../../Components/MarkdownBlock';
import ImageFrame from '../../Components/ImageFrame/ImageFrame';
import { 
    Title, 
    Description, 
    LinkedInLink,
    SocialLinks
} from '../../Resources/content';

import styles from './styles.scss';

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            titleFinished: false,
            descriptionFinished: false
        }

        this.handleTitleFinished = this.handleTitleFinished.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDescFinished = this.handleDescFinished.bind(this);
    }
    handleTitleFinished() {
        this.setState({titleFinished: true})
    }
    handleDescFinished() {
        this.setState({descriptionFinished: true})
    }
    renderDescription() {
        return (
            <MarkdownBlock content={Description}></MarkdownBlock>
        )
    }
    renderSocial() {
        return (SocialLinks && SocialLinks.map(link => 
            <div className={styles.socialLinkWrapper}><a href={link.href}><img className={styles.socialLink} src={link.imageSrc}/></a></div>))
    }
    handleClick() {
        window.location.href = LinkedInLink;
    }
    renderImage() {
        return (
            <div className={styles.profileImage}>
                <ImageFrame onClick={this.handleClick} src="https://media.licdn.com/dms/image/C4D03AQHJ3CemQUEa0g/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=c9kZAKhDycfJOCcD51mlJ0qB2WbmLMZmGNsCR1zJaCg"></ImageFrame>
            </div>
        )
    }
    render(){
        return(
            <div className={styles.pageContainer}>
                {!this.state.loading && 
                    <div>
                        <div className="row">
                            <div className="col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-6 offset-3">
                                {this.renderImage()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                                <h1 className={styles.titleText}><AnimatedTyper keyWaitTime={50} onAnimationFinished={this.handleTitleFinished}>{Title}</AnimatedTyper></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                <div className="text-center">
                                    {this.state.titleFinished && this.renderSocial()}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                {this.state.titleFinished && this.renderDescription()}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default HomePage;