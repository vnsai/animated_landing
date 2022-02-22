import React, { useEffect } from 'react';
import { Container } from '../../styles/globalstyles';
import { HomeContentSection, Content } from '../../styles/homestyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const HomeContent = () => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px'
    });

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
    }, [animation, inView]);

    return (
        <HomeContentSection
            ref={contentRef}
            animate={animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }
            }}
        >
            <Container>
                <Content>
                    Great stories just don't happen - <br />
                    they need to be uncovered. And we dig deep to discover the great stories
                    that lie just below the surface. Dirt under our fingernails and all.
                </Content>
            </Container>
        </HomeContentSection>
    );
};

export default HomeContent;