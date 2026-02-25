import { memo, useCallback, useState } from "react";

export function Form2() {
    const [ data, setData ] = useState<Record<string, string>>({});
    const NUM_FIELDS = 5;

    const handleChange = useCallback((i: number) => (value: string) => {
        setData(prev => ({ ...prev, [`field_${i + 1}`]: value }));
    }, []);

    return (
    <form className="flex flex-col gap-2 items-start" >
      {Array.from({ length: NUM_FIELDS }, (_, i) => (
        <div className="flex flex-row gap-1 items-baseline" key={i}>
          <label>Field {i + 1}:</label>
          <InputMemo value={data[`field_${i + 1}`] || ""} onChange={handleChange(i)} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

const InputMemo = memo(Input, (prev, next) => prev.value === next.value);

function Input({ value, onChange}: { value: string; onChange: (value: string) => void; }) {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  );
}