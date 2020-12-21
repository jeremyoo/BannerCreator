import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    ${({ theme }) => theme.mixins.epicSides};
    ${({ theme }) => theme.mixins.flexCenter};
    height: 100px;
    background: inherit;

    span {
        position: relative;
        display: inline-block;
        margin: 30px 10px;
    }

    input {
        padding: 9px 0 9px 16px;
        width: 180px;
        background: var(--white);
        border-radius: 4px;
        font-size: var(--ft-lg);
        color: var(--light-navy);
        text-shadow: var(--light-steel) 2px 2px;
        font-weight: 600;
        letter-spacing: 4px;
        text-indent: 80px;
        &::-webkit-input-placeholder {
            text-shadow: none;
            letter-spacing: normal;
            color: var(--white);
            text-indent: 5px;
            font-weight: 300;
        }
        + label {
            position: absolute;
            top: 8px;
            left: 0;
            bottom: 8px;
            padding: 5px 15px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 3px;
            transition: var(--transition);
            background: rgba(20, 204, 143, 0);
            &:after {
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                top: 100%;
                left: 50%;
                margin-left: -3px;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                border-top: 3px solid rgba(20, 204, 143, 0);
                transition: var(--transition);
            }
        }
    }
    input:focus,
    input:active,
    input:hover {
        color: var(--navy);
        text-indent: 5px;
        background: var(--bright-white);
        &::-webkit-input-placeholder {
            color: var(--light-steel);
        }
        + label {
            color: var(--bright-white);
            background: var(--dark-teal);
            transform: translateY(-40px);
            &:after {
                border-top: 3px solid rgba(20, 204, 143, 1);
            }
        }
    }
`;


const SizeInput = ({ onChangeField }) => {
    const onChange = (e) => {
        onChangeField({ key: e.target.name, value: e.target.value });
    };

    return (
        <StyledBlock>
            <span>
                <input id="width" type="number" placeholder="300 px" onChange={onChange} name="canvasWidth"/>
                <label for="width">width</label>
            </span>
            <span>
                <input id="height" type="number" placeholder="200 px" onChange={onChange} name="canvasHeight"/>
                <label for="height">height</label>
            </span>
        </StyledBlock>
    )
}

export default SizeInput;