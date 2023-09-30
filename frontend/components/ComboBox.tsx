import { useState, useEffect } from 'react';

function Dropdown({ options, defaultDisplay }) {
  const [displayValue, setDisplayValue] = useState(defaultDisplay);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const getCircleColor = (value) => {
    switch (value) {
      case 'sepolia':
        return 'blue';
      case 'mumbai':
        return 'orange';
      default:
        return 'white';
    }
  };

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
          borderRadius: '1rem',
          position: 'relative',
          width: '256px',
          marginTop: '20px',
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
          <div // This is your circle
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '8px',
            }}
          >
            {selectedOption.logo ? (
              <img
                src={selectedOption.logo}
                alt='logo'
                style={{ width: '16px', height: '16px' }}
              />
            ) : null}
          </div>
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
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                style={{
                  display: 'flex',
                  alignItems: 'center', // to align items vertically center
                  padding: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setDisplayValue(option.label);
                  setSelectedOption(option);
                  setShowDropdown(false);
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                <div // This is the circle
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: getCircleColor(selectedOption.value),
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '8px',
                  }}
                >
                  {option.logo &&
                  option.value !== 'sepolia' &&
                  option.value !== 'mumbai' ? (
                    <img
                      src={option.logo}
                      alt='logo'
                      style={{ width: '16px', height: '16px' }}
                    />
                  ) : null}
                </div>
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
    { value: 'ethereum', label: 'ETH', logo: '/ethereum-eth-logo.png' },
    { value: 'link', label: 'LINK', logo: '/chainlink-link-logo.png' },
    { value: 'usdc', label: 'USDC', logo: '/usd-coin-usdc-logo.png' },
  ];

  const optionsThree = [
    { value: 'ethereum', label: 'ETH', logo: '/ethereum-eth-logo.png' },
    { value: 'link', label: 'LINK', logo: '/chainlink-link-logo.png' },
    { value: 'usdc', label: 'USDC', logo: '/usd-coin-usdc-logo.png' },
  ];

  const [numberInputOne, setNumberInputOne] = useState('0');

  const [numberInputTwo, setNumberInputTwo] = useState('0');

  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    setIsFlipping(true);
    // **** swap logic here ****

    setTimeout(() => setIsFlipping(false), 1000);
  };

  return (
    <>
      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // This will center all child elements horizontally.
        }}
      >
        {/* <h1
          style={{
            marginLeft: '250px',
            fontSize: '24px',
            fontFamily: 'sans-serif',
          }}
        >
          From
        </h1> */}
        <div
          style={{
            width: '550px',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingLeft: '50px',
            paddingRight: '50px',
            padding: '20px',
            justifyContent: 'space-evenly',
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
                outline: 'none',
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
          ></div>
        </div>
        <div style={{ height: '50px' }}></div>
        {/* <h1
          style={{
            marginLeft: '250px',
            fontSize: '24px',
            fontFamily: 'sans-serif',
          }}
        >
          To
        </h1> */}
        <div
          style={{
            width: '550px',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingLeft: '50px',
            paddingRight: '50px',
            padding: '20px',
            justifyContent: 'space-evenly',
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
                outline: 'none',
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
          ></div>
        </div>
      </div>
      <div style={{ height: '50px' }}></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10px', // This assumes the container takes the full height of the screen
          flexDirection: 'column', // to ensure other elements in this div are also centered vertically
        }}
      >
        <button
          onClick={handleClick}
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
            transform: isFlipping
              ? 'rotateX(180deg) rotateY(180deg)'
              : 'rotateX(0deg)',
            transition: 'transform 1s',
          }}
        >
          Swap
        </button>
      </div>
    </>
  );
}
