
import Select from 'react-select';

interface Props {
  onChange : (choice:any)=>any;
}

const options = [
  { value:'curiosity', label: 'Curiosity' },
  { value: 'opportunity', label: 'Opportunity' },
  { value: 'spirit', label: 'Spirit' }
]



const Form = ({onChange}:Props) => {
    
  return (
    <>
    <div>
      <Select onChange={onChange} options={options} />
    </div>
    </>
  );
};

export default Form;
