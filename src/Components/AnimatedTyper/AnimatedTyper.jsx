import React, { Component} from "react";
import styles from './styles.scss';

class AnimatedTyper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fullText: this.props.children,
            text: ''
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
        }, (Math.random() * this.props.keyWaitTime) + this.props.keyWaitTime);
    }

    componentDidMount() {
        this.startAnimation();
    }
    
    render(){
        return(
            <div>{this.state.text}</div>
        );
    }
}

export default AnimatedTyper;