import PropTypes from 'prop-types';
import { InputFiter } from './Filter.styled';
export const Filter = ({value, onChange}) => (
<label>Find contacts by name
    <InputFiter type='text' value={value} onChange={onChange}/>
</label>

);

Filter.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func

}