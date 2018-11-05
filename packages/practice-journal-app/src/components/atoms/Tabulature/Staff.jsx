import React from 'react';
import PropTypes from 'prop-types';

import { compose, withProps, defaultProps } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import memoize from 'lodash/memoize';
import StylizedTabCleff from './StylizedTabCleff';

class Staff extends React.Component {
  drawStrings = classes => {
    return this.props.lineArray.map((e, i) => (
      <line
        key={i}
        className={classes.staffLine}
        x1="0"
        x2={this.props.tabWidth}
        y1={this.props.calcYPosition(i)}
        y2={this.props.calcYPosition(i)}
      />
    ));
  };

  render() {
    const {
      classes,
      viewBox,
      tabPadding,
      tabYOffset,
      glyphScale,
      glyphXOffset,
      glyphYOffset
    } = this.props;
    return (
      <svg viewBox={viewBox} stroke="black">
        <g transform={`translate(${tabPadding}, ${tabYOffset})`} stroke="black">
          {this.drawStrings(classes)}
        </g>
        <g transform={`translate(${tabPadding}, ${180 + tabYOffset})`} stroke="black">
          <g transform={`scale(${glyphScale})translate(${glyphXOffset}, ${glyphYOffset})`}>
            <StylizedTabCleff />
          </g>
          {this.drawStrings(classes)}
        </g>
      </svg>
    );
  }
}

Staff.propTypes = {
  numLines: PropTypes.number,
  spaceBetweenLines: PropTypes.number,
  linesAboveStaff: PropTypes.number,
  linesBelowStaff: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  tabPadding: PropTypes.number,
  glyphScale: PropTypes.number
};

const staffStyles = theme => ({
  staffLine: {
    stroke: 'black',
    strokeOpacity: '0.3'
  }
});

const computedProps = props => {
  const { width, height, tabPadding, linesAboveStaff, spaceBetweenLines, numLines } = props;

  const viewBox = memoize((w, h) => `0 0 ${w} ${h}`);
  const tabWidth = memoize((w, tp) => w - tp * 2);
  const calcYPosition = i => i * props.spaceBetweenLines;
  const tabHeight = (numLines - 1) * spaceBetweenLines;
  const tabYOffset = linesAboveStaff * spaceBetweenLines;

  return {
    viewBox: viewBox(width, height),
    tabWidth: tabWidth(width, tabPadding),
    calcYPosition,
    lineArray: [...Array(props.numLines)],
    tabHeight,
    tabYOffset
  };
};

const defaults = {
  numLines: 6,
  spaceBetweenLines: 13,
  linesAboveStaff: 4,
  linesBelowStaff: 4,
  width: 500,
  height: 360,
  tabPadding: 10,
  glyphScale: 0.9,
  glyphXOffset: 6,
  glyphYOffset: 6
};

export default compose(
  withStyles(staffStyles),
  defaultProps(defaults),
  withProps(computedProps)
)(Staff);
