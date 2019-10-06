import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    text-align: center;
    transition: all ease 0.2s;
    border-radius: ${props => props.theme.baseRadius};
    padding: ${props =>
        (props.xs ? "2px 6px 2px" : "15px 30px 15px") ||
        (props.sm ? "2px 18px 2px" : "15px 30px 15px") ||
        (props.md ? "6px 25px 6px" : "15px 30px 15px") ||
        (props.lg ? "16px 25px 17px" : "15px 30px 15px")};

    font-size: ${props =>
        (props.xs && `${props.theme.fontSize.xs}`) ||
        (props.sm && `${props.theme.fontSize.sm}`) ||
        (props.lg && `${props.theme.fontSize.lg}`) ||
        (props.md && `${props.theme.fontSize.md}`)};

    border: ${props =>
        (props.noborder && "none") ||
        (props.primary && `1px solid ${props.theme.colors.brandPrimary}`) ||
        (props.secondary && `1px solid ${props.theme.colors.brandSecondary}`) ||
        (props.gray && `1px solid ${props.theme.colors.white}`) ||
        `1px solid ${props.theme.colors.grey4}`};

    color: ${props =>
        (props.primary && "#fff") ||
        (props.secondary && "#fff") ||
        (props.gray && "#fff") ||
        (props.link && props.theme.baseFontColor) ||
        props.theme.colors.grey3};

    background-color: ${props =>
        (props.primary && props.theme.colors.brandPrimary) ||
        (props.secondary && props.theme.colors.brandSecondary) ||
        (props.gray && "transparent") ||
        (props.danger && props.theme.notificationRed) ||
        (props.disabled && props.theme.colors.grey4) ||
        "#fff"};

    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

    font-family: ${props =>
        props.textSemiBold && props.theme.fontWeight.semiBold};

    text-transform: ${props => (props.caps && "uppercase") || ""};

    &:hover {
        ${props => props.link && "text-decoration: underline;"};
        ${props => props.gray && "background: transparent;"};
        ${props => (props.primary ? "background: #83c31f;" : "transparent")};

        ${props => props.default && "background: #4a4a4a;"};
        ${props => props.default && "color: #fff;"};
    }
    &:focus {
        outline: 0;
    }
`;

export const CustomButton = styled(Button)`
    padding: 4px 10px;
    font-size: 13px;
    font-weight: bold;
    border: 2px solid transparent;
    border-image: ${props =>
        `linear-gradient(45deg, ${props.theme.colors.brandPrimary}, ${props.theme.colors.brandSecondary})`};
    border-image-slice: 1;
    background: ${props =>
        `linear-gradient(45deg, ${props.theme.colors.brandPrimary}, ${props.theme.colors.brandSecondary})`};
    -webkit-background-clip: text;
    transition: all 0.1s ease;
    color: ${props => props.theme.colors.black};
    width: ${props => props.width};
    margin: ${props => (props.marAuto ? "0 auto" : "")};
    &:hover {
        color: ${props => props.theme.colors.white};
        background: ${props =>
        `linear-gradient(45deg, ${props.theme.colors.brandPrimary}, ${props.theme.colors.brandSecondary})`};
        transition: all 0.3s ease;
    }
`;
