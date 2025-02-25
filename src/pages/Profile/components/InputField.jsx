const InputField = ({ label, type = 'text', placeholder, width, name, value, onChange }) => {
    return (
        <div className='flex flex-col' style={{ width }}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className='w-full rounded-xl py-[8px] px-4 border border-gray-300'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
