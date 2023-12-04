import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) => {
  return[
    <div key='FormInput' className="group">
      <input className="form-input" {...otherProps}/>
      {label &&(
      <label 
        htmlFor='displayName'
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
      )}
    </div>
  ]
}

export default FormInput;


