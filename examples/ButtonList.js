import React, { PropTypes } from 'react';
import Button from './Button';

const ButtonList = ({
  buttons,
  events,
}) => {
  return (
    <div>
      {buttons.map((button) =>
        <Button
          key={button.id}
          events={events.createChild({ payload: { id: button.id } })}
          data={button}
        />
      )}
    </div>
  )
}

ButtonList.propTypes = {
  buttons: PropTypes.array,
  events: PropTypes.object,
}

export default ButtonList
