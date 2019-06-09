import React, { Component} from "react";
import styles from './styles.scss';

class Fader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        }
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        setTimeout(()=>{
            let curerntPos = this.state.text.length;
            let subs = this.state.fullText.substr(0, curerntPos + 1);
            this.setState({text: subs});
            if (this.state.text !== this.state.fullText)
                this.startAnimation();
            else if (this.props.onAnimationFinished) 
                this.props.onAnimationFinished();
        }, (Math.random() * 100) + 100);
    }

    componentDidMount() {
        this.startAnimation();
    }
    
    render(){
        return(
            <div>{this.props.children}</div>
        );
    }
}

export default Fader;