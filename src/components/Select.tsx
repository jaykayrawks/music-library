import {useId} from 'react';


export default function Select({label,options,onChange}:{label:string,options:Array<string>,onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void}) {
const selectId = useId();

return <div className='flex-column gap10'>
<label htmlFor={selectId}>{label}</label>
<select id={selectId} onChange={onChange} >
    {options.map((v)=><option key={v} value={v}>{v}</option>)}
  </select>
  </div>
  }