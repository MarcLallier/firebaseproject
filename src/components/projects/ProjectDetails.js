import React from 'react'

 const ProjectDetails = (props) => {

  const id = props.match.params.id

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        
        <div className="card-content">
          <span className="card-title">Project title {id}</span>
          <p>mollofnkv,f,dl,lmmdfm,vlknkbjnkjg ningkj jidgxnsn</p>
        </div>

        <div className="card-action green lighten-4 grey-text">
          <div>Posted by l'autre</div>
          <div>Le 18 octobre</div>
        </div>
      
      </div>
    </div>
  )
}

export default ProjectDetails
