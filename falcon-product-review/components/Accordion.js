import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const Section = ({ title, body }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => { setOpen(!open) }}
      style={{ background: '#F8F8F8', margin: '5px 0', }}>
      <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', padding: '5px 25px' }}> <span>{title}</span> <span>{open ? "-" : "+"}</span></p>
      <div style={{ height: open ? '100%' : 0, overflow: 'hidden', background: 'white', padding: '5px 25px' }}>
        <p >{body}</p>
      </div>
    </div>

  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}


export const Accordion = ({ header, items=[], style, sectionStyle }) => {
  if (items && !items.length > 0) return "Error: No items provided"
  if (!items[0] > 0) return "Error: No items provided"
  return <div style={{...style}}>
    {header ? header  : ""}
    {items.map(({ id, title, body }) => <Section key={id} title={title} body={body} style={{...sectionStyle}} />)}
  </div>
}


Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })),
  header: PropTypes.element
}