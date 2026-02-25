import { memo, useCallback, useState } from "react";

export function Form() {
    const [ data, setData ] = useState<Record<string, string>>({});
    const NUM_FIELDS = 5;
    
    const handleChange = useCallback((fieldName: string, value: string) => {
        setData(prev => ({ ...prev, [fieldName]: value }));
    }, []);
    
    return (
    <form className="flex flex-col gap-2 items-start" >
      {Array.from({ length: NUM_FIELDS }, (_, i) => (
        <div className="flex flex-row gap-1 items-baseline" key={i}>
          <label>Field {i + 1}:</label>
          <InputMemo 
            value={data[`field_${i + 1}`] || ""} 
            onChange={handleChange}
            fieldName={`field_${i + 1}`}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

const InputMemo = memo(Input)

function Input({ value, onChange, fieldName }: { 
    value: string; 
    onChange: (fieldName: string, value: string) => void;
    fieldName: string;
}) {
  return (
    <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(fieldName, e.target.value)} 
    />
  );
}