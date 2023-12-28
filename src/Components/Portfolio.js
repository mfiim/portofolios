import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";

let id = 0;

class Portfolio extends Component {
    handleDownloadClick = () => {
        // Membuka situs web Gojek saat tombol "See More My Projects" diklik
        window.open("https://linktr.ee/mfiim_project", "_blank");
    };

    render() {
        if (!this.props.data) return null;
        const projects = this.props.data.projects.map(function (projects) {
            let projectImage = "images/portfolio/" + projects.image;

            return (
                <div key={id++} className="columns portfolio-item">
                    <div className="item-wrap">
                        <Zmage alt={projects.title} src={projectImage} />
                        <div style={{ textAlign: "center" }}>{projects.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                            <div className="columns download">
                                <p style={{ textAlign: "center" }}>
                                    <button className="button" onClick={this.handleDownloadClick}>
                                        <i className="fa fa-download"></i> See More My Projects
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

export default Portfolio;
