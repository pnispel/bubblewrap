import React, { PropTypes } from 'react';

const Button = ({
  events,
  data,
}) => <div onClick={() => events.trigger('onClick', 1, 2)}> {data.id} </div>

export default Button
