import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CustomRadar = ({ name, color, ...rest }) => {
  return (
    <Radar name={name} dataKey="value" stroke={color} fill={color} fillOpacity={0.6} {...rest} />
  );
};

CustomRadar.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const CustomTooltip = ({ payload, label, ...props }) => {
  return (
    <div className="custom-tooltip">
      <p className="label">{label}</p>
      {payload.map((entry, index) => (
        <p key={`item-${index}`} style={{ color: entry.color }}>
          {`${entry.name}: ${entry.value}`}
        </p>
      ))}
    </div>
  );
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  label: PropTypes.string,
};

const RadarChartComponent = ({ data = [] }) => {
  return (
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Legend />
      <CustomRadar name="Performance" color="#8884d8" />
      <CustomTooltip />
    </RadarChart>
  );
};

RadarChartComponent.propTypes = {
  data: PropTypes.array,
};

export default RadarChartComponent;
