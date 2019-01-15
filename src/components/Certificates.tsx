import * as React from "react";
import styled from "styled-components";

interface CertificationsProps {
  name: String;
  link: any;
}
const ViewLink = styled.a`
  color: rgb(42, 206, 113);
  font-size: 1.1em;
  font-weight: 600;
  margin-left: 8px;
`;

const Certification: React.SFC<CertificationsProps> = ({ name, link }) => {
  return (
    <div>
      <div>
        <span>{name}</span>
        <ViewLink href={link} target="_blank">
          View
        </ViewLink>
      </div>
    </div>
  );
};

export default Certification;
