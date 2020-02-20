import { useEffect, useState } from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Project({title, description, gitLink, projectLink, pic, ...props}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={gitLink}>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href={projectLink}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </div>
    )
}