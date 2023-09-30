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
          width: '100%',
          padding: '8px',
          //   border: '1px solid #cbd5e0',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#352f44',
          color: 'white',
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
            borderRadius: '1rem',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '16px',
          }}
        >
          <input
            type='text'
            style={{ width: '100%', padding: '8px', borderRadius: '1rem' }}
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
                (e.currentTarget.style.backgroundColor = '#edf2f7')
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

  return (
    <>
      <h1 style={{ marginLeft: '250px', fontSize: '24px' }}>From</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'black',
          padding: '16px',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '250px',
          marginRight: '250px',
          borderRadius: '1rem',
        }}
      >
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsOne} defaultDisplay='Select Chain' />
          <div style={{ height: '55px' }}></div>
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsTwo} defaultDisplay='Select Token' />
          <input
            type='number'
            value={numberInputOne}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) setNumberInputOne(value);
            }}
            style={{
              width: '15%',
              padding: '8px',
              color: 'white',
              backgroundColor: 'black',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
            }}
            min='0'
            defaultValue={0}
          />
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsThree} defaultDisplay='Select Token' />
          <input
            type='number'
            value={numberInputTwo}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) setNumberInputTwo(value);
            }}
            style={{
              width: '15%',
              padding: '8px',
              color: 'white',
              backgroundColor: 'black',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
            }}
            min='0'
            defaultValue={0}
          />
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
      <h1 style={{ marginLeft: '250px', fontSize: '24px' }}>To</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'black',
          padding: '16px',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '250px',
          marginRight: '250px',
          borderRadius: '1rem',
        }}
      >
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsOne} defaultDisplay='Select Chain' />
          <div style={{ height: '55px' }}></div>
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsTwo} defaultDisplay='Select Token' />
          <input
            type='number'
            value={numberInputOne}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) setNumberInputOne(value);
            }}
            style={{
              width: '15%',
              padding: '8px',
              color: 'white',
              backgroundColor: 'black',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
            }}
            min='0'
            defaultValue={0}
          />
        </div>
        <div
          style={{
            borderRadius: '1rem',
            backgroundColor: 'black',
            // border: '1px solid blue',
          }}
        >
          <Dropdown options={optionsThree} defaultDisplay='Select Token' />
          <input
            type='number'
            value={numberInputTwo}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) setNumberInputTwo(value);
            }}
            style={{
              width: '15%',
              padding: '8px',
              color: 'white',
              backgroundColor: 'black',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginLeft: '25px',
            }}
            min='0'
            defaultValue={0}
          />
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
    </>
  );
}
