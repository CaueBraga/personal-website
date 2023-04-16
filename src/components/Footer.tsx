import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="flex justify-center  text-footer text-xs font-normal items-center my-12">
      Made by Cauê Braga
      <FontAwesomeIcon className="mx-1" icon={faCopyright} />
      2021
    </div>
  );
}
