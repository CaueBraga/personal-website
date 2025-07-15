/* import data from "../data/data.json";
import styles from "./Terminal.module.css";

interface IInfo {
  title: string;
  link: string;
}

export function Terminal() {
  const name: string = data.info.name;
  const currentLocation: string = data.info.location;
  const contactInfo: IInfo[] = [
    {
      title: data.info.email,
      link: data.info.email_link,
    },
    {
      title: "LinkedIn",
      link: data.info.linkedin_link,
    },
    {
      title: "github",
      link: data.info.git_link,
    },
  ];

  const resume: IInfo = {
    title: data.info.pdf_title,
    link: data.info.pdf_link,
  };

  const skills: string[] = data.info.skills;

  function getStringText(str: string) {
    let newStr = '"' + str + '"';
    return newStr;
  }

  function getArrayText(str: string, isFirst: boolean, isLast: boolean) {
    let newStr;
    if (isFirst) newStr = '["' + str + '",';
    else if (isLast) newStr = '"' + str + '"]';
    else newStr = '"' + str + '",';
    return newStr;
  }

  return (
    <>
      <div className="flex items-center rounded-t-lg bg-[#dbdade]">
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-red-400" />
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-yellow-400" />
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-green-400" />
      </div>

      <div className="p-8 bg-base-gray rounded-b-lg flex flex-col text-lg font-monaco leading-normal">
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.currentLocation</div>
          </div>
          <div className="text-base-yellow">
            {getStringText(currentLocation)}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.contactInfo</div>
          </div>
          <div className="text-base-yellow flex flex-wrap">
            {contactInfo.map((cont: IInfo, index: number) => (
              <div key={index}>
                {index === 0 ? '["' : '"'}
                <a
                  className="text-base-blue"
                  rel="noopener noreferrer"
                  href={cont.link}
                  target="_blank"
                >
                  {cont.title}
                </a>
                {index === contactInfo.length - 1 ? '"]' : '",'}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.resume</div>
          </div>
          <div className="text-base-yellow">
            <a
              className="text-base-blue"
              rel="noopener noreferrer"
              href={resume.link}
              target="_blank"
            >
              {resume.title}
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.skills</div>
          </div>
          {skills ? (
            <div className="flex text-base-yellow flex-wrap">
              {skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className={index === skills.length - 1 ? "" : "mr-2"}
                >
                  {getArrayText(
                    skill,
                    index === 0,
                    index === skills.length - 1
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex text-base-white mb-6">
          <div className="mr-2 font-camphor">{">"}</div>
          <div className={styles.terminal} />
        </div>
      </div>
    </>
  );
}
 */
import data from "../data/data.json";
import styles from "./Terminal.module.css";

interface IInfo {
  title: string;
  link: string;
}

export function Terminal() {
  const name: string = data.info.name;
  const currentLocation: string = data.info.location;
  const contactInfo: IInfo[] = [
    {
      title: data.info.email,
      link: data.info.email_link,
    },
    {
      title: "LinkedIn",
      link: data.info.linkedin_link,
    },
    {
      title: "github",
      link: data.info.git_link,
    },
  ];

  const resume: IInfo = {
    title: data.info.pdf_title,
    link: data.info.pdf_link,
  };

  const skills: string[] = data.info.skills;

  function getStringText(str: string) {
    let newStr = '"' + str + '"';
    return newStr;
  }

  function getArrayText(str: string, isFirst: boolean, isLast: boolean) {
    let newStr;
    if (isFirst) newStr = '["' + str + '",';
    else if (isLast) newStr = '"' + str + '"]';
    else newStr = '"' + str + '",';
    return newStr;
  }
  console.log(data);

  return (
    <>
      <div className="flex items-center rounded-t-lg bg-[#dbdade]">
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-red-400" />
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-yellow-400" />
        <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-green-400" />
      </div>

      <div className="p-8 bg-base-gray rounded-b-lg flex flex-col text-lg font-monaco leading-normal">
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.currentLocation</div>
          </div>
          <div className="text-base-yellow">
            {getStringText(currentLocation)}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.contactInfo</div>
          </div>
          <div className="text-base-yellow flex flex-wrap">
            {contactInfo.map((cont: IInfo, index: number) => (
              <div key={index}>
                {index === 0 ? '["' : '"'}
                <a
                  className="text-base-blue"
                  rel="noopener noreferrer"
                  href={cont.link}
                  target="_blank"
                >
                  {cont.title}
                </a>
                {index === contactInfo.length - 1 ? '"]' : '",'}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.resume</div>
          </div>
          <div className="text-base-yellow">
            <a
              className="text-base-blue"
              rel="noopener noreferrer"
              href={resume.link}
              target="_blank"
            >
              {resume.title}
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex text-base-white">
            <div className="mr-2 font-camphor">{">"}</div>
            <div>{name}.skills</div>
          </div>
          {skills ? (
            <div className="flex text-base-yellow flex-wrap">
              {skills.map((skill: string, index: number) => (
                <div
                  key={index}
                  className={index === skills.length - 1 ? "" : "mr-2"}
                >
                  {getArrayText(
                    skill,
                    index === 0,
                    index === skills.length - 1
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex text-base-white mb-6">
          <div className="mr-2 font-camphor">{">"}</div>
          <div className={styles.terminal} />
        </div>
      </div>
    </>
  );
}
