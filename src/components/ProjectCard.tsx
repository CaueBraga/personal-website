import React from "react";

import data from "../data/data.json";
import { GithubLogo } from "@phosphor-icons/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlackboard,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  index: number;
}

interface ProjectData {
  title: string;
  description: string;
  skills: string[];
  link_demo: string;
  link_git: string;
  img: string;
  isProd: any;
}

export function ProjectCard(props: ProjectCardProps) {
  const { index } = props;
  //@ts-ignore
  const project: ProjectData = data.projects[index];
  const imgWidth: string = "330px";
  const imgHeight: string = "443px";

  return (
    <>
      <div className="flex  rounded mt-10  md:mt-16 w-full bg-white shadow-2xl lg:h-cardImg">
        <div
          className="hidden rounded lg:block"
          style={{
            backgroundImage: `url(${data.projects[index].img})`,
            backgroundSize: "cover",
            width: imgWidth,
            height: imgHeight,
            minWidth: imgWidth,
            minHeight: imgHeight,
          }}
        />

        <div className="flex text-base-gray  flex-col p-8 lg:p-16">
          <div className="text-4xl font-medium mb-8">{project.title}</div>
          <div className="text-base mb-8 leading-relaxed break-words font-normal">
            {project.description}
          </div>
          <div className="flex flex-wrap  font-light">
            {project.skills &&
              project.skills.map((skill: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="px-2 py-1 rounded border-2 border-green-300 mr-3 mb-3 text-sm"
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
          <div className="flex justify-around md:justify-start font-mulish text-xs lg:text-sm font-bold">
            <a
              className={styles.moveButton}
              rel="noopener noreferrer"
              href={project.link_demo}
              target="_blank"
            >
              {project.isProd ? "Link" : "Live Demo"}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
            </a>
            {(!project.isProd || project.isProd !== "true") && (
              <a
                className={styles.moveButton}
                rel="noopener noreferrer"
                href={project.link_git}
                target="_blank"
              >
                <div className="flex">
                  <GithubLogo size={18} weight="fill" className="mr-1" />
                  <div> View Source </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* import React from "react";

import data from "../data/data.json";
import { GithubLogo } from "@phosphor-icons/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlackboard,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  index: number;
}

interface ProjectData {
  title: string;
  description: string;
  skills: string[];
  link_demo: string;
  link_git: string;
  img: string;
}

export function ProjectCard(props: ProjectCardProps) {
  const { index } = props;
  const project: ProjectData = data.projects[index];
  const imgWidth: string = "330px";
  const imgHeight: string = "443px";

  return (
    <>
      <div className="flex  rounded mt-10  md:mt-16 w-full bg-white shadow-2xl lg:h-cardImg">
        <div
          className="hidden rounded lg:block"
          style={{
            backgroundImage: `url(${data.projects[index].img})`,
            backgroundSize: "cover",
            width: imgWidth,
            height: imgHeight,
            minWidth: imgWidth,
            minHeight: imgHeight,
          }}
        />

        <div className="flex text-base-gray  flex-col p-8 lg:p-16">
          <div className="text-4xl font-medium mb-8">{project.title}</div>
          <div className="text-base mb-8 leading-relaxed break-words font-normal">
            {project.description}
          </div>
          <div className="flex flex-wrap  font-light">
            {project.skills &&
              project.skills.map((skill: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="px-2 py-1 rounded border-2 border-green-300 mr-3 mb-3 text-sm"
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
          <div className="flex justify-around md:justify-start font-mulish text-xs lg:text-sm font-bold">
            <a
              className={styles.moveButton}
              rel="noopener noreferrer"
              href={project.link_demo}
              target="_blank"
            >
              Live Demo
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
            </a>
            <a
              className={styles.moveButton}
              rel="noopener noreferrer"
              href={project.link_git}
              target="_blank"
            >
              <div className="flex">
                <GithubLogo size={18} weight="fill" className="mr-1" />
                <div> View Source </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
 */
