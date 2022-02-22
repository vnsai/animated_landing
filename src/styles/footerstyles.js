import styled, { css } from 'styled-components';

export const FooterNav = styled.div`
    height: 300px;
    margin-top: 296px;
`;

export const FooterContent = styled.div`
    color: ${props => props.theme.red};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 0.5rem;
    flex: 1;
    ${props => props.wided && css`
        flex: 2;
    `}
`;

export const FooterSocial = styled.div`
    display: flex;
    position: relative;

    a {
        position: relative;
        display: block;
        width: 36px;
        height: 36px;
        padding: 8px;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`;
