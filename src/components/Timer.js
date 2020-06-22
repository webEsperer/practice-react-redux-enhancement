import React from 'react';

class Timer extends React.Component {
    state = {
        time: 0,
    }

    getHours() {
        return 0;
    }

    getMinutes() {
        return 0;
    }

    getSeconds() {
        return this.state.time;
    }

    render() {
        return (
            <section>
                Dziękujemy, że jesteś z nami już {this.getHours()}h {this.getMinutes()}m {this.getSeconds()}s.
            </section>
        )
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState(state => {
                return {time: state.time + 1}
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }
}

export default Timer;