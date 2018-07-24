import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class CountrySelectNative extends Component
{
	static propTypes =
	{
		selectArrowComponent : PropTypes.func.isRequired
	}

	static defaultProps =
	{
		selectArrowComponent : () => <div className="react-phone-number-input__country-select-arrow"/>
	}

	onChange = (event) =>
	{
		const { onChange } = this.props
		const value = event.target.value
		onChange(value === 'ZZ' ? undefined : value)
	}

	render()
	{
		const
		{
			name,
			value,
			options,
			disabled,
			tabIndex,
			className,
			selectArrowComponent : SelectArrow
		}
		= this.props

		const selectedOption = options.filter(option => option.value === value)[0] || options[0]
		const SelectedCountryFlag = selectedOption.icon

		return (
			<div className={ classNames(className, 'react-phone-number-input__country--native') }>
				<SelectedCountryFlag/>

				<select
					name={ name }
					value={ value || 'ZZ' }
					onChange={ this.onChange }
					disabled={ disabled }
					tabIndex={ tabIndex }
					className="react-phone-number-input__country-select">
					{options.map(({ value, label }) => (
						<option key={ value || '-' } value={ value || 'ZZ' }>
							{ label }
						</option>
					))}
				</select>

				<SelectArrow/>
			</div>
		)
	}
}