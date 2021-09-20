import React from 'react';
import { useForm } from '../hooks/form-hook';

import Input from './Input';
import SpacingWrapper from '../components/UIElements/SpacingWrapper';

// Required: props.title, props.id, props.buttonText, props.onSubmit
// Required: props.inputs => [{ title, id, validators, type (optional) , errorText (optional), placeholder (optional), initialValidity (optional) }, {}, ...]
// Optional: props.icon, props.defaultStyle, props.initialFormValidity

const FormUI = props => {
    const [formState, inputHandler, setFormData] = useForm(
        props.inputs.reduce((obj, input) => (
            obj[input.id] = { value: input.placeholder, isValid: input.initialValidity }, obj), {}
        ),
    props.initialFormValidity ? props.initialFormValidity : false);

    return (
    <React.Fragment>
        <SpacingWrapper>
            <div className="card">
                <div className="card-body p-5">
                {/* Title Section */}
                    {/* Title Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{props.title}</h2>
                    {/* Icon Divider */}
                    {props.icon && 
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>}
                    {/* Form Section */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <form id={props.id} onSubmit={props.onSubmit}>
                                <div className={`${props.defaultStyle ? 'form-floating mb-3' : ''}`}>
                                    {props.inputs.map(input => (
                                        <Input
                                            id={input.id}
                                            element="input"
                                            defaultStyle
                                            type={input.type}
                                            label={input.title}
                                            validators={input.validators}
                                            errorText={input.errorText}
                                            onInput={inputHandler}
                                            initialValue={formState.inputs[input.id].value}
                                            initialValid={formState.inputs[input.id].isValid}
                                        />
                                    ))}
                                </div>
                                <button className={`btn btn-primary btn-xl ${!formState.isValid ? 'disabled' : ''}`} id="submitButton" type="submit">{props.buttonText}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </SpacingWrapper>
    </React.Fragment>);
};

export default FormUI;
