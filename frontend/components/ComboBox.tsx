import { useState, useEffect } from 'react';

function Dropdown({ options, defaultDisplay }) {
  const [displayValue, setDisplayValue] = useState(defaultDisplay);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '1rem',
          position: 'relative',
          width: '256px',
          marginTop: '16px',
        }}
      >
        <div
          style={{
            width: '200px',
            padding: '8px',
            //  border: '1px solid #cbd5e0',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#352f44',
            color: 'white',
            fontFamily: 'sans-serif',
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{displayValue}</span>
          <span>▼</span>
        </div>
        {showDropdown && (
          <div
            style={{
              position: 'absolute',
              zIndex: 10,
              width: '100%',
              marginTop: '8px',
              backgroundColor: '#352f44',
              color: 'white',
              border: '1px solid #cbd5e0',
              borderRadius: '5px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '16px',
              fontFamily: 'sans-serif',
            }}
          >
            {/* <input
            type='text'
            style={{ width: '100%', padding: '8px', borderRadius: '1rem' }}
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => {
                  setDisplayValue(option.label);
                  setShowDropdown(false);
                  setSearchTerm('');
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function Home() {
  const optionsOne = [
    { value: 'sepolia', label: 'Sepolia' },
    { value: 'mumbai', label: 'Mumbai' },
  ];

  const optionsTwo = [
    { value: 'ethereum', label: 'ETH' },
    { value: 'link', label: 'LINK' },
    { value: 'usdc', label: 'USDC' },
  ];

  const optionsThree = [
    { value: 'ethereum', label: 'ETH' },
    { value: 'link', label: 'LINK' },
    { value: 'usdc', label: 'USDC' },
  ];

  const [numberInputOne, setNumberInputOne] = useState('0');
  const [numberInputTwo, setNumberInputTwo] = useState('0');
  const [numberInputThree, setNumberInputThree] = useState('0');
  const [numberInputFour, setNumberInputFour] = useState('0');

  return (
    <>
      <h1
        style={{
          marginLeft: '250px',
          fontSize: '24px',
          fontFamily: 'sans-serif',
        }}
      >
        From
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: '16px',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '250px',
          marginRight: '250px',
          borderRadius: '1rem',
          fontFamily: 'sans-serif',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        }}
      >
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            //  border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsOne} defaultDisplay='Select Chain' />
          <div style={{ height: '55px' }}></div>
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsTwo} defaultDisplay='Select Token' />
          <input
            type='text'
            inputMode='decimal'
            value={numberInputOne}
            onChange={(e) => {
              const value = e.target.value;
              // Regular expression to allow numbers and decimals
              if (/^\d*\.?\d*$/.test(value) || value === '')
                setNumberInputOne(value);
            }}
            style={{
              width: '40%',
              padding: '8px',
              color: 'black',
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
              fontFamily: 'sans-serif',
            }}
            defaultValue={0}
          />
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsThree} defaultDisplay='Select Token' />
          <input
            type='text'
            inputMode='decimal'
            value={numberInputTwo}
            onChange={(e) => {
              const value = e.target.value;
              // Regular expression to allow numbers and decimals
              if (/^\d*\.?\d*$/.test(value) || value === '')
                setNumberInputTwo(value);
            }}
            style={{
              width: '40%',
              padding: '8px',
              color: 'black',
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
              fontFamily: 'sans-serif',
            }}
            defaultValue={0}
          />
        </div>
      </div>
      <div style={{ height: '50px' }}></div>
      <h1
        style={{
          marginLeft: '250px',
          fontSize: '24px',
          fontFamily: 'sans-serif',
        }}
      >
        To
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: '16px',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '250px',
          marginRight: '250px',
          borderRadius: '1rem',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        }}
      >
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsOne} defaultDisplay='Select Chain' />
          <div style={{ height: '55px' }}></div>
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsTwo} defaultDisplay='Select Token' />
          <input
            type='text'
            inputMode='decimal'
            value={numberInputThree}
            onChange={(e) => {
              const value = e.target.value;
              // Regular expression to allow numbers and decimals
              if (/^\d*\.?\d*$/.test(value) || value === '')
                setNumberInputThree(value);
            }}
            style={{
              width: '40%',
              padding: '8px',
              color: 'black',
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
              fontFamily: 'sans-serif',
            }}
            defaultValue={0}
          />
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'white',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsThree} defaultDisplay='Select Token' />
          <input
            type='text'
            inputMode='decimal'
            value={numberInputFour}
            onChange={(e) => {
              const value = e.target.value;
              // Regular expression to allow numbers and decimals
              if (/^\d*\.?\d*$/.test(value) || value === '')
                setNumberInputFour(value);
            }}
            style={{
              width: '40%',
              padding: '8px',
              color: 'black',
              backgroundColor: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
              fontFamily: 'sans-serif',
            }}
            defaultValue={0}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px', // This assumes the container takes the full height of the screen
          flexDirection: 'column', // to ensure other elements in this div are also centered vertically
        }}
      >
        <button
          onClick={() => {
            // Your swap logic here
          }}
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
        >
          Swap
        </button>
      </div>
    </>
  );
}
