const Part = (props) => {
    return (
        <p key={props.part}>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    let elemnts = []
    props.parts.forEach(element =>  elemnts.push(<Part part={element.name} exercises={element.exercises} />))
    console.debug(elemnts)
    return (
        <div>
            {elemnts}
        </div>
    )
}

export default Content