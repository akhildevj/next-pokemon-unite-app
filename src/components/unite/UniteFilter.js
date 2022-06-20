import { useEffect, useState } from 'react';
import { useData } from '../../contexts/appContext';

const UniteFilter = () => {
  const { originalData, data, setData, resetData } = useData();

  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');

  const changeCategory = category => {
    if (category === 'All') resetData();
    else setData(originalData.filter(({ damage_type: dt }) => dt === category));
  };

  const changeType = type => {
    if (type === 'All') resetData();
    else setData(originalData.filter(({ tags }) => tags.role === type));
  };

  useEffect(() => {
    console.log('category', category);
    changeCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    console.log('type', type);
    changeType(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const resetHandler = () => resetData();

  return (
    <section className='section-unite-filter'>
      <p className='unite-filter--heading'>Pokemon Category</p>
      <div className='unite-filter--row'>
        <input
          type='radio'
          name='category'
          checked={category === 'All'}
          onChange={() => setCategory('All')}
        />
        <p className='unite-filter--text'>All Type</p>
      </div>
      <div className='unite-filter--row'>
        <input
          type='radio'
          name='category'
          onClick={() => setCategory('Special')}
        />
        <p className='unite-filter--text'>Special Attacker</p>
      </div>
      <div className='unite-filter--row'>
        <input
          type='radio'
          name='category'
          onClick={() => setCategory('Physical')}
        />
        <p className='unite-filter--text'>Physical Attacker</p>
      </div>
      <p className='unite-filter--heading'>Pokemon Type</p>
      <div className='unite-filter--row'>
        <input
          type='radio'
          name='type'
          checked={type === 'All'}
          onChange={() => setType('All')}
        />
        <p className='unite-filter--text'>All Category</p>
      </div>
      <div className='unite-filter--row'>
        <input type='radio' name='type' onClick={() => setType('Attacker')} />
        <p className='unite-filter--text'>Attacker</p>
      </div>
      <div className='unite-filter--row'>
        <input
          type='radio'
          name='type'
          onClick={() => setType('All-Rounder')}
        />
        <p className='unite-filter--text'>All Rounder</p>
      </div>
      <div className='unite-filter--row'>
        <input type='radio' name='type' onClick={() => setType('Speedster')} />
        <p className='unite-filter--text'>Speedster</p>
      </div>
      <div className='unite-filter--row'>
        <input type='radio' name='type' onClick={() => setType('Defender')} />
        <p className='unite-filter--text'>Defender</p>
      </div>
      <div className='unite-filter--row'>
        <input type='radio' name='type' onClick={() => setType('Supporter')} />
        <p className='unite-filter--text'>Supporter</p>
      </div>
      <div className='unite-filter--row'>
        <button className='unite-filter--reset' onClick={resetHandler}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default UniteFilter;
