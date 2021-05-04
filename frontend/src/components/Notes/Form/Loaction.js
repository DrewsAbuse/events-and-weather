import React, { Component, Fragment } from 'react'

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

class Location extends Component {
  constructor(props, { setLocation }) {
    super(props)

    this.state = { country: '', region: '' }
  }

  selectCountry(val) {
    this.props.setLocation({ country: val })
    this.setState({ country: val })
  }

  selectRegion(val) {
    this.setState({ region: val })
    this.props.setLocation({ region: val })
  }

  render() {
    const { country, region } = this.state
    return (
      <Fragment>
        <CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown className='ml-1' disableWhenEmpty={true} country={country} value={region} onChange={(val) => this.selectRegion(val)} />
      </Fragment>
    )
  }
}
export { Location }
