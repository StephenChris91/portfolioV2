import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/stephen.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Stephen Chris</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://www.facebook.com/stephenowockeez"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="https://x.com/iamstephenchris"><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/stephen-ogbonna-158438153/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/StephenChris91"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Stephen Chris, <span>Software Developer</span> and Technical Writer
                                    Based in London.
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Frontend Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> FullStack Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> System Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Database Management</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Technical Documentation</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Product Design</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About