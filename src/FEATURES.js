import React from 'react';
import FeatureOptions from '/FeatureOptions';

export default class Features extends React.Component {
  render() {
    const options = this.props.options.map((item, index) => {
      const selectedClass = item.name === this.props.selected[this.props.name].name ? "feature_selected" : "";
      const featureClass = "feature_option" + selectedClass;
      return (
        <FeatureOptions 
          featureClass={featureClass}
          key = {index}
          onSelect={this.props.onSelect}
          item={item}
          featureName={this.props.name}
          />
      )
    })

    return (
      <div
        className="feature"
        key={this.props.name}
      >
        <div
          className="feature_name"
        >
        {this.props.name}
        </div>
        <ul className="feature_list">
          {options}
        </ul>
      </div>
    )
  }
}