import './styles.styl'

const ModuleTitle = props => {
  const { backgroundText, leftText, rightText } = props.title
  return (
    <div className="module-title">
      {backgroundText}
      <p className="block-text">
        <span>{leftText}</span>
        <span>{rightText}</span>
      </p>
    </div>
  )
}

export default ModuleTitle
