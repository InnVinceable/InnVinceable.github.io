import React, { Component} from "react";
import styles from "./styles.scss";

class ImageFrame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter() {
        this.setState({hovering: true});
    }
    handleMouseLeave() {
        this.setState({hovering: false});
    }
    render(){
        return(
            <div className={`${styles.imageContainer} ${this.state.hovering && styles.lightUp}`}>
                <img className={styles.imageFrame} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.props.onClick} src={this.props.src}/>
                <div className={styles.shadow}></div>
            </div>
        );
    }
}

export default ImageFrame;