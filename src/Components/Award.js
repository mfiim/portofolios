import React, {Component} from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id = 0;
class Award extends Component {
    handleDownloadClick = () => {
        // Membuka situs web Gojek saat tombol "Download Projects" diklik
        window.open("https://drive.google.com/drive/folders/1WlBv-tI1vr8bFyfZzrRjauCCEaRMUxNA?usp=sharing", "_blank");
    };

    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function (projects) {
            let projectImage = "images/award/" + projects.image;

            return (
                <div key={id++} className="columns award-item">
                    <div className="item-wrap">
                        <Zmage alt={projects.title} src={projectImage} />
                        <div style={{textAlign: "center"}}>{projects.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="award">
                <Fade right duration={1000} distance="40px">
                    <div className="row">
                        <div className="twenty columns collapsed">
                            <h1>Check out some of my Certificate</h1>
                            <div id="award-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                             <div className="columns download">
                                <p style={{ textAlign: "center" }}>
                                    <button className="button" onClick={this.handleDownloadClick}>
                                        <i className="fa fa-download"></i> See More My Certificate
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Award;