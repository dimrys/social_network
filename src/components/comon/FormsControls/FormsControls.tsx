import React from "react";
import {WrappedFieldProps} from "redux-form";
import style from "./FormsControls.module.css"


// & InputHTMLAttributes<HTMLInputElement>

const FormControl: React.FC<WrappedFieldProps > = (props) => {
    const {input, meta, children,  ...restProps} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}



export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children,  ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>

}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children,  ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}

