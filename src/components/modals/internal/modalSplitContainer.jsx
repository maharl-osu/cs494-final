

export default function SplitContainer(props) {

  const w1 = (props["weight"] || 0.5) * 100
  const w2 = (1 - props["weight"] || 0.5) * 100

  const style = {
    gridTemplateColumns: `calc(${w1}% - 0.125rem) calc(${w2}% - 0.125rem)`
  }

  return (
    <div className={"split-container"} style={style}>
      {props["children"]}
    </div>
  )

}