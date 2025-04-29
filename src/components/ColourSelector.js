import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;

  function handleButton(){
    selectNextBackground({background: background})
  }
  return (
    <button data-testid={config.key} className={config.classname} onClick={handleButton}>
      {config.label}
    </button>
  )
}
export default ColourSelector;