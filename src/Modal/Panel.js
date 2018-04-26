import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icons from '../icons'
import Card from '../Card'
import { defaultProps, getProps } from '../utils/proptypes'
import { modalClass } from '../styles'

export default class Panel extends PureComponent {
  getStyle() {
    const { width, height, top } = this.props
    return { width, height, top }
  }

  // eslint-disable-next-line
  lockWheel(event) {
    event.preventDefault()
  }

  renderContent() {
    const { children, title, type } = this.props

    if (type === 'default') return <Card.Body>{children}</Card.Body>

    const iconType = type.charAt(0).toUpperCase() + type.slice(1)
    const icon = Icons[iconType]

    return (
      <Card.Body className={modalClass('body')}>
        { icon && <div className={modalClass('icon')}>{icon}</div> }
        { title && <div className={modalClass('title')}>{title}</div> }
        <div>{children}</div>
      </Card.Body>
    )
  }

  render() {
    const {
      footer, title, type, maskOpacity, onClose, maskCloseAble,
    } = this.props

    const className = classnames(
      modalClass('panel', type),
      this.props.className,
    )

    console.log(maskOpacity)

    return [
      <div
        key="mask"
        style={{ background: `rgba(0, 0, 0, ${maskOpacity})` }}
        className={modalClass('mask')}
        onClick={maskCloseAble ? onClose : undefined}
      />,

      <Card key="card" shadow className={className} style={this.getStyle()}>
        {
          maskCloseAble &&
          <a className={modalClass('close')} onClick={onClose} href="javascript:;">
            {Icons.Close}
          </a>
        }
        {
          title && type === 'default' &&
          <Card.Header className={(modalClass('title'))}>{title}</Card.Header>
        }
        { this.renderContent() }
        {
          footer &&
          <Card.Footer className={(modalClass('footer'))} align="right">
            { footer }
          </Card.Footer>
        }
      </Card>,
    ]
  }
}

Panel.propTypes = {
  ...getProps(),
  footer: PropTypes.any,
  id: PropTypes.string.isRequired,
  maskOpacity: PropTypes.number,
  maskCloseAble: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

Panel.defaultProps = {
  ...defaultProps,
  top: '10vh',
  maskOpacity: 0.25,
  maskCloseAble: true,
  width: 500,
}
