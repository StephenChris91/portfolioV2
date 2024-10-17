import React from 'react';
import SEO from '../common/seo';
import HomeSix from '../components/homes/home-6';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Stephen Chris - Portfolio"} />
            <HomeSix />
        </Wrapper>
    );
};

export default index;