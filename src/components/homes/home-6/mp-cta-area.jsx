import React from 'react';


const MpCtaArea = () => {
    const mp_cta_content = {
        title: <>In 3 strong years I have helped businesses build solutions that have powered the successes of their entreprise.</>,
        left_text: <>ZTM Complete Web Developer Course <br /> React Front to Back <br /> ZTM Complete Nodejs Course</>
    }
    
    const {title, left_text} = mp_cta_content
    return (
        <>
            <div className="mp-cta-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-12 wow tpfadeUp">
                        <div className="mp-cta-right">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-12 wow tpfadeUp">
                        <div className="mp-cta-left">
                            <span>Courses</span>
                            <p>
                                {left_text}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 wow tpfadeUp">
                        <a href="https://mega.nz/file/QFEmRKyT#TYV1JIUY4JR08JS5m8saZ9nEmxt0QkSvmqh1dRGhWjE" className="tp-black-bg-btn border-radious-none">Download CV
                            <span>
                                <i className="fal fa-long-arrow-right"></i>
                                <i className="fal fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MpCtaArea;